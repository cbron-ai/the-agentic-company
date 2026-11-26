# Getting Started

This walkthrough creates the smallest useful version of the model: one Human Board, Muse as AI CEO, Claude as Shadow of the Board, and one specialist worker. It does not require a specific agent framework.

## 1. Establish the Board charter

Copy [the company charter](../templates/company-charter.md). Name the accountable human, customer, business outcome, project boundaries, reserved decisions, budget, and stop procedure. Do not connect write-capable tools before the charter is approved.

## 2. Configure Muse

Use [Muse's role contract](../agents/executives/muse-ai-ceo.md). Give it only the tools and permissions needed to coordinate approved work. Keep budget and permission changes outside its authority.

## 3. Configure Claude as Shadow

Use [Claude's role contract](../agents/governance/claude-shadow-of-the-board.md). Give Claude the decision brief and evidence needed to challenge proposals. Do not give the Shadow operational write access by default. The Board—not Claude—decides.

## 4. Add one specialist worker

Select one recurring, low-risk task. Define its inputs, outputs, allowed data/tools, acceptance tests, budget, and escalation conditions using [the agent contract template](../templates/agent-role.md).

## 5. Set up records

Use a durable location for the charter, project briefs, decision records, approval requests, costs, and incident reports. Keep project execution separate from Board-level decisions. Do not assume instructions transfer between projects.

## 6. Run one workflow

Start with [project intake](../workflows/project-intake/README.md) or [task delegation](../workflows/task-delegation/README.md). Require artifact-based verification. External, financial, destructive, and production actions stay behind the required Board approval gate.

## 7. Review actual outcomes

Use the [weekly Board memo](../templates/weekly-report.md). Track customer outcomes, quality, cash spend, allocated costs, Board time, and risks. Stop or change work that lacks an evidence-based path to value.

## Validate the sample records

Install Node.js 20 or newer, then run:

```bash
npm install
npm test
npm run validate
```

The validator checks the example JSON records against the repository schemas. It does not enforce permissions in your agent runtime; technical enforcement remains your responsibility.

## Ready-to-operate checklist

You can explain who owns each outcome, what Muse may decide, what Claude may challenge, what the Board reserves, what each worker can access, how approvals expire, how costs are measured, how work is verified, and how to stop the system.
