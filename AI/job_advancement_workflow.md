# Job Advancement Workflow

## Position in the Job Search OS funnel

Full architecture diagram: **`Career/JOB_SEARCH.md`**

```text
RUN_DISCOVERY  →  opportunities_tracker.md            (discovery)
PROMOTE   →  Applications/*.md + tracker         (search)
ADVANCE        →  preparation/{process}/round_N/      ← this workflow
```

This workflow activates **after** a role enters the pipeline and an interview or recruiting contact has been initiated.

---

## Objective

Manage active interview processes in parallel. For each process:
- Prepare for each round with context drawn from base narratives and prior rounds
- Capture raw meeting notes without overwriting anything
- Generate each next-round prep automatically from accumulated context
- Maintain a process log per recruiting process to track decisions and signals

---

## Folder structure

```text
Career/Applications/preparation/
│
├── base/                                         ← reusable across ALL processes
│   ├── star_stories.md                           ← 6 STAR stories, formatted for verbal delivery
│   ├── positioning.md                            ← tell me about yourself (30s / 90s / 3min)
│   ├── why_fintech.md                            ← why fintech, why payments, why now
│   ├── why_sao_paulo.md                          ← SP-specific answers
│   └── why_dubai.md                              ← Dubai-specific answers
│
├── templates/
│   ├── prep_template.md                          ← basic event prep (existing)
│   └── round_prep_template.md                    ← enhanced template used by ADVANCE
│
├── {process_folder}/                             ← one per active JD / recruiting process
│   ├── process_log.md                            ← live process tracker; updated each round
│   └── round_{NN}_{company}_{role}_{type}_{date}/
│       ├── prep.md                               ← generated before the call
│       └── post_call.md                          ← written AFTER the call (never overwrite)
│
└── README.md
```

### Process folder naming

```text
{company}_{role_slug}/
```

Examples:
- `btg_operations_transformation/`
- `revolut_strategy_operations_dubai/`
- `mercadopago_gerente_cripto/`
- `adyen_alliances_saopaulo/`

One folder per JD. If the same company has two parallel processes, create two folders. Consolidate later only if the processes formally merge.

### Round folder naming

```text
round_{NN}_{company_abbr}_{role_abbr}_{type}_{YYYY-MM-DD}/
```

Examples:
- `round_01_btg_opstransf_hr_screen_2026-06-08/`
- `round_02_btg_opstransf_hm_rodrigo_2026-06-15/`
- `round_01_revolut_sao_screen_2026-06-02/`

---

## The ADVANCE loop

```text
Round N completed (post_call.md written)
↓
Say: ADVANCE [job name] + context for next round
↓
Agent resolves application from applications_tracker.md (no @-tags required)
↓
Agent reads: base/ + opportunity file + process_log + prior post_call
↓
Creates NEW: round_{N+1}/prep.md
Updates: process_log.md (+ tracker links)
↓
You iterate on prep.md before the next call
```

**Reschedule same round?** → **UPDATE**, not ADVANCE.

**Trigger command:** `AI/snippets/ADVANCE.md`

---

## Base folder — principles

- Base files are **never process-specific**. They contain reusable narrative content for **verbal delivery in interviews**.
- Pair with `Career/search_context/` (scoring/strategy) — see `Career/JOB_SEARCH.md` → Context layers.
- Base files should be read by the agent for every ADVANCE call.
- Update base files when you identify a gap or new story worth adding — not per process.
- `base/star_stories.md` is the master STAR bank — every story needs: STAR structure, key numbers, when to use, verbal cue, assumptions flagged.
- `base/positioning.md` has 3 versions of "tell me about yourself" — agents should adapt, not copy-paste.

---

## Process log — what it contains

Each `process_log.md` contains:

1. **Overview** — link to opportunity file, date started, current stage
2. **Round log** — table with: round #, date, type, interviewer, outcome, key signal
3. **Open questions** — what you still need to find out about the role/company
4. **Narrative thesis** — which positioning angle is working best for this process
5. **Decision** — pursue / pause / pass + rationale
6. **Historical tracking** — key updates with dates

---

## Round prep — what it contains

Each `round_XX/prep.md` contains:

