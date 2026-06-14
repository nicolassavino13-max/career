# Interview Preparation — Overview

Working folder for **active** recruiting processes. **Strategic analysis** stays in each `Career/Applications/*.md` file; **this folder is execution only**.

**OS entry point (full architecture):** `Career/JOB_SEARCH.md`

**Timezone:** All call times in this folder and in `applications_tracker.md` are **BRT — America/São_Paulo (Rio de Janeiro)** unless a row explicitly says otherwise.

**Workflow:** `AI/job_advancement_workflow.md` · **Triggers:** `AI/snippets/UPDATE.md` (status sync) · `AI/snippets/ADVANCE.md` (next-round prep)

---

## UPDATE vs ADVANCE

| | **UPDATE** | **ADVANCE** |
|---|---|---|
| Files | Same files — sync new info | **New** `round_NN/.../prep.md` |
| Invoke | `UPDATE BTG` + what changed | `ADVANCE BTG` + next-round context |

Both resolve the job from `applications_tracker.md` — no @-tags required.

---

## search_context vs base (do not duplicate)

| Layer | Path | Purpose |
|---|---|---|
| **Scoring & strategy** | `Career/search_context/` | Profile, scorecard, positioning snapshot — agents read for PROMOTE, discovery |
| **Interview delivery** | `preparation/base/` | STAR stories, verbal scripts, why fintech/geo — agents read for ADVANCE |

**After a call — where does the insight go?**

| Insight type | Update |
|---|---|
| Fit, score, role scope, comp | Opportunity file + tracker |
| Process-specific signal | `process_log.md` or `post_call.md` |
| Reusable story or better phrasing | `preparation/base/` |
| Global positioning shift | `search_context/career_positioning.md` (+ `base/` if it affects interview scripts) |

Never store live pipeline status in `search_context/` or `base/`.

## Folder structure

```text
preparation/
├── base/                               ← reusable narrative bank (read by agent on every ADVANCE)
│   ├── star_stories.md                 ← 6 STAR stories formatted for verbal delivery
│   ├── positioning.md                  ← tell me about yourself (30s / 90s / 3min)
│   ├── why_fintech.md                  ← why fintech, why payments, why now
│   ├── why_sao_paulo.md
│   └── why_dubai.md
│
├── templates/
│   ├── prep_template.md                ← basic event prep
│   └── round_prep_template.md          ← enhanced template used by ADVANCE
│
├── {process_folder}/                   ← one per active JD / recruiting process
│   ├── process_log.md                  ← live process tracker; one per process
│   └── round_{NN}_{co}_{role}_{type}_{date}/
│       ├── prep.md                     ← generated before the call
│       └── post_call.md                ← written AFTER the call (never overwrite)
│
└── README.md                           ← this file
```

---

## Process folder naming

```text
{company}_{role_slug}/
```

One folder per JD. If the same company has two parallel processes, two folders.

| Active process | Folder | Status |
|---|---|---|
| BTG Pactual — Operations Transformation | `btg_operations_transformation/` | Interviewing (Round 1) |
| Revolut — S&O Manager Revenue | `revolut_strategy_operations_dubai/` | Interviewing (screen done · await EOW · Round 2 prep ready) |
| Mercado Pago — Gerente Negócios Cripto | `mercadopago_gerente_cripto/` | Legacy flat folder — migrate on ADVANCE |

---

## Legacy flat folders (pending migration)

Pre–Job Advancement prep still lives at the root of `preparation/`. Migrate into `{process_folder}/round_01_.../` the next time you run `ADVANCE` for that process.

| Process | Legacy path | Target process folder |
|---|---|---|
| Mercado Pago | `mercadopago_ivan_career_2026-06-06/` | `mercadopago_gerente_cripto/` |

---

## Round folder naming

```text
round_{NN}_{company_abbr}_{role_abbr}_{type}_{YYYY-MM-DD}/
```

Examples:
- `round_01_btg_opstransf_hr_screen_2026-06-08/`
- `round_02_btg_opstransf_hm_rodrigo_2026-06-15/`
- `round_01_revolut_sao_screen_2026-06-02/`

---

## Files per round

| File | When to create | Purpose |
|---|---|---|
| `prep.md` | Before the call — via ADVANCE | Execution checklist, stories, questions |
| `post_call.md` | Same day as the call | Raw debrief notes — **never overwrite** |

---

## Workflow (one round at a time)

1. Call scheduled → create `{process_folder}/round_NN_.../prep.md` via `ADVANCE`
2. Link prep file from `process_log.md` Round Log
3. After the call → write `post_call.md` immediately (raw notes, same day)
4. Update `process_log.md` + `applications_tracker.md` + opportunity file
5. Next call scheduled → run `ADVANCE` again → round N+1 prep generated

**Reschedule or status change?** → **UPDATE** (`AI/snippets/UPDATE.md`) — not ADVANCE.

**Next round prep?** → **ADVANCE**.

---

## Base files — when to update

- Add a new STAR story to `base/star_stories.md` when a new project experience deserves a structured story
- Update positioning answers when you identify a gap after a call
- `base/` never holds process-specific content
