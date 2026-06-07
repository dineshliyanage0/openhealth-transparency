# 01 — Project Rationale

## The Problem

Sri Lanka provides free public healthcare through its government hospital network. In practice, patients are regularly delayed or turned away because critical medical equipment — MRI and CT scanners, surgical devices, diagnostic machines — is reported as unavailable, broken, or under repair.

The failure that OHT addresses is not the equipment breaking down. It is that **no transparent, verifiable, structured record of equipment status exists**:

- Patients cannot confirm whether a device is genuinely unavailable.
- There is no public record of downtime or repair timelines.
- Information is fragmented and informal, so oversight bodies lack structured data.
- Genuine failures cannot be distinguished from miscommunication, inefficiency, or misuse.

This information gap directly affects patient outcomes and erodes public trust in a system designed to guarantee equitable access to care.

## Why a Technology Solution

This is fundamentally an information-systems problem. Manual processes and informal communication cannot provide real-time visibility, consistent verification, reliable history, or scalable oversight. A purpose-built platform can standardize data collection, enforce verification workflows, maintain audit trails, and offer controlled public access.

## What OHT Provides

| Capability | Description |
|---|---|
| Device registry | Central record of critical devices across hospitals |
| Status tracking | Operational / under maintenance / unavailable, with history |
| Incident reporting | Structured reports with evidence attachments |
| Verification workflow | Reports validated before becoming public |
| Public portal | Citizens access verified information only |
| Audit layer | Complete, immutable history of actions and approvals |

## What OHT Is NOT

- It does **not** make accusations or assume intent or misconduct.
- It does **not** publish unverified claims as fact.
- It does **not** replace legal, regulatory, or official investigative processes.

Its purpose is structured, evidence-based visibility — facts, not narratives.

## Design Principles

1. **Evidence first** — nothing is treated as verified without supporting data.
2. **Role-based responsibility** — every user acts within defined permissions.
3. **Auditability** — every action is traceable.
4. **Controlled transparency** — only verified, approved data is public.
5. **Neutrality** — the system records facts; it does not editorialize.

## Why Open Source

- **Trust through transparency** — a transparency system must itself be inspectable, not a black box.
- **Multi-disciplinary collaboration** — engineers, clinicians, policy experts, and researchers can all contribute.
- **Adaptability** — other countries with similar public-health challenges can reuse the platform.
- **Independence** — no reliance on a single organization for long-term sustainability.

## Expected Impact

- Patients know where working equipment is available, reducing wasted journeys and delays.
- Downtime and repair response become measurable, creating accountability pressure.
- Structured cross-hospital data enables better policy and maintenance decisions.
- Systemic regional inequities become visible.

## Scope and Long-Term Vision

The primary design, motivation, and initial implementation are grounded in the **Sri Lankan context**. The priority is a practical, working system solving a real, present problem in Sri Lanka first. If successful, the platform may later be adapted for other countries and regional transparency initiatives.
