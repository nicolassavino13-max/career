# PROMOTE — Stage 1 (score, decide, enter pipeline)

**Single entry point** for all new roles entering the applications layer. Runs `AI/job_search_workflow.md` end-to-end.

Two paths — same output (Stage 1 file + `applications_tracker.md`):

| Path | When | You provide |
|---|---|---|
| **A — Discovery** | Role already in `opportunities_tracker.md` | Company / role name (or `PROMOTE Nubank`) |
| **B — Inbound / research** | JD from recruiter, LinkedIn, referral, your own research | JD text and/or URL + any context |

---

## Path A — From discovery

```text
PROMOTE: Visa — Senior Manager, Product Strategy and Planning
```

Minimal:

```text
PROMOTE Nubank
```

Agent finds the row in `Career/opportunities_tracker.md`, fetches JD from link, runs Stage 1, marks row **`Promoted`**.

---

## Path B — Inbound / own research (no discovery row)

```text
PROMOTE

@AI/snippets/PROMOTE.md

[Paste JD or careers URL]

Context: [referral, recruiter name, inbound WhatsApp, why you're looking at this, etc.]
```

Shorthand:

```text
PROMOTE

Inbound from recruiter — apply this week.

[Paste JD or URL]
```

Agent runs Stage 1 from pasted content. If no discovery row exists → **backfill** one with Decision **`Promoted`** (audit trail).

---

## Agent instructions

Follow **`AI/job_search_workflow.md`** end-to-end.

### 1. Resolve inputs

**Path A (discovery named):**
- Read `Career/opportunities_tracker.md` — match company + role (partial OK)
- If ambiguous → list matches, ask once
- If **Promoted** or **Already processed** → stop; point to existing file + tracker rank
- Fetch JD from row **Link**; if aggregator/stale → official source + web; flag assumptions

**Path B (JD / URL pasted):**
- Use pasted JD/URL as primary source
- Use user **Context** for source, referral, urgency
- Check `opportunities_tracker.md` for existing row (update vs create)

**Both paths — duplicate guardrail:**
1. Match company + role in **`applications_tracker.md`** → stop; point to existing file
2. Match in **`opportunities_tracker.md`** as **Promoted** → stop unless user explicitly wants refresh

### 2. Read (always)

- `AI/job_search_workflow.md`
- `Career/search_context/master_context.md`
- `Career/search_context/career_positioning.md`
- `Career/search_context/role_scorecard.md`
- `Career/applications_tracker.md`

### 3. Execute Stage 1 (in order)

1. **Capture** — company, role, location, link, source, date discovered
2. **Analyze** — strategic fit (template dimensions)
3. **Score** — 7 dimensions from `role_scorecard.md` + weighted total + band
4. **Decide** — recommendation + **decision rank** + priority rationale (rank ≠ score)
5. **Write** — `Career/Applications/company_role_location_YYYY-MM-DD.md` from `templates/application_template.md`
6. **Update tracker** — Pipeline Summary, Open Items, Update Log
7. **Discovery layer** — Path A: mark row **`Promoted`**. Path B: append row **`Promoted`** if missing
8. **Canvas** — auto-sync on save; fallback `node AI/.cursor/hooks/sync_pipeline_canvas.mjs --force`

**Do not** generate interview prep (→ **ADVANCE**) or apply assets (→ prompt §4) unless role is already active.

### 4. Reply in chat

- Application filename + tracker rank
- Weighted score, score band, recommendation
- Top 3 risks
- Path used (discovery row vs inbound)
- Rank vs top pipeline roles

---

## Constraints

- Do not hallucinate JD facts; flag assumptions
- Do not edit `career_goals.md` or `target_companies.md` for pipeline status
- Default model: **Auto** (`AI/cursor_model_usage.md`)
- **RUN_DISCOVERY** does not run as part of PROMOTE
