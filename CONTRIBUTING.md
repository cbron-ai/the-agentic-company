# Contributing

Thanks for helping make The Agentic Company more useful, safer, and more practical.

## Contribution principles

- Prefer concrete, testable operating guidance over generic prompt collections.
- Keep the core model framework-agnostic.
- Distinguish policy from technical enforcement. Never describe a prompt instruction as a security boundary.
- Include examples and acceptance criteria for new workflows or templates.
- Be candid about limitations, costs, failure modes, and evidence.
- Do not claim commercial outcomes that have not been demonstrated.

## Before opening a pull request

1. Search existing issues and docs to avoid duplicate work.
2. Explain the problem and the intended user.
3. Include the proposed behavior, risks, and alternatives.
4. Update related docs, examples, and schemas together.
5. Validate links and JSON/YAML syntax where relevant.
6. Remove secrets, tokens, private customer data, and personal information.

## Adding an agent role

An agent definition should state its mission, non-goals, allowed inputs, outputs, tools, data scope, authority, prohibited actions, escalation conditions, evidence requirements, review requirements, and measurable success criteria.

## Adding a workflow

Document trigger, owner, prerequisites, steps, inputs, outputs, decision gates, approvals, failure paths, audit artifacts, and completion criteria.

## Pull request checklist

- [ ] Scope and intended user are clear.
- [ ] Authority and approval boundaries are explicit.
- [ ] Security implications are documented.
- [ ] Examples are safe and contain no secrets.
- [ ] Relevant docs/templates/schemas are updated.
- [ ] Claims are supported and limitations are stated.
