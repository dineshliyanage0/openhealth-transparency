# 08 — Roadmap

Phased delivery for the clean-slate rebuild. Each phase ships something usable end-to-end before the next begins.

## Phase 0 — Foundation (rebuild bootstrap)

- [ ] Re-initialize monorepo (pnpm workspaces) per agreed layout
- [ ] Docker Compose for local dev (PostgreSQL, MinIO)
- [ ] FastAPI skeleton: settings, DB session, Alembic, health check, error/problem-details handler
- [ ] Auth module: login/refresh, JWT, RBAC dependency, user table + seed superadmin
- [ ] CI: lint + test on PR (GitHub Actions); OpenAPI → `packages/types` generation
- [ ] Next.js skeletons for `web-public` and `web-admin` with the Civic Ledger theme tokens

## Phase 1 — MVP

**Goal: a citizen can see verified device status for real hospitals; a verifier can take a report from submission to publication.**

- [ ] Registry: hospitals, departments, devices (API + admin UI)
- [ ] Device status events + history
- [ ] Anonymous incident submission (rate limit + CAPTCHA + tracking code)
- [ ] Evidence upload via pre-signed URLs
- [ ] Verification state machine + admin triage/review UI
- [ ] Public portal: home with stats, hospital/device directory + search, device detail with status history, published/resolved incidents
- [ ] Audit log (middleware + admin viewer)
- [ ] Deploy: staging environment with seed data for a pilot district

## Phase 2 — Operations & Trust

- [ ] Background jobs (queue): notifications, needs_info timeout, evidence virus scan
- [ ] Email notifications for verifiers/staff on state changes
- [ ] Analytics dashboards: downtime by district/category, mean time to resolution
- [ ] Sinhala and Tamil localization of the public portal
- [ ] Reporter status notifications (opt-in contact)
- [ ] Role refinements based on pilot feedback; verifier conflict-of-interest enforcement

## Phase 3 — Scale & Reach

- [ ] Mobile app (or PWA hardening) for public portal
- [ ] Public data exports / read-only API for researchers and journalists
- [ ] Integrations (hospital asset-management systems, ministry reporting)
- [ ] Predictive insights (maintenance risk from downtime patterns)
- [ ] Multi-country configurability (i18n, region models)

## Non-Goals (all phases)

- Naming or rating individual staff
- Publishing unverified reports
- Replacing official investigative or regulatory processes
