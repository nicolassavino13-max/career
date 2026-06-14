# AI / Cursor config

NicOS automation lives here. **Edit these files** — not the root `.cursor/` stubs.

| Path | Role |
|---|---|
| `hooks/sync_pipeline_canvas.mjs` | Regenerate applications canvas from `Career/applications_tracker.md` |
| `hooks/sync_discovery_canvas.mjs` | Regenerate opportunities canvas from `Career/opportunities_tracker.md` |
| `pipeline_canvas_path.txt` | Output path for pipeline canvas |
| `discovery_canvas_path.txt` | Output path for discovery canvas |
| `rules/` | Agent rules (`job-search.mdc`, `model-usage.mdc`, `ppt-deck.mdc`) |

Personal skills (not in repo): `~/.cursor/skills/ppt-consulting`, `ppt-com`, `ppt-template-builder`

Root `.cursor/hooks.json` points here (Cursor IDE requirement). Root `.cursor/rules/` is a junction to `AI/.cursor/rules/`.

Manual sync from repo root:

```bash
node AI/.cursor/hooks/sync_pipeline_canvas.mjs --force
node AI/.cursor/hooks/sync_discovery_canvas.mjs --force
```
