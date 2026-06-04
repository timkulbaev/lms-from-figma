# Doc Ownership

> Maps each documentation file in `docs/` to its owner agent role and the trigger that requires an update. The Architect maintains this file. **Never assign ownership to a human** — all owners are agent roles.

## Ownership Matrix

| Document | Owner | Update Trigger |
|---|---|---|
| CHANGELOG.md | Architect | Every user-visible change — mandatory |
| PRD.md | Architect | Feature scope changes, new user requirements |
| ROADMAP.md | Architect | Milestone changes, feature prioritisation shifts |
| KNOWN_ISSUES.md | Architect | New bugs discovered or existing ones resolved |
| DOC_OWNERSHIP.md | Architect | New documents added or owner roles change |
| SECURITY.md | Architect (review) | Auth, permissions, secrets handling changes |
| GOVERNANCE.md | Architect (review) | Process, access, or policy changes |
| API_ROUTES.md | Backend | Any API route added, removed, or modified |
| BACKEND_SCHEMA.md | Backend | DB schema changes, lib/ changes, new endpoints |
| DEPLOYMENT.md | Backend | Infra, Docker, migrations, CI/CD changes |
| APP_FLOW.md | Frontend | Page flow, navigation, or UX changes |
| FRONTEND_GUIDELINES.md | Frontend | Component patterns, styling conventions |

## Enforcement

Hook-enforced via `.claude/hooks/doc-ownership.conf` (machine-readable mirror of this table).
`check-docs-on-subagent-stop.sh` reads that file to route missing-doc notices to the correct agent role.

Enforcement fires automatically when a subagent stops after touching `app/src/`. The Architect is re-woken with ownership-specific instructions: update directly (Architect-owned) or spawn the correct subagent (Backend/Frontend-owned).

## Adding a New Document

1. Create the file in `docs/`.
2. Add a row to this table.
3. Add a matching row to `.claude/hooks/doc-ownership.conf` (`doc_filename|owner_role`).
4. If the document should be required when specific code paths change, add a row to `.claude/hooks/doc-mappings.conf` (`doc_filename|code_path_regex`).
5. Add the document to the stub template at `~/.claude/hooks/templates/docs/` so new projects get it automatically.
