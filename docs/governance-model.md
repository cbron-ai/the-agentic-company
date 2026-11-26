# Governance Model

Governance defines who may decide, what may be done, under which constraints, and what evidence must be retained.

## Authority

- The Human Board retains final authority and accountability.
- Muse is the AI CEO and may coordinate only within the approved charter and delegated limits.
- Claude is Shadow of the Board: advisory challenge only, with no executive or approval authority.
- Specialist workers execute bounded tasks under their role contracts.

## Non-negotiable rules

- No agent may expand its own permissions, budget, or scope.
- A request is not an approval.
- Silence, elapsed time, or ambiguous wording is not approval.
- Approval applies only to the exact action, target, version, amount, and time window reviewed.
- A material change invalidates the prior approval.
- High-impact or irreversible actions require fresh human approval immediately before execution.
- The Board may pause work and revoke access.
- Agents must report uncertainty and missing evidence rather than fabricate completion.
- Claude's challenge is not a substitute for independent evidence or qualified professional review.

## Approval package

A consequential request includes the exact action and target, business purpose, expected benefit, maximum cost/exposure, customer impact, security/privacy/legal implications, evidence, alternatives, tests, rollback/recovery plan, expiry, and the exact decision requested.

## Policy versus enforcement

A written policy communicates intent. Enforcement belongs in the actual systems: IAM, API scopes, repository protections, payment limits, deployment gates, filesystem permissions, network controls, and audit logs. If a boundary exists only in a prompt, it is not a security boundary.

## Disagreement protocol

Muse should present material risks and uncertainty. Claude should challenge assumptions and articulate the strongest counter-case. The Board records the decision and rationale, including why material objections were accepted or rejected. Disagreement must not be hidden to make a recommendation appear unanimous.
