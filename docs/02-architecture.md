# 02 — System Architecture

## Overview

OHT is a monorepo with two Next.js frontends and one FastAPI backend over PostgreSQL, with S3-compatible object storage for evidence files.

```
┌─────────────────┐      ┌─────────────────┐
│   web-public    │      │   web-admin     │
│ (Next.js, SSR)  │      │ (Next.js, auth) │
└────────┬────────┘      └────────┬────────┘
         │  HTTPS / REST (JSON)   │
         └───────────┬────────────┘
                     ▼
         ┌───────────────────────┐
         │     api (FastAPI)     │
         │  - REST endpoints     │
         │  - Auth (JWT + RBAC)  │
         │  - Verification engine│
         │  - Audit logger       │
         └─────┬──────────┬──────┘
               │          │
               ▼          ▼
      ┌────────────┐  ┌────────────┐
      │ PostgreSQL │  │ S3 storage │
      │ (core data)│  │ (evidence) │
      └────────────┘  └────────────┘
```

## Components

### web-public — Public Transparency Portal

- Read-only. No login for citizens in MVP.
- Shows **verified data only**: hospital/device directory, current device status, downtime history, recently resolved incidents.
- Server-side rendered for SEO and low-end device performance; aggressively cached since data changes only on verification events.
- Anonymous incident *submission* form (rate-limited, CAPTCHA-protected) posts to the API; submissions are never publicly visible until verified.

### web-admin — Admin & Verification Portal

- Authenticated app for hospital staff, verifiers, and administrators.
- Functions: registry management (hospitals, devices), incident triage and verification, status updates, evidence review, audit log inspection, user/role management.
- All actions go through the API; the portal holds no business logic of record.

### api — FastAPI Backend

Single service in MVP (modular monolith), organized by domain modules:

| Module | Responsibility |
|---|---|
| `auth` | JWT issuance/refresh, password hashing, RBAC enforcement |
| `registry` | Hospitals, departments, devices CRUD |
| `incidents` | Report intake, evidence upload (pre-signed S3 URLs), lifecycle |
| `verification` | State machine for report verification (see [07](07-verification-workflow.md)) |
| `public` | Read-only endpoints serving only verified/published data |
| `audit` | Append-only action log, written by middleware on every mutation |
| `notifications` | Email/webhook notifications on state changes (Phase 2) |

Background jobs (evidence virus-scanning, notification fan-out, scheduled status-staleness checks) run via a task queue (Celery + Redis, or ARQ) — introduced in Phase 2; MVP runs synchronous.

### Data Layer

- **PostgreSQL** — system of record. Schema in [04-data-model.md](04-data-model.md). Migrations via Alembic.
- **S3-compatible storage** — evidence files (photos, documents). The DB stores metadata + object keys only. Uploads use pre-signed URLs so files never pass through the API. Public access to evidence is mediated by the API (signed, time-limited URLs for verified evidence only).

## Key Architectural Rules

1. **Public/verified boundary is enforced at the API**, not the frontend. The `public` module can only query rows in published states. The public portal has no credentials that could read unverified data.
2. **Audit is append-only.** No update/delete on audit rows; enforced via DB permissions.
3. **All mutations are attributable** — every write carries an authenticated actor (or a tracked anonymous-submission token) recorded in the audit log.
4. **Shared types** — API exposes an OpenAPI schema; TypeScript clients/types for both web apps are generated from it (`packages/types`), so frontend and backend contracts cannot drift silently.
5. **Stateless API** — horizontal scaling needs no session affinity; all state in PostgreSQL/S3/Redis.

## Deployment (target)

| Component | Hosting |
|---|---|
| web-public, web-admin | Vercel (or any Node host) |
| api | Containerized — AWS ECS/EC2, Fly.io, or Railway |
| PostgreSQL | Managed (RDS, Supabase, Neon) |
| Object storage | S3 or compatible (Cloudflare R2, MinIO self-hosted) |

Local development uses Docker Compose (Postgres + MinIO + Redis) — see CONTRIBUTING.md.
