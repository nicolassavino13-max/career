# Job Search — Runbook

> **Runtime doc (~1 page).** Scoring: `Career/search_context/role_scorecard.md`. Entry point: `Career/JOB_SEARCH.md` (full architecture). Prompts: `AI/prompt_library.md`. Backlog: `AI/backlog.md`.

---

## What this system does

Map every relevant role → score → decide → save → track. When interviews start → prep and iterate via **ADVANCE** (`AI/job_advancement_workflow.md`). Build market intelligence even when you do not apply.

---

## Three stages (this file = stage 2)

| Stage | Workflow | Trigger |
|---|---|---|
| Discovery | `AI/job_discovery_workflow.md` | RUN_DISCOVERY |
| **Search (this runbook)** | `AI/job_search_workflow.md` | **PROMOTE** |
| Advancement | `AI/job_advancement_workflow.md` | ADVANCE |

Full architecture diagram: `Career/JOB_SEARCH.md`.

---

## Happy path (default)

**Inbound JD or URL** (recruiter, referral, own research):

1. **`PROMOTE`** + paste JD/URL + context → `AI/snippets/PROMOTE.md` + this runbook.
2. Stage 1 file + `applications_tracker.md`.
3. Backfill discovery row **`Promoted`** if not already in `opportunities_tracker.md`.

**From discovery** (role already in opportunities tracker):

1. **RUN_DISCOVERY** → `Career/opportunities_tracker.md` + discovery canvas.
2. Pick from **Weekly Top 3** (or `Process now` when link validated).
3. **`PROMOTE: [Company] — [Role]`** → Stage 1 file + applications tracker + applications canvas.

Do **not** edit `career_goals.md` or `target_companies.md` for pipeline status in either path.

---

## Context loading (token discipline)

| Always read | On demand |
|---|---|
| `Career/search_context/master_context.md` | `Career/search_context/career_goals.md` (deep narrative, CV angles) |
| `Career/search_context/career_positioning.md` | `Career/search_context/target_companies.md` (company research only) |
| `Career/search_context/role_scorecard.md` | Full opportunity file for one role |
| `Career/applications_tracker.md` | `AI/job_search_workflow.md` (this file) |

---

## Stage 1 vs active-role assets vs interview prep

| Layer | When | Where | Contents |
|---|---|---|---|
| **Stage 1** | Every mapped role | `Applications/*.md` | JD, fit, scores, positioning thesis, next actions |
| **Apply assets (§4)** | Role active — apply/outreach | Append to `Applications/*.md` | CV bullets, cover letter, referral drafts, apply checklist |
| **Interview prep (ADVANCE)** | Call scheduled | `preparation/{process}/round_N/` | Questions, STAR picks, checklist, `post_call.md` |

**Active** = referral secured, recruiter engaged, interview scheduled, or explicit apply decision.

**Do not** put interview round prep in the opportunity file. Strategic analysis stays in Stage 1; execution stays in `preparation/`.

Use `Career/Applications/templates/application_template.md` for Stage 1.

---

## Tracker rules

`Career/applications_tracker.md` is the **only** live pipeline view (markdown source of truth).

Update per new/changed opportunity (PROMOTE, weekly review, UPDATE, or any status change):
- One row in **Pipeline Summary** (rank, score, status, next step, due, report filename)
- **Open Items** row if comp or follow-up pending
- One line in **Update Log**
- Refresh the **Rank ≠ score** note when ranks shift

Score breakdown and full detail live in the opportunity file — not duplicated in the tracker.

**Always update `applications_tracker.md` in the same pass** as the Stage 1 file. Do not leave the canvas ahead of or behind the tracker.

---

## Applications canvas (visual layer)

**Automatic sync (default):** Cursor `afterFileEdit` hook runs `AI/.cursor/hooks/sync_pipeline_canvas.mjs` when `applications_tracker.md` or any `Career/Applications/*.md` opportunity file is saved. Canvas output path: `AI/.cursor/pipeline_canvas_path.txt`.

**Manual sync:** from repo root: `node AI/.cursor/hooks/sync_pipeline_canvas.mjs --force`

Agents still update `applications_tracker.md` first; the hook regenerates the canvas without a separate step. Re-open the canvas tab to see changes.

After `applications_tracker.md` is updated, the canvas reflects tracker + opportunity files:

| Item | Path |
|---|---|
| Source of truth | `Career/applications_tracker.md` |
| Score dimensions + narrative | Each `Career/Applications/*.md` (Scoring table + Positioning / risks) |
| Visual dashboard | `AI/canvases/applications-tracker.canvas.tsx` (also mirrored to Cursor project `canvases/`) |

**When the hook runs**
- Any save to `Career/applications_tracker.md`
- Any save to `Career/Applications/*.md` (except `templates/`)

**Agent fallback** (if hooks disabled or sync failed): run `node AI/.cursor/hooks/sync_pipeline_canvas.mjs --force` after tracker changes.

**Canonical rule:** `applications_tracker.md` wins. The canvas is generated output, not edited by hand.

**Human:** Open `@AI/canvases/applications-tracker.canvas.tsx` (or the Cursor canvases panel); refresh/reopen after edits.

---

## Decision rank vs score

- **Score** = weighted quality (`role_scorecard.md`).
- **Decision rank** = what to do this week (can differ: typecast risk, conditional fit, effort).

Document override in `Priority rationale`.

---

## Other prompts

| § | Use |
|---|---|
| 2 Networking | Before a call; optional: read opportunity file |
| 3 Company research | Uses `target_companies.md` + web |
| 4 Apply assets | CV/outreach drafts → append to opportunity file (**not** interview prep) |
| 5 Compare opps | Read `applications_tracker.md` + opportunity files only |
| 6 System review | Periodic OS audit |
| 7 Weekly review | Friday — tracker + `preparation/*/process_log.md` sweep |
| — | **Interview prep** → `ADVANCE` · **Status sync** → `UPDATE` |

---

## Model usage

Default **Auto**. See `AI/cursor_model_usage.md`. Sonnet for outreach/cover letters/interview prep. Opus one pass max on score ≥ 4.5 before submit.

---

## Save logic

Save opportunity + tracker update if: target company, fintech/payments/strategy adjacency, target geo, referral/recruiter, or useful market mapping.

When uncertain, save.

---

## Human-only

Final apply/no-apply, live conversations, negotiation, interview performance.

---

## Legacy reports

Pre-2026-05-26 full dossiers are grandfathered. New roles use Stage 1 template only.
