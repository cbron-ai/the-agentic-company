# Workflow: Code Review

1. Engineer works in an isolated branch and scoped repository.
2. Engineer runs relevant tests and records exact commands/results.
3. Reviewer checks diff against acceptance criteria, tests, security, dependencies, and scope.
4. Blocking findings are fixed and re-reviewed.
5. Human or protected repository process authorizes merge.
6. Record commit, review outcome, test evidence, and known risks.

Never expose production secrets to an agent. Do not treat passing tests as proof that a change is safe.
