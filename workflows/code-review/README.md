# Workflow: Code Review

1. Engineer works in an isolated branch and scoped repository.
2. Engineer records the requirement, changed files, tests, commands, and results.
3. A reviewer receives the original requirement and full diff—not merely the author's summary.
4. Reviewer checks correctness, scope, security, dependency risk, failure handling, and test coverage.
5. Blocking findings are fixed and re-reviewed.
6. Merge occurs only through the repository's protected process and required human approval.
7. Record commit, review outcome, test evidence, and known residual risks.

Claude's Shadow role is not a replacement for technical code review. Never expose production secrets to an agent.
