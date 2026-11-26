# Security Model

Assume agents can misunderstand instructions, hallucinate, follow malicious retrieved content, expose secrets, call tools incorrectly, or be manipulated through prompt injection.

## Required controls

1. Least privilege: read-only by default; narrowly scoped write tools.
2. Separate identities: project-scoped credentials; revoke them when a worker or project ends.
3. Environment isolation: separate OS identities, containers, or VMs across trust boundaries.
4. Secret hygiene: never put secrets in prompts, logs, source control, or untrusted content.
5. Network controls: restrict outbound access where practical.
6. Human gates: require approval for high-impact external, financial, and destructive actions.
7. Auditability: record actor, tool, target, time, authorization, result, and evidence.
8. Tested stop procedure: stop new runs, terminate active work, disable schedules, revoke credentials, freeze external actions, and preserve logs.
9. Negative tests: prove forbidden reads and writes fail.

## Important distinction

A shared operating-system account can allow one worker to read another worker's files even when directories appear separate. Prefer separate OS identities, isolated containers or VMs, and scoped credentials. If weaker isolation is accepted, document the exposure plainly; do not call it strong isolation.

## Board / CEO / Shadow boundaries

Muse's credentials should not grant authority beyond the approved operational mandate. Claude's Shadow role should normally receive the information needed to challenge decisions, not production credentials or operational write access. The Board's approval authority must be enforced outside agent prompts.
