# OpenHealth Transparency (OHT)

### Making public healthcare systems accountable through transparent, evidence-based technology.


## Overview

OpenHealth Transparency (OHT) is an open-source platform designed to track, verify, and publicly present the operational status of critical medical devices in public healthcare systems.

The goal is to reduce information asymmetry by providing **evidence-based visibility** into equipment availability, downtime, and repair processes.


## Why This Project Exists

In many public healthcare systems, patients face uncertainty due to lack of reliable information about medical equipment availability.

This project focuses on solving that problem through:

* Transparency
* Accountability
* Structured data
* Evidence-based reporting

This is not an accusation platform. It is a **visibility and trust platform**.



## Key Features (MVP)

* Hospital and device registry
* Device status tracking
* Incident reporting with evidence upload
* Verification and approval workflow
* Public transparency portal (verified data only)
* Full audit trail



## Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS + shadcn/ui

### Backend

* Python (FastAPI)
* REST API
* Background workers (Celery / RQ)

### Database

* MariaDB

### Storage

* AWS S3

### Authentication

* JWT + Role-Based Access Control

### Hosting

* Frontend: Vercel
* Backend: AWS (ECS / EC2)
* Database: AWS RDS (MariaDB)



## High-Level Architecture

### Client Applications

* Public Web Portal
* Admin Web Portal
* Mobile App (future)

### Backend Services

* API Layer (FastAPI)
* Verification Workflow Engine
* Notification Service

### Data Layer

* Relational Database (MariaDB)
* Object Storage (S3)



## Project Structure (Monorepo)

```
/apps
  /web-public
  /web-admin
  /api

/packages
  /ui
  /types
  /utils
  /config
```



## Getting Started

### Prerequisites

* Node.js 18+
* Python 3.10+
* MariaDB
* Docker (optional)

### Setup

```
git clone https://github.com/your-org/openhealth-transparency
cd openhealth-transparency
```

### Install Dependencies

```
# frontend
npm install

# backend
cd apps/api
pip install -r requirements.txt
```

### Run Development

```
# frontend
npm run dev

# backend
uvicorn main:app --reload
```



## Contribution Guidelines

We welcome contributions from developers, designers, and domain experts.

### How to Contribute

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Submit a pull request

### Contribution Areas

* Frontend UI
* Backend APIs
* Data modeling
* Verification workflows
* Security improvements
* Documentation



## Coding Standards

* TypeScript-first frontend
* Python backend with type hints
* Modular architecture
* Small, focused pull requests
* Document APIs



## Roadmap

### Phase 1 (MVP)

* Device registry
* Status tracking
* Basic verification workflow
* Public portal

### Phase 2

* Alerts and escalation
* Analytics dashboards
* Role refinement

### Phase 3

* Integrations
* Predictive insights
* Multi-country support



## Governance Model

Maintainer-led open governance:

* Core maintainers review PRs
* Contributors can become maintainers
* Major changes via proposals



## License

MIT License (recommended)



## Disclaimer

This system provides structured, evidence-based visibility into healthcare equipment status.

It does not make accusations and does not replace official investigations.



## Call for Contributors

We are looking for:

* Software engineers
* Designers
* Healthcare professionals
* Policy experts

If you believe in building transparent public systems, join us.



## Next Steps

* Define API contracts
* Design database schema
* Create UI wireframes
* Initialize monorepo
* Create GitHub issues



**OpenHealth Transparency — Building trust through systems.**
