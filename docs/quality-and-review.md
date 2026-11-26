# Quality, Challenge, and Verification

## Separate three functions

1. **Verification:** objective checks against acceptance criteria—tests, measurements, source validation, screenshots, logs, or customer evidence.
2. **Review:** a qualified reviewer inspects the artifact and the original requirement for omissions, defects, unsafe assumptions, and policy mismatches.
3. **Board challenge:** Claude, as Shadow of the Board, challenges consequential reasoning and recommendations before the Board decides.

These functions are related but not interchangeable. Claude is not automatically an independent reviewer of every worker output, and its agreement does not prove correctness.

## Risk-based controls

- Low risk: internal drafts and reversible experiments; automated checks may be sufficient.
- Moderate risk: code changes, analytics, and reversible operational changes; require tests and a separate review.
- High risk: external marketing, customer data, payments, legal content, security, production data, and destructive changes; require explicit human approval and verifiable evidence.

## Required review output

State the original criteria, evidence inspected, checks performed, defects, severity, residual risks, uncertainty, and recommendation. Distinguish blocking defects from optional improvements.

## Evidence rule

Do not accept “done” as proof. Link the artifact and verification evidence. State what was not tested or could not be verified.
