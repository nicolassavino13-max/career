# Prompt Library

> Entry point: `Career/JOB_SEARCH.md` · Runbooks: `AI/job_discovery_workflow.md` · `AI/job_search_workflow.md` · `AI/job_advancement_workflow.md` · Snippets: `AI/snippets/` (RUN_DISCOVERY · **PROMOTE** · UPDATE · ADVANCE · **BUILD_DECK**) · Canvases: `AI/canvases/` · Cursor config: `AI/.cursor/`

---

## BUILD_DECK — PowerPoint build / edit (Windows)

**Snippet file:** `AI/snippets/BUILD_DECK.md` · **Skills:** `ppt-consulting` (storyline) · `ppt-com` · `ppt-template-builder` (rebuilds)

```text
BUILD_DECK

@AI/snippets/BUILD_DECK.md

Deck: [active | path]
Goal: [edit slide N | rebuild | new table | ...]
```

Agent: read skills → connect to PowerPoint → execute → `pres.Save()` → summarize changes. Rule: `AI/.cursor/rules/ppt-deck.mdc`.

---

## RUN_DISCOVERY — Daily opportunity scan

**Snippet file:** `AI/snippets/RUN_DISCOVERY.md`

Opportunities layer only — update `Career/opportunities_tracker.md` + **opportunities canvas**; no Application files or applications tracker.

```text
RUN_DISCOVERY  →  opportunities_tracker.md  →  discovery canvas
```

Agent: read context → scan Dubai/UAE + São Paulo/Brazil → pre-screen → append new rows → flag stale/uncertain → sync discovery canvas → reply with **Companies Checked Report** (Company · **Geo checked** Dubai|SP|Both · Source · Outcome; dual-presence → Both) + geo coverage summary. Do **not** run PROMOTE.

---

## PROMOTE — Stage 1 (all paths into pipeline)

**Snippet file:** `AI/snippets/PROMOTE.md` · Runbook: `AI/job_search_workflow.md`

**The only command to score a role and enter the pipeline.** Replaces the old separate §1 invoke.

**Path A — from discovery:**
```text
PROMOTE: [Company] — [Role]
```

**Path B — inbound / own research (paste JD):**
```text
PROMOTE

@AI/snippets/PROMOTE.md

[Paste JD or URL + context]
```

Agent: run `AI/job_search_workflow.md` → Stage 1 file + `applications_tracker.md` → mark or backfill discovery row **`Promoted`** → reply with score, rank, recommendation, top 3 risks.

---

## ADVANCE — Next-round interview prep

**Snippet file:** `AI/snippets/ADVANCE.md` · Runbook: `AI/job_advancement_workflow.md`

Use when a **new interview round** needs its own prep file. Resolves job from name — **no @-tags required**.

```text
ADVANCE [Company / role phrase]

[Next round context: type, interviewer, date, notes from prior round]
```

**Not for:** reschedule same round (use **UPDATE**) · new role (use **PROMOTE**).

---

## UPDATE — Sync pipeline status

**Snippet file:** `AI/snippets/UPDATE.md` · Runbook: `AI/job_advancement_workflow.md` → Status update pass

```text
UPDATE [Company / role phrase]

New info: [what changed]
```

**Not for:** next-round prep (use **ADVANCE**) · new role (use **PROMOTE**).

---

## 1. Job Opportunity Processing → **PROMOTE**

> **Use `PROMOTE` instead.** This section kept as a pointer for legacy chat references.

All Stage 1 processing — discovery handoff or inbound JD — runs via **`AI/snippets/PROMOTE.md`** + **`AI/job_search_workflow.md`**. There is no separate §1 workflow.

---

## 2. Networking Prep

Before a conversation. Read `Career/search_context/career_positioning.md` + relevant `Career/Applications/*.md` if named.

Output: topics, positioning angle, smart questions, red flags, desired outcomes. No tracker update unless status changes.

---

## 3. Company Research

Strategic briefing: business model, products, positioning, competitors, risks, growth, relevance to my strategy.

Read: `Career/search_context/target_companies.md` + `Career/search_context/career_positioning.md`. Save optional note in `Career/Research/` only if user asks to save.

---

## 4. Stage 2 — Apply assets (role active)

**When:** referral secured, recruiter engaged, explicit apply — **before or alongside** first contact.

**Not for interview prep.** Calls and rounds → use **ADVANCE**. Interview execution lives in `Career/Applications/preparation/{process}/round_N/`.

**Read:** the opportunity file + `Career/search_context/role_scorecard.md` + `Career/search_context/career_positioning.md`.

**Write:** append to the opportunity file only: CV tailoring bullets, cover letter / outreach drafts, apply checklist.

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

**Read:** `Career/applications_tracker.md` + active `preparation/*/process_log.md` files.

**Tasks:** stale follow-ups, interview prep gaps, rank validation, pause/archive candidates.

**Write:** update tracker + process logs if changed (canvas auto-syncs via hook).

**Output:** top 3 actions · stale items · rank changes · interview prep gaps · pause/archive candidates

---

## 8. Discovery scan

Same as **RUN_DISCOVERY** → `AI/snippets/RUN_DISCOVERY.md` + `AI/job_discovery_workflow.md`.
