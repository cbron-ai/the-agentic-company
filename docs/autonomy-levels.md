# Autonomy Levels

Use autonomy levels per workflow, not as a blanket label for an agent.

| Level | Name | Meaning | Example |
|---|---|---|---|
| 0 | Observe | Read and summarize approved information | Summarize support tickets |
| 1 | Prepare | Draft an action for review | Prepare a customer reply |
| 2 | Execute bounded | Act within a pre-approved, technically enforced scope | Label an issue or run tests |
| 3 | Operate with monitoring | Repeatedly execute a narrow workflow with alerts and limits | Generate an internal daily report |
| Reserved | Human decision | Agent may analyze but not decide/execute | Sign contract, move money, deploy high-risk change |

Before moving a workflow up a level, demonstrate repeatability, low defect rates, clear recovery, limited blast radius, and effective monitoring. Higher autonomy is earned by evidence, not requested by an agent.
