# Prompt Library

> Entry point: `Career/JOB_SEARCH.md` · Runbook: `AI/job_search_workflow.md` · Snippets: `AI/snippets/` · Canvases: `AI/canvases/` · Cursor config: `AI/.cursor/`

---

## RUN_DISCOVERY — Daily opportunity scan

**Snippet file:** `AI/snippets/RUN_DISCOVERY.md`

Opportunities layer only — update `Career/opportunities_tracker.md` + **opportunities canvas**; no Application files or applications tracker.

```text
RUN_DISCOVERY  →  opportunities_tracker.md  →  discovery canvas
```

Agent: read context → scan Dubai/UAE + São Paulo/Brazil → pre-screen → append new rows → flag stale/uncertain → sync discovery canvas → reply with summary. Do **not** run §1 or PROMOTE.

---

## PROMOTE — Discovery → Applications

**Snippet file:** `AI/snippets/PROMOTE.md`

Promote one row from `Career/opportunities_tracker.md` into the funnel by running **§1** below.

```text
PROMOTE: [Company] — [Role]

@AI/snippets/PROMOTE.md
@AI/prompt_library.md §1
```

Agent: find row → fetch JD from link → run §1 → mark discovery row `Promoted` → reply with score, rank, recommendation.

---

## 1. Job Opportunity Processing

Follow `AI/job_search_workflow.md` (runbook) end-to-end. This prompt is the executable version of that loop.

### Copy-paste (attach JD or URL below)

```text
@AI/prompt_library.md §1 — Job Opportunity Processing

Process the job below using my Job Search OS. Read the files listed in §1, then write the Stage 1 report and update the tracker. Reply in chat with: weighted score, score band, decision rank, recommendation, and top 3 risks.

[Paste JD or URL here]
```

### Read (always)

- `AI/job_search_workflow.md` — process order
- `Career/search_context/master_context.md`
- `Career/search_context/career_positioning.md`
- `Career/search_context/role_scorecard.md`
- `Career/applications_tracker.md` — check for duplicate company/role before creating a file
- `Career/opportunities_tracker.md` — check for existing row; if §1 runs without a discovery row, backfill one as **`Promoted`** after write

### Duplicate guardrail

Before creating a Stage 1 file:

1. Match company + role (or close title variant) in **`applications_tracker.md`** → stop; point to existing file and rank.
2. Match in **`opportunities_tracker.md`** → if already **Promoted** or **Already processed**, stop; same pointer.
3. If new via §1 (inbound, no prior discovery row) → after Stage 1 + tracker, append discovery row with Decision **`Promoted`**.

### Read (only if needed)

- `Career/search_context/career_goals.md` — deep narrative only
- `Career/search_context/target_companies.md` — if company tier context helps

### Execute (in order)

1. **Capture** — company, role, location, link, source, date discovered (today if not given)
2. **Analyze** — strategic fit table (10 dimensions in template)
3. **Score** — all 7 dimensions from `role_scorecard.md` with weighted total and score band
4. **Decide** — recommendation + **decision rank** vs existing pipeline + **priority rationale** (rank can differ from score)
5. **Write Stage 1 file** — copy `Career/Applications/templates/application_template.md` → `Career/Applications/company_role_location_YYYY-MM-DD.md` (lowercase, underscores, today’s date)
6. **Update tracker** — `Career/applications_tracker.md`: Pipeline Summary row, Open Items row, Update Log line, rank note if needed
7. **Discovery backfill** — if no matching row in `Career/opportunities_tracker.md`, add one with Decision **`Promoted`**
8. **Canvas** — auto-synced on save by `AI/.cursor/hooks/sync_pipeline_canvas.mjs`; if needed run `node AI/.cursor/hooks/sync_pipeline_canvas.mjs --force`
9. **Reply in chat** — executive summary (do not skip files and only chat)

### Write (required)

| Output | Path |
|---|---|
| Stage 1 opportunity report | `Career/Applications/company_role_location_YYYY-MM-DD.md` |
| Live pipeline | `Career/applications_tracker.md` |
| Pipeline dashboard (visual) | `AI/canvases/applications-tracker.canvas.tsx` |

Stage 2 (CV, outreach, interview prep) — **do not** generate unless the role is already active (referral, recruiter, interview, or explicit apply).

### Constraints

- Do not hallucinate; flag assumptions
- Be candid and practical
- Do not edit `career_goals.md` or `target_companies.md` for pipeline status
- Default model: **Auto** (`AI/cursor_model_usage.md`)

---

## 2. Networking Prep

Before a conversation. Read `Career/search_context/career_positioning.md` + relevant `Career/Applications/*.md` if named.

Output: topics, positioning angle, smart questions, red flags, desired outcomes. No tracker update unless status changes.

---

## 3. Company Research

Strategic briefing: business model, products, positioning, competitors, risks, growth, relevance to my strategy.

Read: `Career/search_context/target_companies.md` + `Career/search_context/career_positioning.md`. Save optional note in `Career/Research/` only if user asks to save.

---

## 4. Stage 2 — Deep Prep (role active)

**When:** referral secured, recruiter engaged, interview scheduled, or explicit apply.

**Read:** the opportunity file + `Career/search_context/role_scorecard.md`.

**Write:** append Stage 2 sections to that file (CV tailoring, outreach drafts, interview prep) per `application_template.md`. Do not create a parallel doc unless user prefers `*_stage2.md`.

---

## 5. Compare Opportunities

**Read only:** `Career/applications_tracker.md` + relevant `Career/Applications/*.md` files.

Compare: compensation, optionality, operator exposure, long-term upside, lifestyle, geography, brand, **decision rank vs score**.

Output: ranked action view for this week — no new files unless user asks.

---

## 6. System Review

Review Job Search OS critically: redundancy, overengineering, gaps, automation, simplifications. Focus on leverage. See `AI/backlog.md` for deferred ideas.

---

## 7. Weekly Pipeline Review

**When:** Friday or stale follow-ups.

**Read:** `Career/applications_tracker.md` only.

**Tasks:** stale follow-ups, unknown comp, rank still valid, propose tracker edits.

**Write:** update tracker if changed (canvas auto-syncs via hook; fallback `node AI/.cursor/hooks/sync_pipeline_canvas.mjs --force`).

**Output:** top 3 actions · stale items · rank changes · pause/archive candidates

---

## 8. Discovery scan

Same as **RUN_DISCOVERY** at the top of this file → `AI/snippets/RUN_DISCOVERY.md` + `AI/job_discovery_workflow.md`.
