# ADVANCE — Next-round interview prep snippet

## UPDATE vs ADVANCE

| | **UPDATE** | **ADVANCE** |
|---|---|---|
| **What changes** | Same files — new info added | **New** `round_NN/.../prep.md` folder created |
| **When** | Reschedule, status, comp, withdraw, sync | Next meeting needs its own prep guide |
| **Invoke** | `UPDATE [job]` + new info | `ADVANCE [job]` + context for next round |

---

## When to use

After a completed round (or when a **new** interview round is scheduled) and you need a **new prep file** — not a reschedule of the current round.

- Round 1 prep (first call scheduled)
- Round 2+ after HM / panel / final is booked
- New round type (HR → HM → panel)

**Not for:** reschedule or status sync → **UPDATE**.  
**Not for:** new role in pipeline → **PROMOTE**.

---

## How to invoke

Minimal — name the job + optional context. **No @-tags required.**

```text
ADVANCE BTG operations transformation

HM interview with Rodrigo Alves — VP Operations — Tue 2026-06-15 14:00 BRT.
Notes from HR round: Gerente track, digital ops / BTG Mais scope confirmed.
```

Optional — tag a file if ambiguous:

```text
ADVANCE

@Career/Applications/btg_operations_transformation_inbound_saopaulo_2026-05-26.md

Next: HM Rodrigo 2026-06-15. Scope confirmed digital transformation.
```

Optionally paste or tag prior round notes:

```text
ADVANCE Revolut S&O

@Career/Applications/preparation/revolut_strategy_operations_dubai/round_01_.../post_call.md
```

---

## Examples

```text
ADVANCE BTG

First HR screen — use opportunity file + base. Call Mon 2026-06-08 16:30 Ana Clara.
```

```text
ADVANCE Mercado Pago crypto

Career chat with Ivan Fri 2026-06-06 15:30. Posting closed — map internal paths.
```

```text
ADVANCE BTG

Round 2 — HM interview. Inline notes from round 1:
- Gerente de Transformação Digital
- HM: Rodrigo Alves
- Next step HM call in ~2 weeks
```

---

## Agent instructions

When the user invokes **ADVANCE**, follow `AI/job_advancement_workflow.md` end-to-end.

### Step 1 — Resolve the application (same logic as UPDATE)

1. Read `Career/applications_tracker.md`.
2. Match user's company/role phrase to **one** pipeline row (fuzzy: "BTG operations" → BTG Pactual Operations Transformation).
3. If ambiguous → ask once; do not guess.
4. Load paths from tracker **Report** column + row context:
   - **Opportunity file:** `Career/Applications/{report}.md`
   - **Process folder:** `Career/Applications/preparation/{process}/` — from opportunity header, existing process_log, or `{company}_{role_slug}/` convention
   - **process_log.md** — scaffold if missing (Interviewing roles only)
5. If legacy flat prep exists at `preparation/{event}_{date}/` → migrate into `{process_folder}/round_01_.../` as part of this run.

User does **not** need to tag `process_log.md` or the opportunity file if the job name is clear.

### Step 2 — Read context

Always read:
- `AI/job_advancement_workflow.md`
- Resolved opportunity file
- Resolved `process_log.md`
- `Career/Applications/preparation/base/star_stories.md`
- `Career/Applications/preparation/base/positioning.md`
- `Career/Applications/preparation/base/why_fintech.md`

Read if applicable:
- `base/why_sao_paulo.md` — SP roles
- `base/why_dubai.md` — Dubai roles

Read if exists (prior round):
- Highest `round_NN_.../prep.md`
- Highest `round_NN_.../post_call.md` — prefer file over inline notes

If user pasted inline notes and no `post_call.md` for completed prior round → **create `post_call.md`** for that round first (append-only), then generate next prep.

### Step 3 — Determine next round

- Next round number = highest existing round + 1 (or `01` if none)
- Parse from user message: round type, interviewer, date/time (normalize **BRT**)
- If date unknown → create prep with `[TBD]` in logistics; flag in reply

### Step 4 — Create **new** round prep file

**Always a new folder** — never overwrite an existing round's `prep.md`.

Path:

```text
Career/Applications/preparation/{process}/round_{N:02d}_{company_abbr}_{role_abbr}_{type}_{YYYY-MM-DD}/prep.md
```

Use `Career/Applications/preparation/templates/round_prep_template.md`.

Content:
- 2–3 STAR stories from `base/` adapted to role + interviewer type
- Positioning from `base/positioning.md` adapted to this round
- Geography answer if relevant
- Learnings from prior `post_call.md`
- Role-specific must-ask questions
- Red flags / gaps from prior round

### Step 5 — Update linked files (not a full UPDATE pass)

| File | Update |
|---|---|
| `process_log.md` | New round row (Upcoming), Active prep path, Historical tracking one line |
| `applications_tracker.md` | Next step → new prep path; Due if new date known; Update Log |
| Opportunity file | Header active prep link; Next Actions if stage changed |
| Prior round | Do not edit `post_call.md` if it exists |

If reschedule of **current** round (same round number, new date) → stop and tell user to use **UPDATE**, not ADVANCE.

Run canvas sync if tracker changed (hook or `--force`).

### Step 6 — Reply in chat

| Field | Value |
|---|---|
| Application | Company — Role |
| Round created | N — type — path |
| Call | date/time or TBD |
| Focus (2–3 bullets) | … |
| Assumptions | … |

---

## Notes

- Never overwrite `post_call.md`
- Round 1 with no prior folder → scaffold `{process}/process_log.md` + `round_01/.../prep.md`
- Lower confidence if advancing without prior round notes — flag explicitly
- **Reschedule same round** → **UPDATE**, not ADVANCE
