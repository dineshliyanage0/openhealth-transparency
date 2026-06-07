# Contributing to OpenHealth Transparency

Thank you for your interest. OHT needs engineers, designers, healthcare professionals, and policy experts — you don't have to write code to contribute.

## Before You Start

1. Read [docs/01-rationale.md](docs/01-rationale.md) — understand what the project is and, just as importantly, what it is **not** (no accusations, verified data only).
2. Skim [docs/02-architecture.md](docs/02-architecture.md) and the doc relevant to your area.
3. Check open issues; comment on one before starting so work isn't duplicated.

## Development Setup

Prerequisites: Node.js 20+, pnpm 9+, Python 3.11+, Docker.

```bash
git clone https://github.com/your-org/openhealth-transparency
cd openhealth-transparency
docker compose up -d          # PostgreSQL + MinIO
pnpm install                  # JS workspaces
cd apps/api
pip install -r requirements.txt
alembic upgrade head
```

Run:

```bash
pnpm dev                      # web-public :3000, web-admin :3001
uvicorn main:app --reload     # API :8000 (from apps/api)
```

## Workflow

1. Fork → feature branch from `main` (`feat/...`, `fix/...`, `docs/...`).
2. Keep PRs small and focused — one concern per PR.
3. Write tests for new behavior (pytest for API, Vitest/Playwright for web).
4. Ensure `pnpm lint`, `pnpm test`, and `pytest` pass.
5. Open a PR describing **what** and **why**; link the issue.
6. A maintainer reviews; expect requests for changes — that's normal.

Commit messages follow Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`).

## Coding Standards

- **TypeScript:** strict mode; no `any` without justification; components in `packages/ui` when shared.
- **Python:** type hints everywhere; Ruff for lint/format; Pydantic models for all request/response bodies.
- **API contracts:** change the FastAPI models → regenerate `packages/types`; never hand-edit generated types.
- **Migrations:** every schema change ships with an Alembic migration; never edit a merged migration.
- **Security:** no PII in logs; all mutations audited; see visibility rules in [docs/04-data-model.md](docs/04-data-model.md).
- **Design:** UI follows the [Civic Ledger design system](docs/design/design-system.md) — notably the no-1px-border rule and tonal layering.

## Contribution Areas

| Area | Examples |
|---|---|
| Backend | API endpoints, verification state machine, audit middleware |
| Frontend | Public portal pages, admin triage UI, accessibility |
| Data | Schema review, hospital seed data, analytics queries |
| Design | Components, localization-aware layouts (Sinhala/Tamil) |
| Domain | Device categorization, verification standards, evidence guidelines |
| Docs | Everything in `/docs`, translations |

## Major Changes

Architecture or scope changes (e.g., new service, schema redesign, stack change) need a short written proposal as a GitHub issue tagged `proposal` before implementation. Core maintainers decide; discussion is open to all.

## Code of Conduct

Be respectful and assume good faith. This project touches a sensitive public-interest domain: keep discussion factual and neutral, and never use the project to make accusations against individuals or institutions.
