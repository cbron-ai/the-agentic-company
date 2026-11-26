# The Agentic Company

**One founder. An AI executive team. A company that gets things done.**

The Agentic Company is an open, framework-agnostic operating system for people who want to build and run a small business with a coordinated team of AI agents—while keeping human authority over strategy, money, risk, and commitments.

This repository contains the operating model, governance patterns, role definitions, workflows, reusable templates, schemas, and examples.

> **Status: early-stage working project.** This is a practical blueprint, not a claim that fully autonomous companies are proven, safe by default, or reliably profitable. Treat examples as starting points and validate them in your own environment.

## Why this exists

Most agent projects focus on making an individual agent more capable. A business needs more than capable agents: it needs clear roles, bounded authority, reliable handoffs, review, security, cost controls, and measurable outcomes.

This project focuses on the company operating system around the agents.

## Core principles

1. **Human accountability remains explicit.** Agents do not become legal officers, owners, or fiduciaries.
2. **Authority is granted narrowly.** Every agent gets a defined mission, tools, data scope, budget, and limits.
3. **Approval is specific.** Approval applies to a described action and scope; silence is not consent.
4. **Least privilege by default.** Technical permissions should enforce policy wherever possible. Prompt instructions alone are not a security boundary.
5. **Evidence beats confidence.** Consequential work includes sources, artifacts, tests, and a clear status.
6. **Measure business outcomes.** Revenue, customer value, margin, quality, risk, and founder time matter more than agent activity.
7. **Framework independence.** The operating model should outlive any one agent runtime or vendor.

## Start here

- [What is an Agentic Company?](docs/what-is-an-agentic-company.md)
- [Operating model](docs/operating-model.md)
- [Governance model](docs/governance-model.md)
- [Decision rights](docs/decision-rights.md)
- [Security model](docs/security-model.md)
- [Getting started](getting-started/README.md)
- [Company charter template](templates/company-charter.md)
- [Solo founder example](examples/solo-founder/README.md)

## Repository map

| Path | Purpose |
|---|---|
| `docs/` | Concepts and operating guidance |
| `getting-started/` | Guided first setup |
| `company/` | Policies and company-level configuration |
| `agents/` | Role contracts and reusable agent definitions |
| `workflows/` | Repeatable processes with gates and outputs |
| `templates/` | Copy-and-adapt operating artifacts |
| `schemas/` | Machine-readable configuration contracts |
| `examples/` | Illustrative company configurations |
| `integrations/` | Runtime-specific implementation notes |

## Quick start

1. Copy the [company charter](templates/company-charter.md) and define the business, customer, and human owner.
2. Set your [decision rights](company/decision-rights.yaml) and [authority matrix](company/authority-matrix.yaml).
3. Start with one coordinator and one specialist worker; do not create an elaborate org chart before you have repeatable work.
4. Run one low-risk workflow with human review at every consequential boundary.
5. Record time, direct costs, defects, customer outcomes, and approvals.
6. Expand permissions only after the workflow is reliable and the business case is demonstrated.

See the [seven-step setup guide](getting-started/README.md).

## What this is—and is not

**It is:** a governance-first operating model, a set of reusable artifacts, and a place to develop tested adapters.

**It is not:** an autonomous legal entity, a guarantee of passive income, a replacement for professional legal/accounting/security advice, or a new agent framework.

## Project status and roadmap

The initial release is focused on documentation, templates, role contracts, workflows, and schemas. Runtime integrations and executable orchestration are later work. See [ROADMAP.md](ROADMAP.md).

## Contributing

Issues and pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md) first. Please do not submit secrets, private customer data, or real credentials.

## License

This project is licensed under the Apache License 2.0. See [LICENSE](LICENSE).
