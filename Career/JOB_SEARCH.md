# Job Search — Start Here

**Funnel:**

```text
RUN_DISCOVERY  →  opportunities_tracker.md  →  discovery canvas
PROMOTE        →  §1 → Applications/*.md + applications_tracker.md  →  applications canvas
§1 + JD/URL    →  same as PROMOTE (skip discovery)
```

| Command | Updates | Which canvas? |
|---|---|---|
| **RUN_DISCOVERY** | `Career/opportunities_tracker.md` | **Discovery** (`opportunities-tracker.canvas.tsx`) |
| **PROMOTE** or **§1** | Application file + `Career/applications_tracker.md` | **Applications** (`AI/canvases/applications-tracker.canvas.tsx`) |

Two layers, two canvases — RUN_DISCOVERY does **not** touch the applications tracker.

---

## Daily discovery scan (RUN_DISCOVERY)

```text
RUN_DISCOVERY

@AI/snippets/RUN_DISCOVERY.md
```

Finds and pre-screens roles in Dubai/UAE + São Paulo/Brazil. Appends to `Career/opportunities_tracker.md`. Does **not** score, promote, or touch the tracker.

---

## Promote from discovery (PROMOTE snippet)

When a role is already in `Career/opportunities_tracker.md`:

```text
PROMOTE: [Company] — [Role title]

@AI/snippets/PROMOTE.md
@AI/prompt_library.md §1
```

Example:

```text
PROMOTE: Visa — Senior Manager, Product Strategy and Planning

@AI/snippets/PROMOTE.md
@AI/prompt_library.md §1
```

---

## Paste this with any JD or URL (skip discovery)

Inbound path — agent also backfills discovery row as **`Promoted`** if not already there.

```
@AI/prompt_library.md §1 — Job Opportunity Processing

Process the job below using my Job Search OS. Read the files listed in §1, then write the Stage 1 report and update the tracker. Reply in chat with: weighted score, score band, decision rank, recommendation, and top 3 risks.

[Paste JD or URL here]
```

---

## Agent must

1. Read: `Career/search_context/master_context.md`, `Career/search_context/career_positioning.md`, `Career/search_context/role_scorecard.md`, `Career/applications_tracker.md`
2. Write: new Stage 1 file in `Career/Applications/` + update `applications_tracker.md` (Pipeline Summary, Open Items, Update Log)
3. Set: weighted score, decision rank, priority rationale
4. Canvas auto-syncs on tracker/opportunity save (hook). Fallback: `node AI/.cursor/hooks/sync_pipeline_canvas.mjs --force`
5. Skip: `career_goals.md` unless deep positioning needed; never edit it for pipeline status

---

## When role becomes active

```
Run AI/prompt_library.md §4 (Stage 2) for [company] — file: Career/Applications/[filename].md
```

---

## Weekly (Friday)

```
Run AI/prompt_library.md §7 (Weekly Pipeline Review)
```

---

## File map

| File | Role |
|---|---|
| `opportunities_tracker.md` | Pre-screened leads (RUN_DISCOVERY source) |
| `AI/canvases/opportunities-tracker.canvas.tsx` | Discovery dashboard — @-tag in chat |
| `AI/canvases/applications-tracker.canvas.tsx` | Applications dashboard — @-tag in chat |
| `Career/search_context/master_context.md` | Profile + background for agents |
| `AI/canvases/cursor-career-learning-plan.canvas.tsx` | 30-day Cursor learning plan (manual) |
| `AI/canvases/README.md` | Canvas index — all @-tag paths |
| `Opportunities/target_search_queries.md` | Search query library |
| `applications_tracker.md` | Live pipeline → **feeds canvas** |
| `Applications/*.md` | Per-role analysis |
| `search_context/role_scorecard.md` | Scoring |
| `search_context/career_positioning.md` | Strategy snapshot for agents |
| `search_context/career_goals.md` | Full narrative (on demand) |
| `search_context/target_companies.md` | Company universe (research only) |
| `search_context/CV/` | CV assets |
| `../AI/job_search_workflow.md` | Runbook |
| `../AI/prompt_library.md` | Commands |
