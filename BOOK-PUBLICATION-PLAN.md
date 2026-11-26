# Book Publication Readiness Plan

This document is the editorial control record for *The Agentic Company*. It distinguishes manuscript facts from recommendations. It is not a claim that the book is publication-ready.

## Current manuscript assessment

The revised working manuscript is a 21-page DOCX with approximately 4,900 words of body text. It has a clear premise, a useful 14-chapter reader journey, and a credible anti-hype stance. At this length it is closer to a concise field guide or extended booklet than a conventional full-length practical business book. That can be a valid product choice, but the format, price, and promise must match the actual reader value. Do not pad it merely to hit a word count.

The manuscript itself states that the underlying operating experiments do not prove a profitable business model and that early outreach produced no replies. Preserve that honesty. A sellable book needs a stronger, concrete reader outcome—not unsupported success claims.

## Canonical operating model

The book and repository must use these names consistently:

- **Human Board:** the human owner and final authority.
- **Muse — AI CEO:** coordinates execution within Board-approved strategy, scope, budget, and permissions.
- **Claude — Shadow of the Board:** advisory challenge function for the Board; it questions assumptions and surfaces downside but does not run operations, approve actions, or veto the Board.
- **Specialist workers:** execute bounded tasks under explicit role contracts.

Do not collapse Claude's Shadow role into routine QA. Distinguish:
1. objective verification against acceptance criteria;
2. artifact review by an appropriate reviewer;
3. Claude's strategic and decision challenge to the Board.

A second AI session is not independent assurance. The book must retain this limitation.

## Required manuscript corrections

### Structural and terminology

- Replace the generic four-role model (founder/AI CEO/specialist workers/review function) with the Human Board / Muse / Claude Shadow / specialist worker model.
- Explain that "founder" describes the human business owner where relevant, while "Human Board" names the governance role in this operating model.
- Change the charter description from an operating contract between founder and AI CEO to an operating contract between the Human Board and Muse.
- Add a Claude Shadow role definition to the appendices.
- Ensure Claude is advisory only: no operational command, approval, veto, policy-change, or execution authority.
- Clarify that technical verification and review remain separate from the Shadow function.

### Editorial defects already visible

- Chapter 3's "Five rules for approvals" is numbered 6–10. Renumber it 1–5.
- Chapter 8's delivery lifecycle is numbered 11–17. Renumber it 1–7.
- Chapter 10's outreach sequence is numbered 18–23. Renumber it 1–6.
- Ensure all chapter, appendix, table, and cross-reference labels match the final table of contents.

### Evidence and credibility

- Add at least one reproducible case study with baseline, method, sample size, timeframe, actual costs, outcomes, failures, limitations, and artifacts readers can inspect.
- Separate demonstrated facts, anecdotal operational experience, hypotheses, and recommendations.
- Include the failed outreach experiment as a learning case, not a disguised success story.
- Add concrete examples of Board decisions, Muse execution plans, Claude challenge memos, worker task contracts, and verified outcomes.
- Avoid claiming the model is profitable, autonomous, or safer by default without evidence.

### Technical and governance accuracy

- Resolve every conflict between prose, charter, decision-rights table, templates, and code.
- Treat prompt instructions as policy communication, not enforcement.
- Verify permission boundaries, identity isolation, stop/revoke procedures, cost caps, deployment gates, and recovery procedures in a real environment before describing them as tested.
- Distinguish metered cash spend, allocated subscriptions, infrastructure, founder/Board time, and risk/rework costs.
- Date-stamp volatile provider/model instructions and keep them in the companion repository, not the core book.
- Do not describe a shared OS account as strong project isolation.

### Reader value and market fit

- Give readers a clear "finish line": what they will have configured and run by the end of the book.
- Add a single end-to-end worked example that carries one project from intake through evidence gate, Board approval, Muse delegation, worker execution, verification, Claude challenge, release, economics, and portfolio review.
- Make worksheets and templates usable without requiring a particular vendor or framework.
- Test the book's promise and chapter usefulness with target readers before launch.
- Decide deliberately whether this is a short field guide or a longer book; then set product format and pricing accordingly.

### Publication requirements

- Confirm human author attribution, publisher/imprint, copyright ownership, permissions, and AI-assistance disclosure.
- Fact-check legal, financial, security, platform-policy, and technical claims.
- Commission human copyedit and proofread.
- Complete print and ebook layout checks, including tables, code, links, page breaks, metadata, and accessibility.
- Verify every downloadable artifact mentioned in the book exists in the repository and works.
- Obtain target-reader feedback and document revisions before publication.

## Repository companion acceptance criteria

The repository is aligned with the Human Board / Muse / Claude model as of the companion foundation commits, but it is not yet a tested runtime deployment.

Before calling the companion release-ready:

- [ ] `npm install`, `npm test`, and `npm run validate` pass in a clean environment.
- [ ] CI passes on the default branch.
- [ ] Every linked file exists and all examples match their schemas.
- [ ] A first-time reader can complete the setup without private guidance.
- [ ] One real runtime walkthrough proves the approval, logging, stop, and revoke controls.
- [ ] Security negative tests prove cross-project access is denied.
- [ ] The book's appendices and downloadable templates match repository files.
- [ ] A versioned release is tagged and its tested compatibility is documented.

## Release gate

Do not label the book or companion "production-ready" until the editorial, technical, reader-validation, and reproducibility gates above are complete. The correct current status is **working manuscript + evolving companion starter kit**.
