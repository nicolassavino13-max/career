# Job Search OS — Start Here

> **Strategic entry point** for the full pipeline: discovery → applications → interview advancement.

---

## Architecture

```text
                    ┌─────────────────────────────────────┐
                    │         search_context/             │
                    │  (who you are — stable, read-only)  │
                    └─────────────────┬───────────────────┘
                                      │ read by all stages
        ┌─────────────────────────────┼─────────────────────────────┐
        ▼                             ▼                             ▼
┌───────────────┐           ┌─────────────────┐           ┌──────────────────┐
│  DISCOVERY    │  PROMOTE  │  SEARCH         │  ADVANCE  │  ADVANCEMENT     │
│  wide funnel  │ ────────► │  (PROMOTE)      │ ────────► │  active convos   │
└───────────────┘           └─────────────────┘           └──────────────────┘
        │                             │                             │
        ▼                             ▼                             ▼
opportunities_tracker          Applications/*.md              preparation/
+ discovery canvas             applications_tracker           base/ + {process}/
                               + applications canvas        round_N/ prep + post_call
```

**Runbooks:** `AI/job_discovery_workflow.md` · `AI/job_search_workflow.md` · `AI/job_advancement_workflow.md`

---

## Three workflows

| Stage | Job | Trigger | Source of truth | Canvas |
|---|---|---|---|---|
| **1. Discovery** | Find and pre-screen roles | `RUN_DISCOVERY` | `opportunities_tracker.md` | Discovery |
| **2. Search** | Score, decide, map pipeline | **PROMOTE** | `applications_tracker.md` + `Applications/*.md` | Applications |
| **3. Advancement** | Prep, debrief, next round | `ADVANCE` | `preparation/{process}/process_log.md` | — |
| **3b. Status sync** | Reschedule, stage change, comp | `UPDATE` | Same + `applications_tracker.md` | Applications |

**Handoff rules:**
- Discovery does **not** touch the applications tracker.
- Search does **not** generate interview prep — use Advancement when a call is scheduled.
- **Live changes** (reschedule, status, comp) → **UPDATE** only — cascades all layers in one pass.
- **Next round prep** → **ADVANCE** only — do not use UPDATE to generate prep content.

---

## Analysis vs execution (do not mix)

| Layer | Path | Holds | When to update |
|---|---|---|---|
| **Strategic analysis** | `Applications/*.md` | JD, fit, scores, risks, positioning thesis | PROMOTE, post-call rescoring |
| **Operational execution** | `preparation/{process}/round_N/` | Questions, stories, checklist, raw notes | `ADVANCE` before/after each call |

Interview prep lives in **`preparation/`**, not in Stage 2 sections of opportunity files. Use **§4** only for CV tailoring and outreach drafts.

---

## Context layers (search_context vs base)

| Layer | Path | Purpose | Used by |
|---|---|---|---|
| **Profile & scoring** | `search_context/` | Who you are, scorecard, strategy snapshot for agents | PROMOTE, RUN_DISCOVERY |
| **Interview delivery** | `preparation/base/` | STAR stories, verbal positioning, why fintech/geo | ADVANCE |

**Drift rule:** after a call insight, decide where it belongs:
- Strategy / fit / scoring change → update opportunity file (+ `career_positioning.md` if global)
- New reusable story or better phrasing → update `preparation/base/`
- Process-specific signal → `process_log.md` or `post_call.md` only

Do not duplicate live pipeline status in `search_context/` or `base/`.

---

## Funnel commands

```text
RUN_DISCOVERY  →  opportunities_tracker.md  →  discovery canvas
PROMOTE        →  Applications/*.md + applications_tracker.md  →  applications canvas
UPDATE         →  process_log + tracker + opportunity + prep logistics  (status sync)
ADVANCE        →  preparation/{process}/round_N/  (+ process_log.md)
```

| Command | Updates | Which canvas? |
|---|---|---|
| **RUN_DISCOVERY** | `Career/opportunities_tracker.md` | **Discovery** (`opportunities-tracker.canvas.tsx`) |
| **PROMOTE** | Application file + `Career/applications_tracker.md` | **Applications** (`applications-tracker.canvas.tsx`) |
| **UPDATE** | process_log + tracker + opportunity file + prep logistics | **Applications** (via tracker sync) |
| **ADVANCE** | `preparation/{process}/` + `process_log.md` | — |

---

## Daily discovery scan (RUN_DISCOVERY)

```text
RUN_DISCOVERY

@AI/snippets/RUN_DISCOVERY.md
```

