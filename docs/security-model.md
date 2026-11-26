# Security Model

## Threat model

Assume agents can misunderstand instructions, hallucinate, follow malicious content in retrieved data, expose secrets, call tools incorrectly, or be manipulated by users and external content.

## Required controls

1. **Identity isolation:** separate service identities for distinct projects and trust boundaries.
2. **Least privilege:** read-only by default; narrowly scope write tools and credentials.
3. **Environment isolation:** use containers, VMs, or OS accounts to prevent cross-project access.
4. **Secret management:** inject secrets at runtime; never place them in prompts or repository files.
5. **Network control:** restrict outbound access where feasible; allowlist sensitive integrations.
6. **Human gates:** require approval for high-impact external and destructive actions.
7. **Auditability:** record actor, tool, target, time, authorization, result, and evidence.
8. **Revocation:** provide a tested way to stop agents and revoke credentials.
9. **Adversarial testing:** test prompt injection, unauthorized file access, privilege escalation, and policy bypass.

## Important distinction

A system prompt saying "do not access another project" does not isolate files. Enforce that boundary with operating-system permissions and separate credentials. Test that denied access actually fails.