1. **Call details** — date, time (BRT), format, interviewer
2. **Round objectives** (3 max)
3. **Stories to use** — 2–3 selected from `base/star_stories.md`, adapted to context
4. **Key positioning** — adapted from `base/positioning.md` for this round
5. **Must-ask questions** — role-specific, not generic
6. **Red flags / disqualifiers** — what would change your decision
7. **Learnings from prior round** (if not first round)
8. **Day-of checklist**
9. **Notes** (fill during/after)

---

## Post-call notes — principles

- Write `post_call.md` **same day as the call** — within 1 hour if possible
- Include: what they asked, what you said, what worked, what didn't, what you learned
- **Never overwrite or edit** once written — it's a raw record
- Agent uses this as input for the next round prep

---

## Parallel processes

- Run this workflow independently per process folder
- Each process has its own `process_log.md` and round sequence
- `base/` is shared — one update benefits all processes
- Weekly review (§7): sweep all active `process_log.md` files — upcoming calls in 7 days must have linked `prep.md`; prior round must have `post_call.md`

---

## Integration with the rest of the OS

| When this changes | Also update |
|---|---|
| Round outcome or stage change | `Career/applications_tracker.md` → Status column |
| Role confirmed / JD received | Opportunity file `Career/Applications/*.md` → update Metadata + Scoring |
| Decision: pass / withdraw | `applications_tracker.md` status → Withdrawn (scope) |
| New story added to base | Nothing else required — base is self-contained |

---

## Status update pass (keep layers in sync)

Run **one pass** whenever something changes: reschedule, new round scheduled, call completed, withdraw, or comp update.

**Update order (always all four in the same session):**

| Step | File | What to update |
|---:|---|---|
| 1 | `preparation/{process}/process_log.md` | Round log, Overview (next call, active prep path), Historical tracking |
| 2 | `Career/applications_tracker.md` | Pipeline Summary (Status, Due, Next step), Open Items, Update Log |
| 3 | `Career/Applications/{opportunity}.md` | Metadata Status, Next Actions due, Historical Tracking (one line) |
| 4 | `round_NN/.../prep.md` | Logistics only — or **rename round folder** if call date changed |

**Canonical source by field (avoid drift):**

| Field | Source of truth | Mirror elsewhere? |
|---|---|---|
| **Next call date/time** | `applications_tracker.md` → Due | Yes — process_log Overview + prep Logistics |
| **Pipeline status token** | `applications_tracker.md` → Status | Yes — opportunity Metadata Status (same token) |
| **Round history & process signals** | `process_log.md` | One-line append in opportunity Historical Tracking |
| **Strategic analysis / scores** | Opportunity file | Score number only in tracker |
| **Interview execution** | `preparation/{process}/round_N/prep.md` | Link in process_log + opportunity header — **no duplicate checklists** in opportunity file |
| **Discovery audit trail** | `opportunities_tracker.md` | Reason/Next action if material; live status → always check applications tracker |

**Reschedule:** rename folder `round_NN_{co}_{role}_{type}_{YYYY-MM-DD}/` to the **new date**, update every path reference in the same pass. Note original date in process_log Historical tracking.

**Trigger:** `AI/snippets/UPDATE.md` — user says **UPDATE** + job name + new info. Runs this pass automatically.

**After a completed call:** write `post_call.md` first (never edit later) → **UPDATE** if status/date changed → **ADVANCE** for next round prep if applicable.

---

## Active processes (link to process logs)

Update this table as processes start and close.

| Company | Role | Process folder | Status | Process log |
|---|---|---|---|---|
| BTG Pactual | Operations Transformation | `btg_operations_transformation/` | Interviewing | `btg_operations_transformation/process_log.md` |
| Revolut | S&O Manager — Revenue | `revolut_strategy_operations_dubai/` | Interviewing (await EOW) | `process_log.md` · active: `round_02_revolut_stratops_assessments_2026-06-08/prep.md` |
| Mercado Pago | Gerente Negócios Cripto | `mercadopago_gerente_cripto/` | Interviewing | Legacy: `mercadopago_ivan_career_2026-06-06/` — migrate on ADVANCE |
