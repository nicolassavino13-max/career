# UPDATE — Pipeline status sync snippet

## UPDATE vs ADVANCE

| | **UPDATE** | **ADVANCE** |
|---|---|---|
| **What changes** | Same files — new info synced across layers | **New** `round_NN/.../prep.md` created |
| **When** | Reschedule, status, comp, withdraw | Next meeting needs its own prep file |
| **Invoke** | `UPDATE [job]` + new info | `ADVANCE [job]` + next-round context |

---

## When to use

Any **live process change** that must cascade across layers without drift:

- Interview/call **rescheduled** or cancelled
- New call **scheduled** (date/time/interviewer) — before prep exists, use UPDATE; then `ADVANCE` if you need a new prep file
- **Status change** (Applied → Interviewing, Interviewing → Paused, etc.)
- **Comp** disclosed or validated
- **Withdraw / reject** decision
- Referrer/warm path update
- Next step or due date change

**Not for:** generating next-round interview prep → use **ADVANCE**.  
**Not for:** new opportunity scoring → use **PROMOTE**.

---

## How to invoke

Minimal — name the job + paste the new info:

```text
UPDATE BTG operations transformation

HR screen postponed to Mon 8/6 16:30 — Ana Clara had another meeting.
```

Optional — tag a file if ambiguous:

```text
UPDATE

@Career/Applications/btg_operations_transformation_inbound_saopaulo_2026-05-26.md

New info: HR screen postponed to 2026-06-08 16:30 BRT.
```

---

## Examples

```text
UPDATE Revolut S&O

Screen moved to Wed 2026-06-04 09:30 BRT — Matt emailed new slot.
```

```text
UPDATE Mercado Pago crypto

Ivan career chat confirmed Fri 2026-06-06 15:30 BRT. Posting still closed.
```

```text
UPDATE BTG

Withdrew — scope is Analyst Jr only, not Manager+. Pause process.
```

---

## Agent instructions

When the user invokes **UPDATE**, run the **Status update pass** in `AI/job_advancement_workflow.md` end-to-end. Do **not** update only one file.

### Step 1 — Resolve the application

1. Read `Career/applications_tracker.md`.
2. Match the user's company/role phrase to **one** pipeline row (fuzzy: "BTG operations" → BTG Pactual Operations Transformation).
3. If ambiguous (multiple rows same company) → ask once; do not guess.
4. Load:
   - Opportunity file from tracker **Report** column (`Career/Applications/*.md`)
   - Process folder: `Career/Applications/preparation/{process}/` — from opportunity header, process_log link, or `{company}_{role_slug}/` convention
   - `process_log.md` inside that folder (scaffold if missing and process is Interviewing)
   - Active `round_NN_.../prep.md` if a round is in flight

### Step 2 — Parse the user's new info

Extract structured fields from free text:

| Signal | Action |
|---|---|
| New date/time | Normalize to **YYYY-MM-DD HH:MM BRT** (Rio). `8/6 16:30` → `2026-06-08 16:30 BRT` unless user gives full date |
| Reschedule | Rename round folder date suffix; note original date in Historical tracking |
| Status change | Use tracker token vocabulary: `Interviewing (HR screen · date)` etc. |
| Comp | Update opportunity file + tracker Open Items |
| Withdraw / pause | Tracker status + process_log Decision + stop investing prep |
| Call completed (inline notes) | Offer to write `post_call.md`; do not overwrite if file exists |

Flag assumptions (e.g. year inferred from context).

### Step 3 — Status update pass (always all steps)

Execute in order — **same session**:

| Step | File | Update |
|---:|---|---|
| 1 | `preparation/{process}/process_log.md` | Round log, Overview (next call, active prep path), Historical tracking |
| 2 | `Career/applications_tracker.md` | Pipeline Summary (Status, Due, Next step), Open Items, Update Log |
| 3 | Opportunity file | Metadata Status, Next Actions due/status, Historical Tracking (append one line) |
| 4 | Active `round_NN/.../prep.md` | Logistics + header dates only — **no duplicate** of strategic content |

**Also update when material:**
- `Career/opportunities_tracker.md` — Promoted row Reason/Next action (discovery audit only)
- Canvas — auto-sync via save hooks; fallback `node AI/.cursor/hooks/sync_pipeline_canvas.mjs --force`

**Do not:**
- Duplicate full prep checklists into the opportunity file
- Edit `post_call.md` if it already exists
- Change scores/strategic analysis unless user info affects fit (then update Scoring + note in Historical Tracking)

### Step 4 — Reschedule-specific rules

1. Rename folder: `round_{NN}_{co}_{role}_{type}_{OLD_DATE}/` → `..._{NEW_DATE}/`
2. Update **every** path reference: process_log, opportunity header, tracker next step, prep header
3. Append to process_log Historical: `Postponed from {old} → {new} — {reason}`

### Step 5 — Reply in chat

Confirm in a short table:

| Field | New value |
|---|---|
| Application | Company — Role |
| Status | … |
| Next call / Due | … |
| Files updated | list paths |

List any assumption. If next step is HM prep → suggest `ADVANCE` when ready.

---

## Date parsing (BRT)

- All call times: **BRT — America/São_Paulo (Rio)**
- `8/6`, `08/06`, `Mon 8/6` → infer year from context (default: current calendar year in tracker)
- Always store ISO date in files: `2026-06-08 16:30 BRT`

---

## Relationship to other commands

| Command | Use when |
|---|---|
| **UPDATE** | Something changed — sync all layers |
| **ADVANCE** | Next interview round — generate prep from context |
| **PROMOTE** | New role enters pipeline |
| **§7** | Weekly sweep — finds gaps UPDATE should have fixed |
