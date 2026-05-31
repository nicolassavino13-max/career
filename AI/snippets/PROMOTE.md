# PROMOTE — Discovery → Applications

Move one row from **`Career/opportunities_tracker.md`** into the Job Search OS (Prompt **§1**). This is the handoff from discovery to Stage 1 scoring + tracker.

---

## Copy-paste (say which role to promote)

```text
PROMOTE

Promote this discovery candidate to Applications (run full §1):

Company / role: [e.g. Visa — Senior Manager, Product Strategy and Planning]

@AI/snippets/PROMOTE.md
@AI/prompt_library.md §1
```

Shorthand (same thing):

```text
PROMOTE: [Company] — [Role title]
```

Minimal (agent resolves from discovery — **company name is enough** if one clear row):

```text
PROMOTE Nubank
```

No need to paste `@AI/snippets/PROMOTE.md` or `@§1` — `AI/.cursor/rules/job-search.mdc` triggers the full flow.

---

## Agent instructions

### 1. Find the candidate

- Read `Career/opportunities_tracker.md`
- Match the row the user named (company + role; partial match OK)
- If ambiguous, list matching rows and ask once
- If **Already processed** or **Promoted**, stop and point to existing `Career/Applications/` file + tracker
- Before §1: confirm company+role is **not** already in `applications_tracker.md` (duplicate guardrail)

### 2. Gather inputs for §1

From the discovery row use:
- Company, role, location, source, link, date found, reason, initial fit

Then obtain a **job description**:
- Prefer: fetch/read from the **Link** in the row
- If link fails or is aggregator-only: use discovery **Reason** + web search for official posting; flag assumptions
- Do not invent JD text

### 3. Run Job Opportunity Processing (§1)

Execute **`AI/prompt_library.md` §1 — Job Opportunity Processing** end-to-end:

- Read: `AI/job_search_workflow.md`, `Career/search_context/master_context.md`, `Career/search_context/career_positioning.md`, `Career/search_context/role_scorecard.md`, `Career/applications_tracker.md`
- Write: Stage 1 file in `Career/Applications/` + update `applications_tracker.md` (Pipeline Summary, Open Items, Update Log)
- Canvas auto-syncs when tracker/opportunity files are saved (`AI/.cursor/hooks/sync_pipeline_canvas.mjs`)
- Do **not** run Stage 2 unless role is already active

### 4. Update discovery layer

In `Career/opportunities_tracker.md` for that row:

| Field | New value |
|---|---|
| Decision | `Promoted` |
| Next action | `Stage 1 done — [filename].md` + tracker updated |
| Date | Add promote date in Update Log under Weekly Discovery Notes if useful |

Do not delete the row — keep for audit trail.

### 5. Reply in chat

- Which discovery row was promoted
- Application filename created
- Weighted score, score band, **decision rank**, recommendation
- Top 3 risks
- Tracker rank vs Revolut / Mercado Livre / Adyen

---

## Constraints

- Canonical discovery file: `Career/opportunities_tracker.md` (not temp exports)
- No duplicate application files if company+role already in tracker
- Do not edit `career_goals.md` or `target_companies.md` for pipeline status
- Default model: **Auto**
