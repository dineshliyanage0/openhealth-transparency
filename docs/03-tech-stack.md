# 03 — Tech Stack Decisions

Each choice below records the decision and why, so future contributors understand the trade-offs. Changes to these decisions should go through a proposal (see governance in README).

## Frontend — Next.js (App Router) + TypeScript + Tailwind CSS

**Decision:** Both `web-public` and `web-admin` are Next.js App Router apps, kept as **separate apps** in the monorepo.

**Why:**
- SSR/static rendering for the public portal: fast on low-end devices and good SEO — important for citizen reach in Sri Lanka.
- Separate apps keep the public attack surface minimal (no admin code or auth logic shipped to the public bundle) and let the two apps scale and deploy independently.
- Shared look and components live in `packages/ui`; shared contracts in `packages/types`.
- shadcn/ui + Tailwind implements the [Civic Ledger design system](design/design-system.md).

## Backend — Python + FastAPI

**Decision:** A single FastAPI service (modular monolith).

**Why:**
- FastAPI gives typed request/response models (Pydantic), automatic OpenAPI generation (which feeds frontend type generation), and async performance adequate for this workload.
- Python keeps the door open for later data analysis/ML phases (downtime analytics, predictive maintenance insights) without adding a new stack.
- A monolith is right-sized for the team and MVP; module boundaries (see architecture doc) keep a future split possible.

**Trade-off accepted:** two languages in the repo (TS + Python). Mitigated by generated API types and clear app boundaries.

## Database — PostgreSQL (changed from MariaDB)

**Decision:** PostgreSQL 15+, SQLAlchemy 2.x + Alembic migrations.

**Why the change:**
- JSONB for flexible evidence/device metadata without schema churn.
- Row-level security and richer permission primitives support the audit/append-only guarantees.
- Strongest open-source ecosystem and free managed tiers (Supabase, Neon) — practical for an OSS project's staging environments.
- Better full-text search built in (public portal search without extra infra).

## Object Storage — S3-compatible

**Decision:** S3 API as the contract; AWS S3 or Cloudflare R2 in production, MinIO locally.

**Why:** evidence files (photos, documents) don't belong in the DB; pre-signed URLs keep large uploads off the API; the S3 API keeps us vendor-portable.

## Auth — JWT + RBAC

**Decision:** Short-lived access tokens + refresh tokens, issued by the API. Role-based access control with roles defined in [06-roles-permissions.md](06-roles-permissions.md).

**Why:** stateless, works across both web apps and a future mobile app, no third-party auth dependency for a civic platform.

## Background Jobs — deferred to Phase 2

**Decision:** MVP runs synchronously. Phase 2 introduces a queue (Celery + Redis, or ARQ) for notifications, virus scanning, and scheduled checks.

**Why:** avoid operating Redis + workers before any feature needs them.

## Tooling

| Concern | Choice |
|---|---|
| Package manager (JS) | pnpm workspaces |
| Python deps | `requirements.txt` (move to uv/poetry if complexity grows) |
| Lint/format | ESLint + Prettier (TS), Ruff (Python) |
| Tests | Vitest + Playwright (web), pytest (API) |
| CI | GitHub Actions |
| Local infra | Docker Compose (Postgres, MinIO, Redis) |
