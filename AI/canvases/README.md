# NicOS Canvases

All canvases live under **`AI/canvases/`** so you can **@-tag them in chat** (e.g. `@AI/canvases/applications-tracker.canvas.tsx`).

Auto-synced copies also write to the Cursor project `.cursor/projects/.../canvases/` folder for the IDE canvas panel.

| Canvas | @-tag path | Source | Refresh |
|---|---|---|---|
| Opportunities tracker | `AI/canvases/opportunities-tracker.canvas.tsx` | `Career/opportunities_tracker.md` | `RUN_DISCOVERY` or `node AI/.cursor/hooks/sync_discovery_canvas.mjs --force` |
| Applications tracker | `AI/canvases/applications-tracker.canvas.tsx` | `Career/applications_tracker.md` | PROMOTE / §1 save, or `node AI/.cursor/hooks/sync_pipeline_canvas.mjs --force` |
| 30-day learning plan | `AI/canvases/cursor-career-learning-plan.canvas.tsx` | Manual (edit this file) | Re-open canvas after edit |

Path config: `AI/.cursor/discovery_canvas_path.txt` · `AI/.cursor/pipeline_canvas_path.txt`
