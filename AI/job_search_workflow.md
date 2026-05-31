# Job Search — Runbook

> **Runtime doc (~1 page).** Scoring: `Career/search_context/role_scorecard.md`. Entry point: `Career/JOB_SEARCH.md`. Prompts: `AI/prompt_library.md` §1 and §7. Backlog: `AI/backlog.md`.

---

## What this system does

Map every relevant role → score → decide → save → track. Build market intelligence even when you do not apply.

---

## Happy path (default)

**Inbound JD or URL** (recruiter message, referral, direct link):

1. Paste JD or URL in Cursor → agent runs **Prompt §1** (`AI/prompt_library.md`).
2. Agent writes Stage 1 file + updates `Career/applications_tracker.md`.
3. If the role was **not** already in discovery: add a row to `Career/opportunities_tracker.md` with Decision **`Promoted`** (audit trail — do not re-run discovery scan for it).

**Proactive search** (no JD in hand):

1. **RUN_DISCOVERY** → `Career/opportunities_tracker.md` + discovery canvas.
2. Pick from **Weekly Top 3** (or `Process now` rows when link is validated).
3. **PROMOTE** → §1 → Stage 1 file + applications tracker + applications canvas.

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

## Stage 1 vs Stage 2

| Stage | When | Contents |
|---|---|---|
| **1** | Every mapped role | JD, summary, fit, scorecard scores, brief positioning, networking, next actions |
| **2** | Role is **active** | CV tailoring, outreach drafts, interview prep — append to same file or `*_stage2.md` |

**Active** = referral secured, recruiter engaged, interview scheduled, or explicit apply decision.

Use `Career/Applications/templates/application_template.md`.

---

## Tracker rules

`Career/applications_tracker.md` is the **only** live pipeline view (markdown source of truth).

Update per new/changed opportunity (§1, PROMOTE, weekly review, or any status change):
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
| 4 Stage 2 prep | Role active — extend opportunity file |
| 5 Compare opps | Read `applications_tracker.md` + opportunity files only |
| 6 System review | Periodic OS audit |
| 7 Weekly review | Friday — update tracker only |

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
