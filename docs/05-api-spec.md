# 05 — API Specification

REST, JSON, versioned under `/api/v1`. FastAPI auto-generates the authoritative OpenAPI schema; this document defines the contract surface and conventions. TypeScript types in `packages/types` are generated from the OpenAPI schema in CI.

## Conventions

- **Auth:** `Authorization: Bearer <access_token>`. Public endpoints need no auth.
- **Errors:** RFC 7807 problem-details shape: `{ "type", "title", "status", "detail" }`.
- **Pagination:** `?page=` and `?page_size=` (max 100); responses wrap as `{ "items": [...], "total", "page", "page_size" }`.
- **IDs:** UUIDs.
- **Timestamps:** ISO 8601 UTC.

## Public endpoints (no auth — verified data only)

| Method | Path | Purpose |
|---|---|---|
| GET | `/public/hospitals` | List hospitals; filters: `district`, `province`, `type`, `q` |
| GET | `/public/hospitals/{id}` | Hospital detail incl. departments and device summary |
| GET | `/public/devices` | List devices; filters: `hospital_id`, `category`, `status`, `district` |
| GET | `/public/devices/{id}` | Device detail + status history |
| GET | `/public/incidents` | Published/resolved incidents; filters: `hospital_id`, `state`, `category` |
| GET | `/public/incidents/{id}` | Public summary, public evidence links (signed, time-limited) |
| GET | `/public/stats` | Aggregates for portal home: device counts by status, open/resolved incident counts, avg resolution days |
| POST | `/public/reports` | **Anonymous incident submission.** Rate-limited + CAPTCHA. Returns a `tracking_code` for the reporter to check status |
| GET | `/public/reports/{tracking_code}` | Reporter checks own submission state (no PII returned) |
| POST | `/public/reports/{tracking_code}/evidence` | Request pre-signed upload URL for evidence |

## Auth

| Method | Path | Purpose |
|---|---|---|
| POST | `/auth/login` | email + password → access (15 min) + refresh (7 d) tokens |
| POST | `/auth/refresh` | rotate tokens |
| POST | `/auth/logout` | revoke refresh token |
| GET | `/auth/me` | current user profile + role |

## Registry (admin portal)

| Method | Path | Role |
|---|---|---|
| GET/POST | `/hospitals` | read: staff+; write: admin |
| GET/PATCH/DELETE | `/hospitals/{id}` | write: admin (delete = deactivate) |
| GET/POST | `/departments`, `/devices` | read: staff+; write: admin, or staff scoped to own hospital |
| PATCH/DELETE | `/devices/{id}` | as above |
| POST | `/devices/{id}/status` | staff (own hospital), verifier, admin — creates `device_status_event` |

## Incidents & Verification (admin portal)

| Method | Path | Role |
|---|---|---|
| GET | `/incidents` | verifier, admin; staff see own-hospital reports. Filters: `state`, `hospital_id`, `category` |
| GET | `/incidents/{id}` | as above; includes evidence + verification history |
| POST | `/incidents` | staff — internal report (skips CAPTCHA path) |
| POST | `/incidents/{id}/transition` | verifier, admin — body: `{ "to_state", "note", "public_summary"? }`. Validates against state machine ([07](07-verification-workflow.md)) |
| PATCH | `/incidents/{id}/evidence/{eid}` | verifier — toggle `is_public` |

## Users & Audit (admin)

| Method | Path | Role |
|---|---|---|
| GET/POST | `/users` | admin (cannot create superadmin); superadmin |
| PATCH | `/users/{id}` | admin/superadmin (role/scope changes audited) |
| GET | `/audit` | admin, superadmin — filters: `actor_id`, `entity_type`, `action`, date range. Read-only |

## Rate Limits (MVP)

| Surface | Limit |
|---|---|
| `POST /public/reports` | 5/hour per IP + CAPTCHA |
| Public GETs | 60/min per IP |
| Auth login | 10/min per IP, lockout-free (use exponential delay) |
