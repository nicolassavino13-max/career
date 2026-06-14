# BUILD_DECK — PowerPoint deck build / edit

**Skills (read in order):**

1. **`~/.cursor/skills/ppt-consulting/SKILL.md`** — storyline, ledes, **chart-first aesthetics** (`aesthetics.md`, `layouts.md`)
2. **`~/.cursor/skills/ppt-com/SKILL.md`** — COM execution, tables, save
3. **`~/.cursor/skills/ppt-template-builder/SKILL.md`** — rebuilds / template parity only

**Platform:** Windows + Microsoft PowerPoint + `pywin32`. Use **`py`**, not `python`.

---

## Invoke

```text
BUILD_DECK
```

With context:

```text
BUILD_DECK

@AI/snippets/BUILD_DECK.md

Deck: [filename or "active window"]
Goal: [new deck | edit slide 3 | rebuild slide 6 as 7 | add table | ...]
Working folder: [path for exports/scripts, optional]
```

Minimal (deck already open in PowerPoint):

```text
BUILD_DECK — edit slide 4 title to "Summary"
```

---

## Agent flow

1. **Read** `ppt-consulting` → draft **outline of action ledes** (outline test).
2. **Read** `ppt-com` (+ `ppt-template-builder` if recreate/match template).
3. **Connect** to `PowerPoint.Application` (prefer active instance).
3. **Resolve deck** — `ActiveWindow.Presentation` or `Presentations.Open(r"...")` if path given.
4. **Clarify scope** if missing: which slides, net-new vs edit, reference slide numbers.
5. **Execute** with COM; `pres.Save()` when done.
6. **Reply with:** what changed, slide numbers, save path, next step (e.g. PNG diff for rebuilds).

---

## Mode picker

| User intent | Skills | Approach |
|-------------|--------|----------|
| **New exec / strategy deck** | **ppt-consulting** → ppt-com | Outline ledes first, then build |
| Open / list / read slides | ppt-com | Inventory + read properties |
| Text or small layout fix | ppt-com | Surgical shape update |
| New table / McKinsey grid | ppt-consulting + ppt-com + ppt-table.md | Textbox grid, lines to front |
| Recreate slide / template parity | ppt-template-builder + ppt-com | No copy/paste rebuild loop |
| Export for review | ppt-com | `slide.Export(..., "PNG", 1920, 1080)` |

---

## Rebuild loop (template parity)

1. Inventory reference slide (`rebuild_slide_recursive_reference.py` pattern).
2. Build destination from primitives on empty or designated slide.
3. Export ref + dst PNG to working folder.
4. User feedback → delta fix pass → save.
5. On approval → sanitized script in `~/.cursor/skills/ppt-template-builder/scripts/`.

---

## Safety (non-negotiable)

- Do not delete slides or slides' content without explicit OK.
- Do not close PowerPoint.
- Sanitize client/sensitive content before saving reusable scripts.
- **Action lede:** Arial **25pt** (`action-titles.md`).
- **Storyline v6:** intro context → thesis → agenda → **section dividers** → build → however → synthesis → close (`storyline-templates.md`).
- **Charts:** native PowerPoint charts (`chart-grammar.md`) — not drawn rectangles.
- **Text:** composition-first — one text channel per slide (`text-layering.md`).
- Subtitle left-align: `TextFrame.MarginLeft = 0` with lede.
- **Language** = language of the deck (PT/EN/ES — not a blocker).

---

## First-time setup check

If COM fails, suggest: `pip install pywin32` and confirm PowerPoint is installed.
