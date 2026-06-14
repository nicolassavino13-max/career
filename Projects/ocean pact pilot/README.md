# OceanPact pilot

Calibrating **`ppt-consulting`** against this deck + reference materials.

## Layout

| Folder / file | Purpose |
|---------------|---------|
| `sources/` | Reference PDFs, PPTs, McKinsey decks, template `.pptx` (drop here) |
| `decks/` | Generated pilot outputs (v1–v6) |
| `build_oceanpact_deck.py` | Rebuild script — outputs to `decks/` |
| `OceanPact-deck-outline.md` | Action-lede outline (outline test) |

## Build

```powershell
& "$env:LOCALAPPDATA\Programs\Python\Python312\python.exe" "Projects/ocean pact pilot/build_oceanpact_deck.py"
```

Latest: **`decks/OceanPact-vai-faltar-barco-deck-v6.pptx`** (18 slides).

## Skill stack

`ppt-consulting` (storyline) → `ppt-com` (COM) → `ppt-template-builder` (match template)

Iterations that generalize → `~/.cursor/skills/ppt-consulting/`. Deal-specific copy stays here.
