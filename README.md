# OpenHealth Transparency (OHT)

**Evidence-based visibility into the availability of critical medical equipment in Sri Lanka's public hospitals.**

OHT is an open-source platform that records, verifies, and publicly presents the operational status of critical medical devices (MRI, CT, surgical equipment, etc.) in government hospitals. It exists to close an information gap: today, patients have no way to confirm whether a device is genuinely unavailable, how long it has been down, or when it will be restored.

This is **not an accusation platform**. Only verified, evidence-backed information becomes public. See [docs/01-rationale.md](docs/01-rationale.md) for the full motivation.

## Project Status

🚧 **Pre-MVP — rebuilding from a clean slate.** The documentation in [`/docs`](docs/) is the blueprint for the implementation. Nothing described below should be assumed to exist in code yet.

## How It Works

1. **Registry** — hospitals and their critical devices are catalogued.
2. **Reporting** — incidents (breakdowns, unavailability) are reported with supporting evidence.
3. **Verification** — a controlled workflow validates reports before anything is published.
4. **Public portal** — citizens see verified device status, downtime history, and resolutions.
5. **Audit trail** — every action is recorded and traceable.

## Tech Stack (decided)

| Layer | Choice |
|---|---|
| Public portal | Next.js (App Router) + TypeScript + Tailwind CSS |
| Admin portal | Next.js (App Router) + TypeScript + Tailwind CSS |
| API | Python, FastAPI |
| Database | PostgreSQL |
| Object storage (evidence) | S3-compatible storage |
| Auth | JWT + role-based access control |

Rationale for each choice: [docs/03-tech-stack.md](docs/03-tech-stack.md)

## Repository Layout

```
/apps
  /web-public     Public transparency portal (Next.js)
  /web-admin      Admin & verification portal (Next.js)
  /api            FastAPI backend
/packages
  /types          Shared TypeScript types
  /ui             Shared UI components
  /utils          Shared utilities
  /config         Shared tooling config
/docs             Project documentation (start here)
```

## Documentation

| Doc | Purpose |
|---|---|
| [01-rationale.md](docs/01-rationale.md) | Why this project exists |
| [02-architecture.md](docs/02-architecture.md) | System architecture |
| [03-tech-stack.md](docs/03-tech-stack.md) | Stack decisions and rationale |
| [04-data-model.md](docs/04-data-model.md) | Database schema |
| [05-api-spec.md](docs/05-api-spec.md) | API contracts |
| [06-roles-permissions.md](docs/06-roles-permissions.md) | Roles and access control |
| [07-verification-workflow.md](docs/07-verification-workflow.md) | Report lifecycle and verification |
| [08-roadmap.md](docs/08-roadmap.md) | Phased delivery plan |
| [design/design-system.md](docs/design/design-system.md) | "Civic Ledger" design system |

## Getting Started (once code lands)

Prerequisites: Node.js 20+, pnpm, Python 3.11+, PostgreSQL 15+.

```bash
git clone https://github.com/your-org/openhealth-transparency
cd openhealth-transparency
pnpm install                       # frontend workspaces
cd apps/api && pip install -r requirements.txt
```

Run dev servers:

```bash
pnpm dev                           # web apps
uvicorn main:app --reload          # API (from apps/api)
```

## Contributing

We welcome engineers, designers, healthcare professionals, and policy experts. Read [CONTRIBUTING.md](CONTRIBUTING.md) first — it covers workflow, coding standards, and where help is needed most.

## Governance

Maintainer-led open governance: core maintainers review PRs, active contributors can become maintainers, and major changes go through written proposals.

## License

MIT — see [LICENSE](LICENSE).

## Disclaimer

OHT provides structured, evidence-based visibility into healthcare equipment status. It does not make accusations, assume misconduct, or replace official investigations or regulatory processes.
