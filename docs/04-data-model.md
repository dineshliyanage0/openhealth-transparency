# 04 — Data Model

PostgreSQL schema for the MVP. Conventions: UUID primary keys, `created_at`/`updated_at` timestamps (UTC) on every table, snake_case names, soft deletes only where noted (registry entities), enums as Postgres enum types.

## Entity Overview

```
hospital ─< department ─< device ─< device_status_event
                              └──< incident_report ─< evidence_file
                                        └──< verification_action
user ──< (all mutations via audit_log)
```

## Tables

### hospital

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| name | text | official name |
| name_si / name_ta | text | Sinhala / Tamil names (nullable, MVP optional) |
| district | text | Sri Lankan district |
| province | text | |
| type | enum | `national`, `teaching`, `district_general`, `base`, `divisional` |
| address, latitude, longitude | | for map view |
| is_active | bool | soft delete |

### department

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| hospital_id | uuid FK | |
| name | text | e.g., Radiology, Cardiology |

### device

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| department_id | uuid FK | |
| category | enum | `mri`, `ct`, `xray`, `ultrasound`, `dialysis`, `ventilator`, `surgical`, `lab`, `other` |
| model / manufacturer | text | nullable |
| commissioned_date | date | nullable |
| current_status | enum | `operational`, `under_maintenance`, `unavailable`, `decommissioned` — denormalized from latest status event |
| metadata | jsonb | category-specific attributes |
| is_active | bool | soft delete |

### device_status_event

Append-only history of status changes. `current_status` on `device` is updated in the same transaction.

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| device_id | uuid FK | |
| status | enum | as above |
| reason | text | |
| expected_restore_date | date | nullable |
| source | enum | `staff_update`, `verified_incident`, `admin_correction` |
| incident_report_id | uuid FK | nullable — set when caused by a verified incident |
| actor_id | uuid FK → user | |

### incident_report

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| device_id | uuid FK | nullable if device not in registry — see `unregistered_device_description` |
| hospital_id | uuid FK | always required |
| unregistered_device_description | text | nullable |
| description | text | what the reporter experienced |
| occurred_at | timestamptz | |
| reporter_type | enum | `citizen_anonymous`, `citizen_account` (post-MVP), `staff` |
| reporter_contact | text | nullable, encrypted at rest, never public |
| state | enum | see [07-verification-workflow.md](07-verification-workflow.md): `submitted`, `in_review`, `needs_info`, `verified`, `published`, `rejected`, `resolved` |
| public_summary | text | neutral summary written by verifier; the only narrative text ever shown publicly |
| resolved_at | timestamptz | nullable |

### evidence_file

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| incident_report_id | uuid FK | |
| object_key | text | S3 key; bucket is private |
| content_type / size_bytes | | |
| sha256 | text | integrity check |
| is_public | bool | default false; verifier may mark redacted/safe evidence public |
| scan_status | enum | `pending`, `clean`, `flagged` (Phase 2) |

### verification_action

Append-only log of workflow transitions on a report.

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| incident_report_id | uuid FK | |
| from_state / to_state | enum | |
| actor_id | uuid FK → user | |
| note | text | internal reasoning, never public |

### user

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| email | citext unique | |
| password_hash | text | argon2/bcrypt |
| full_name | text | |
| role | enum | `viewer`, `hospital_staff`, `verifier`, `admin`, `superadmin` — see [06](06-roles-permissions.md) |
| hospital_id | uuid FK | nullable — scopes `hospital_staff` to their hospital |
| is_active | bool | |

### audit_log

Append-only. Written by API middleware on every mutation. DB role used by the app has INSERT-only on this table.

| Column | Type | Notes |
|---|---|---|
| id | bigserial PK | |
| actor_id | uuid | nullable for anonymous submissions |
| action | text | e.g., `incident.create`, `device.status_update` |
| entity_type / entity_id | | |
| payload | jsonb | diff or full new value |
| ip_hash | text | hashed, for abuse investigation |
| created_at | timestamptz | |

## Public-Visibility Rule (enforced in queries)

The public portal may only see: active hospitals/departments/devices, `current_status` and status history where `source != 'admin_correction'` pending review, and incident reports in `published` or `resolved` state — exposing only `public_summary`, device, hospital, dates, and evidence rows with `is_public = true`. Reporter identity/contact is never exposed in any state.
