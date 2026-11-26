# Workflow: Production Deployment

**Default authority:** Human Board approval required.

## Preparation

- identify service, environment, exact version/commit, and change summary;
- verify CI, tests, security checks, and review findings;
- confirm migration and compatibility plan;
- define deployment window, expected impact, monitoring, and rollback;
- state cash exposure and customer impact;
- prepare an immutable approval package.

## Board approval

The Board approves the exact service, version, environment, and time window. A material change requires renewed approval. Claude may challenge the release plan but cannot approve it.

## Execution and verification

Use a deployment identity limited to the approved target. Capture logs and result. Run health checks and business-critical smoke tests. Stop on unexpected behavior.

## Rollback

If the agreed trigger is met, follow the approved rollback plan, notify the Board, preserve evidence, and open an incident record.
