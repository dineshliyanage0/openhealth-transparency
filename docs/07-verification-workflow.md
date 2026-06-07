# 07 — Verification Workflow

The verification workflow is the heart of OHT's credibility: **nothing becomes public without passing through it.** It is implemented as an explicit state machine in the API (`verification` module); transitions outside this graph are rejected.

## States

```
                       ┌──────────────┐
        ┌─────────────▶│  needs_info  │─────────────┐
        │              └──────┬───────┘             │
        │                     │ info provided        │ 30d timeout
┌───────┴───┐          ┌──────▼──────┐         ┌────▼─────┐
│ submitted │─────────▶│  in_review  │────────▶│ rejected │
└───────────┘  claimed └──────┬──────┘ invalid └──────────┘
                              │ evidence sufficient
                       ┌──────▼──────┐
                       │  verified   │
                       └──────┬──────┘
                              │ summary approved
                       ┌──────▼──────┐
                       │  published  │   ← first publicly visible state
                       └──────┬──────┘
                              │ device restored / issue fixed
                       ┌──────▼──────┐
                       │  resolved   │   ← stays public as history
                       └─────────────┘
```

| State | Meaning | Public? |
|---|---|---|
| `submitted` | Intake complete, awaiting triage | ❌ |
| `in_review` | Claimed by a verifier; evidence being assessed | ❌ |
| `needs_info` | Verifier requested more detail/evidence from reporter (via tracking code) | ❌ |
| `verified` | Evidence is sufficient; facts confirmed; neutral `public_summary` drafted | ❌ |
| `published` | Summary approved; visible on the public portal | ✅ |
| `rejected` | Could not be substantiated, duplicate, out of scope, or info timeout | ❌ (counted in aggregate stats only) |
| `resolved` | Underlying issue confirmed fixed; remains public as historical record | ✅ |

## Transition Rules

- Only `verifier`, `admin`, `superadmin` may transition states ([06-roles-permissions.md](06-roles-permissions.md)); the verifier must have no affiliation with the hospital concerned.
- Every transition writes a `verification_action` row (from/to state, actor, internal note) — append-only.
- `verified → published` requires a non-empty `public_summary`. The summary must be **neutral and factual**: what device, where, unavailable since when, current status. No speculation about cause or fault.
- Publishing an incident automatically creates a `device_status_event` (`source = verified_incident`) updating the device's public status.
- `published → resolved` requires confirmation that the device is operational (staff status update + verifier confirmation) and sets `resolved_at`.
- `rejected` is terminal but the record and its audit trail are retained; reporters see a neutral rejection reason via tracking code.
- `needs_info` auto-transitions to `rejected` after 30 days without reporter response (scheduled job, Phase 2; manual in MVP).

## Evidence Standards

- At least one piece of evidence (photo, document, or corroborating staff report) is required to reach `verified`.
- Evidence is private by default. A verifier may mark items public only after checking for personal data (faces, names, patient information) — redaction before publication where needed.
- Reporter identity and contact details are never published in any state and are excluded from API responses except for verifier/admin (PII access audited).

## Why This Design

- **Pre-publication verification** protects hospitals and staff from unsubstantiated claims and protects the platform's neutrality — the system reports verified facts, not allegations.
- **Separation of duties + audit trail** means the verifiers themselves are accountable.
- **Resolved records stay public** so the system builds a longitudinal, citable history of equipment availability — the dataset that enables policy impact.