Finds and pre-screens roles in Dubai/UAE + São Paulo/Brazil. Appends to `Career/opportunities_tracker.md`. Does **not** score, promote, or touch the applications tracker.

---

## PROMOTE — Enter pipeline (discovery or inbound)

**Single command** for all Stage 1 processing. Runbook: `AI/job_search_workflow.md` · Snippet: `AI/snippets/PROMOTE.md`

**Path A — role in `opportunities_tracker.md`:**

```text
PROMOTE: Visa — Senior Manager, Product Strategy and Planning
```

Or minimal: `PROMOTE Nubank`

**Path B — inbound / your research (paste JD, skip discovery):**

```text
PROMOTE

@AI/snippets/PROMOTE.md

[Paste JD or careers URL]

Context: referral from James, apply this week, etc.
```

**Output:** Stage 1 file + `applications_tracker.md` update + discovery row marked/backfilled **`Promoted`**. Reply: score, rank, recommendation, top 3 risks.

---

## UPDATE vs ADVANCE

| | **UPDATE** | **ADVANCE** |
|---|---|---|
| Files | Same files — sync new info | **New** round folder + `prep.md` |
| Trigger | `UPDATE [job]` + what changed | `ADVANCE [job]` + next-round context |
| @-tags | Optional | Optional |

Both resolve the job from `applications_tracker.md` by company/role name.

---

## Sync a live change (UPDATE)

Reschedule, status change, comp, withdraw — one command, all layers updated:

```text
UPDATE [company / role]

@AI/snippets/UPDATE.md

New info: [what changed]
```

Example:

```text
UPDATE BTG operations transformation

HR screen postponed to Mon 8/6 16:30 — Ana Clara had another meeting.
```

Runs: process_log → `applications_tracker.md` → opportunity file → prep logistics (+ rename round folder if date changed). Full rules: `AI/job_advancement_workflow.md` → Status update pass.

---

## When role becomes active (interview / recruiter engaged)

**New round prep → use ADVANCE** (not §4, not UPDATE):

```text
ADVANCE [company / role]

@AI/snippets/ADVANCE.md

[Next round: type, interviewer, date, prior-round notes]
```

Example:

```text
ADVANCE BTG operations transformation

First HR screen Mon 2026-06-08 16:30 Ana Clara.
```

Agent resolves files from tracker — no need to @-tag opportunity file or process_log.

**Reschedule / status change → UPDATE** (same round, same files).  
**CV / outreach → §4** (append to opportunity file only).

---

## Weekly (Friday)

```text
Run AI/prompt_library.md §7 (Weekly Pipeline Review)
```

§7 reads `applications_tracker.md` **and** sweeps active `preparation/*/process_log.md` for upcoming calls without prep files.

---

## File map

| File | Role |
|---|---|
| `opportunities_tracker.md` | Pre-screened leads (RUN_DISCOVERY source) |
| `applications_tracker.md` | Live pipeline → **feeds applications canvas** |
| `Applications/*.md` | Per-role **strategic analysis** (Stage 1) |
| `Applications/preparation/` | **Interview execution** — `base/` + per-process folders |
| `Applications/preparation/base/` | Reusable STAR stories and verbal positioning |
| `search_context/` | Profile, scorecard, positioning snapshot for scoring |
| `AI/job_discovery_workflow.md` | Stage 1 runbook — discovery |
| `AI/job_search_workflow.md` | Stage 2 runbook — search / pipeline |
| `AI/job_advancement_workflow.md` | Stage 3 runbook — interview advancement |
| `AI/snippets/UPDATE.md` | Status sync snippet (reschedule, stage change, comp) |
| `AI/snippets/ADVANCE.md` | Next-round prep snippet |
| `AI/snippets/PROMOTE.md` | Stage 1 snippet (discovery + inbound) |
| `AI/prompt_library.md` | Commands (PROMOTE · UPDATE · ADVANCE · §2–§7) |
| `AI/canvases/opportunities-tracker.canvas.tsx` | Discovery dashboard |
| `AI/canvases/applications-tracker.canvas.tsx` | Applications dashboard |
| `Opportunities/target_search_queries.md` | Search query library |
| `search_context/role_scorecard.md` | Scoring |
| `search_context/career_positioning.md` | Strategy snapshot for agents |
| `search_context/career_goals.md` | Full narrative (on demand) |
| `search_context/target_companies.md` | Company universe (research only) |
| `search_context/CV/` | CV assets |
