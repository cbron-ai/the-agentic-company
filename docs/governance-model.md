# Governance Model

Governance answers four questions: who may decide, what may be done, under what constraints, and what evidence must be retained?

## Non-negotiable rules

- An agent cannot expand its own permissions or budget.
- A request is not approval.
- Silence, elapsed time, or ambiguous language is not approval.
- Approval applies only to the described action, target, amount, and time window.
- Material changes to scope require renewed approval.
- Agents must report uncertainty and missing evidence rather than fabricate completion.
- The human owner can pause work and revoke access.

## Approval package

A consequential approval request should include:
- requested action and exact target;
- business purpose and expected benefit;
- cost and maximum exposure;
- customer, security, legal, and operational impact;
- evidence and alternatives considered;
- rollback or recovery plan;
- expiry time and exact scope.

## Policy versus enforcement

A written policy communicates intent. Enforcement must happen in the relevant system: IAM, API scopes, branch protections, payment limits, deployment gates, filesystem permissions, and network controls.

## Review

Reviewers should have explicit criteria and should surface disagreements. Do not count two agents agreeing as independent confirmation if they share the same sources, model, or assumptions.
