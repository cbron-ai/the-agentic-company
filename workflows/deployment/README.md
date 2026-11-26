# Workflow: Production Deployment

**Default authority:** Human approval required.

## Preparation
- identify service, environment, version/commit, and change summary;
- verify CI, tests, security checks, and reviewer findings;
- confirm migration and compatibility plan;
- define deployment window, expected impact, monitoring, and rollback;
- state expected cost and customer impact.

## Approval
The human approves the exact service, version, environment, and time window. A material change requires renewed approval.

## Execution
Use a deployment identity limited to the approved target. Capture logs and deployment result. Stop on unexpected behavior.

## Verification
Run health checks and business-critical smoke tests. Compare key metrics against baseline.

## Rollback
If the agreed trigger is met, follow the approved rollback plan and notify the owner. Preserve evidence and open an incident record.
