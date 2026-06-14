# Job Search — Backlog (not runtime)

Ideas for later automation. Do not implement until manual workflow breaks at ~10+ active roles.

---

## Future agents (aspirational)

- **Discovery** — LinkedIn, career pages, target company alerts
- **Scoring** — JSON scores from `role_scorecard.md` only; human approves
- **Tracker sync** — YAML frontmatter on opportunity files → regenerate Pipeline Summary
- **Outreach** — draft from opportunity file + contacts
- **Interview prep** — `ADVANCE` + `AI/job_advancement_workflow.md` (done)
- **Weekly dashboard** — Prompt §7 on schedule (`/loop` or calendar)

---

## Automation candidates (by effort)

| Idea | Effort | Trigger |
|---|---|---|
| Cursor rule on JD paste | Low | Done → `Career/JOB_SEARCH.md` + `AI/.cursor/rules/job-search.mdc` |
| Frontmatter on `*.md` reports | Medium | 4th opportunity added |
| `Career/contacts.md` CRM | Low | Networking volume increases |
| `Career/comp_log.md` | Low | 3+ comp conversations |
| Tracker generated from files | High | Frontmatter in place |

---

## Deferred product scope

- Job discovery agent fleet (see old workflow § Future Agents — archived here)
- Multi-agent orchestration
- Separate company research database
