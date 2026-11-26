# Security Policy

## Scope

This project describes patterns for systems that may connect AI agents to code, files, communication channels, customer data, and financial or production tools. Misconfiguration can cause real harm.

## Reporting a vulnerability

Do not publish exploit details, credentials, customer data, or an unpatched vulnerability in a public issue. Use GitHub's private vulnerability reporting for this repository if enabled, or contact the maintainers privately through the organization.

Include affected version/commit, impact, reproduction steps, and a suggested mitigation where possible.

## Security baseline

- Use separate identities and isolated execution environments for different trust domains.
- Grant least privilege; scope credentials to one service and purpose.
- Keep secrets out of prompts, logs, source control, and generated reports.
- Require explicit human approval for money movement, legal commitments, external publication, destructive operations, and production changes unless a narrowly bounded policy has been technically enforced and specifically authorized.
- Treat agent output and retrieved content as untrusted input.
- Log consequential actions and preserve evidence.
- Provide a tested stop/revoke procedure.
- Test denied actions, not only successful workflows.

Prompt instructions are not access controls. Enforce permissions in the runtime, operating system, API, and infrastructure.
