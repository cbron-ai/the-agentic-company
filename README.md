# The Agentic Company

**A human Board. Muse as AI CEO. Claude as Shadow of the Board. Specialist agents doing bounded work.**

The Agentic Company is an operating model and practical starter kit for running a one-person business with an AI executive team. The human remains the Board and retains ultimate authority. **Muse is the AI CEO**: it coordinates execution inside the approved charter. **Claude is the Shadow of the Board**: it challenges proposals and decisions for the Board; it is not a second CEO, an execution manager, or an approval authority.

This repository is the companion implementation for *The Agentic Company*. It contains governance documents, role contracts, operating workflows, reusable templates, JSON schemas, example records, and validation code.

> **Status: working companion, not a certified or production-ready platform.** The materials are designed to be adapted and tested. They do not prove that an agent-operated business will be profitable or safe without supervision.

## The operating model

| Role | Responsibility | Authority boundary |
|---|---|---|
| Human Board | Sets direction, approves reserved decisions, owns risk and accountability | Final human authority |
| Muse — AI CEO | Turns approved direction into plans, coordinates workers, monitors delivery, reports exceptions | Cannot expand its mandate, budget, or permissions |
| Claude — Shadow of the Board | Challenges assumptions, tests reasoning, identifies omissions and downside, presents dissent to the Board | Advisory only; cannot execute, approve, or overrule |
| Specialist workers | Perform defined research, engineering, content, finance, operations, and other tasks | Task-scoped permissions and acceptance criteria |

The Shadow role is a structured challenge function, not an independent audit. Different AI sessions can share model weaknesses, training biases, sources, and blind spots. Important decisions still require evidence and human judgment.

## Core principles

1. **Authority stays human.** Delegating execution does not delegate accountability.
2. **Muse executes within a charter.** It may coordinate approved work but cannot rewrite its own authority.
3. **Claude challenges; the Board decides.** Dissent is useful only when its reasoning and evidence are visible.
4. **Approval is exact and scoped.** Silence is not consent; material changes require renewed approval.
5. **Least privilege is technical.** Prompts are not security boundaries.
6. **Evidence beats confidence.** Work is not complete until the result is verified against acceptance criteria.
7. **Economics include hidden costs.** Track subscriptions, infrastructure, human time, and risk—not just API invoices.
8. **Customer value outranks agent activity.** More agents and completed tasks are not proof of a business.

## Start here

1. Read [the operating model](docs/operating-model.md).
2. Complete [the Board charter](templates/company-charter.md).
3. Review [decision rights](company/decision-rights.yaml) and [the authority matrix](company/authority-matrix.yaml).
4. Configure [Muse](agents/executives/muse-ai-ceo.md) and [Claude](agents/governance/claude-shadow-of-the-board.md) using the role contracts.
5. Start with [one project intake](workflows/project-intake/README.md) and one low-risk workflow.
6. Validate the example records with the companion code: `npm install && npm test && npm run validate`.

See [Getting Started](getting-started/README.md) for the complete walkthrough.

## Repository map

- `docs/`: operating principles and procedures
- `company/`: charter, authority, decision rights, and budget policy
- `agents/`: Muse, Claude Shadow, and specialist role contracts
- `workflows/`: project intake, delegation, review, release, and incident procedures
- `templates/`: copyable operating records
- `schemas/`: machine-readable contracts
- `examples/`: sample configuration and approval records
- `tools/`: validation utilities
- `.github/workflows/`: automated validation

## What this is not

This is not a legal corporation, a general-purpose agent framework, a promise of passive income, or a claim that an AI can assume fiduciary responsibility. The book's operational experiments are learning evidence, not proof of commercial success. Readers must adapt controls to their legal, technical, and business context.

## License

Apache-2.0. See [LICENSE](LICENSE).
