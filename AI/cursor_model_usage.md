# Cursor Model Usage — Simple Rule

> Goal: protect API quota ($20/mo on Pro). Default to Auto. Escalate only when the task earns it.

---

## The rule in one line

**Auto by default. API only when the output is high-stakes or Auto failed twice.**

---

## Two pools (what you're spending)

| Pool | What it is | Your status | Rule |
|---|---|---|---|
| **Auto + Composer** | Cursor picks the model; Agent/Composer edits | 0% used | **Use this 80%+ of the time** |
| **API** | You pick the model (Sonnet, Opus, GPT, etc.) | ~28% used | **Reserve for high-value work** |

---

## Decision tree

```
New task
  │
  ├─ Quick / repetitive / formatting / lookup?
  │     → Auto or Composer
  │
  ├─ Stuck after 2 Auto attempts?
  │     → Switch to API (Sonnet first)
  │
  └─ High-stakes deliverable?
        → API (Sonnet) → Opus/Thinking only for final pass
```

---

## Job search mapping

| Task | Model | Why |
|---|---|---|
| Find & paste JD, inbox triage | **Auto** | Low complexity |
| Score opportunity (Steps 1–8) | **Auto** | Structured; workflow is in context |
| Full opportunity `.md` report | **Auto** → **Sonnet** if quality weak | Auto handles templates well |
| Update `applications_tracker.md` | **Auto** | Table edits, no reasoning depth needed |
| Outreach / referral message | **Sonnet** | Tone matters; still cheap vs Opus |
| Cover letter / exec narrative | **Sonnet** | Writing quality worth API |
| Interview prep (STAR, case, role-play) | **Sonnet** | Depth needed |
| Final review — top-tier opp (score ≥ 4.5) | **Opus / Thinking** | One pass before submit only |
| Canvas / dashboard builds | **Auto** or **Composer** | Visual layout, not deep reasoning |

---

## Model picks (when you leave Auto)

| Model | When | Avoid for |
|---|---|---|
| **Composer** | Multi-file edits, agent runs in repo | Simple Q&A |
| **Sonnet / fast API** | Daily premium work — reports, messages, prep | Trivial edits |
| **Opus / Thinking** | Final polish on 1–2 top opportunities per week | Research, formatting, tracker updates |

---

## Budget guardrails

| API usage | Action |
|---|---|
| **< 50%** | Normal — Sonnet freely for writing/prep |
| **50–80%** | Opus/Thinking off; Sonnet only for apply-ready outputs |
| **> 80%** | Auto-only until cycle resets; enable Usage Summary → Always |

---

## Session habits

1. Start every session on **Auto**.
2. Don't change model mid-task unless stuck.
3. One Opus pass > three Opus passes on the same doc.
4. Batch similar work (score 3 roles in one session, don't open 3 premium sessions).
5. Check dashboard once a week — not every message.

---

## Quick reference card

```
AUTO     → research, scoring, templates, tracker, edits, canvases
SONNET   → outreach, cover letters, interview prep, weak Auto output
OPUS     → final review, top 1–2 opportunities only
NEVER    → Opus for formatting, table updates, or "quick questions"
```
