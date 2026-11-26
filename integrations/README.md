# Integrations

The core operating model is framework-independent. Integrations translate role contracts, permissions, workflows, and approval records into a specific runtime.

No adapter may silently weaken company policy. If the runtime cannot enforce a control, document the limitation and keep the action behind a human gate.

Each adapter should document:
- supported runtime and tested version;
- prerequisites and setup;
- role/workflow mapping;
- identity and permission model;
- secrets handling;
- approval implementation;
- logging and audit trail;
- known limitations and threat model;
- uninstall/revoke procedure;
- end-to-end test results.

Planned exploration: OpenClaw, Paperclip, LangGraph, and Claude Code. These are not yet certified integrations.
