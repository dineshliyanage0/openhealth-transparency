# 06 — Roles & Permissions

RBAC enforced in the API layer (FastAPI dependencies), with hospital-scoping applied for staff. Roles are single-valued per user in MVP.

## Roles

| Role | Who | Summary |
|---|---|---|
| `viewer` | Read-only internal observer (e.g., researcher, oversight body) | Read everything in admin portal except PII and user management; no writes |
| `hospital_staff` | Authorized hospital employee | Manage devices and status **for their own hospital**; file internal reports; see own-hospital incidents |
| `verifier` | Trained reviewer (independent of the hospital concerned) | Triage and transition incident reports; control evidence visibility; write public summaries |
| `admin` | Platform operator | Full registry and user management (below superadmin); read audit log |
| `superadmin` | Core maintainers (very few) | Everything, incl. creating admins; break-glass account |

The public portal requires no account; anonymous reporters get a `tracking_code`, not an account, in MVP.

## Permission Matrix

| Capability | viewer | hospital_staff | verifier | admin | superadmin |
|---|---|---|---|---|---|
| Read registry (all hospitals) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create/edit hospitals | ❌ | ❌ | ❌ | ✅ | ✅ |
| Create/edit devices | ❌ | own hospital | ❌ | ✅ | ✅ |
| Update device status | ❌ | own hospital | ✅ | ✅ | ✅ |
| View incidents (all states) | ✅* | own hospital* | ✅ | ✅ | ✅ |
| File internal incident report | ❌ | ✅ | ✅ | ✅ | ✅ |
| Transition incident states | ❌ | ❌ | ✅ | ✅ | ✅ |
| Write/edit `public_summary` | ❌ | ❌ | ✅ | ✅ | ✅ |
| Mark evidence public | ❌ | ❌ | ✅ | ✅ | ✅ |
| View reporter contact (PII) | ❌ | ❌ | ✅** | ✅** | ✅** |
| Manage users | ❌ | ❌ | ❌ | ✅ (≤admin) | ✅ |
| Read audit log | ❌ | ❌ | ❌ | ✅ | ✅ |

\* Reporter PII always excluded.
\** PII access is itself audit-logged.

## Rules

1. **Separation of duties:** a verifier must not verify reports concerning a hospital they are affiliated with. Enforced by storing verifier affiliations and blocking transitions on conflict.
2. **Hospital scoping:** `hospital_staff` writes are constrained by `user.hospital_id`; attempts outside scope return 403 and are audit-logged.
3. **No silent privilege change:** role/scope changes require admin+, are audited, and invalidate the target user's refresh tokens.
4. **Least privilege default:** new users default to `viewer`.
5. **Anonymous reporters** are rate-limited, never authenticated, and can only see their own submission via tracking code.
