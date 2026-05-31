# RUN_DISCOVERY — Daily opportunity scan

Run the **discovery layer only**. Do not create Application files or update `Career/applications_tracker.md`.

**Discovery outputs (both update on save):**

| Output | Path |
|---|---|
| Opportunities tracker | `Career/opportunities_tracker.md` |
| Opportunities canvas | `AI/canvases/opportunities-tracker.canvas.tsx` |

Canvas auto-syncs via `AI/.cursor/hooks/sync_discovery_canvas.mjs` when the discovery file is saved. Fallback: `node AI/.cursor/hooks/sync_discovery_canvas.mjs --force`

```text
RUN_DISCOVERY  →  opportunities_tracker.md  →  discovery canvas
PROMOTE        →  §1 + applications_tracker.md    →  applications canvas (separate)
```

---

## Copy-paste (shorthand)

```text
RUN_DISCOVERY

@AI/snippets/RUN_DISCOVERY.md
@AI/job_discovery_workflow.md
@Career/Opportunities/target_search_queries.md
@Career/opportunities_tracker.md
@Career/search_context/career_goals.md
@Career/search_context/master_context.md
```

Minimal (agent resolves from rules + `AI/.cursor/rules/job-search.mdc`):

```text
RUN_DISCOVERY
```

---

## Agent instructions

### 1. Read context

- `AI/job_discovery_workflow.md` — pre-screen rules, geographies, seniority, role families, queue + Link status rules
- `Career/Opportunities/target_search_queries.md` — search queries (rotate Dubai/UAE + São Paulo/Brazil)
- `Career/opportunities_tracker.md` — existing rows (do not duplicate)
- `Career/search_context/master_context.md` + `Career/search_context/career_positioning.md` — fit context
- `Career/search_context/career_goals.md` — deep fit only if needed
- `Career/applications_tracker.md` — mark `Already processed` if company+role already in pipeline (do not re-add as new)

### 2. Run discovery scan

**Geographies (equal priority):** Dubai / UAE · São Paulo / Brazil

**Prioritize role families:** Strategy & Operations · BizOps · Corporate Development · Strategic Finance · Revenue / Commercial Strategy · Strategic Partnerships / Alliances · Payments / Fintech Strategy · Chief of Staff / Strategic Projects

**Sources:** company career pages, Greenhouse, Lever, Ashby, official job boards. Use LinkedIn/aggregators for leads only — set Link status `Aggregator` and flag for confirmation on official site.

**Do not filter on compensation.**

**Company-level scans** with no target-titled role → update **Parking Lot** only (do not add pseudo-rows with `—` role to the candidate table).

### 2b. Mandatory daily: Nubank (always run)

**Every RUN_DISCOVERY must include a full Nubank pass** — do not skip even when rotating other companies.

1. **Greenhouse API (primary):** `https://boards-api.greenhouse.io/v1/boards/nubank/jobs?content=true`
2. **Filter titles** for São Paulo / Brazil (or remote Brazil if listed) matching:
   - `Strategic Partnership` · `Strategic Partnership Group` · `SPG` · `General Strategic Partnership Profile`
   - `Corporate Development` · `Strategy` · `Business Operations` · `BizOps`
   - `Product Operations` (Manager+ only) · `Chief of Staff` · `Strategic Finance`
3. **Exclude** pure sales/hunter, analyst-below-band, engineering, compliance, marketing (unless B2B strategy scope is explicit).
4. **Fallback browse:** https://job-boards.greenhouse.io/nubank — filter Office = Brazil / São Paulo.
5. **If new target role found:** add row with Link status `Live`, Decision `Process now` or `Monitor`; flag in chat. If SPG family reposts → note in Weekly Discovery Notes and suggest PROMOTE.
6. **If no target role:** still log in Weekly Discovery Notes: *"Nubank scan: no SPG/Corp Dev/S&O SP match"* — do not remove existing Nubank rows.

See also: `Career/Opportunities/target_search_queries.md` → **Nubank — mandatory daily scan**.

### 2c. Mandatory daily: Checkout.com (always run)

**Every RUN_DISCOVERY must include a full Checkout pass** — high-fit RevOps role is archived; watch for repost.

1. **Ashby API (primary):** `https://ashby-careers-checkout-production.up.railway.app/api/jobs`
2. **Filter titles** for **Dubai / UAE** matching:
   - `RevOps` · `Revenue Operations` · `Commercial Strategy` · `Commercial Strategy Partner`
   - `GTM` · `Go-to-Market` (strategy/ops, not pure sales) · `Business Operations` · `BizOps`
3. **Also scan globally** for same title family — flag if Dubai added as secondary location.
4. **Fallback browse:** https://www.checkout.com/jobs
5. **If RevOps / Commercial Strategy Partner reposts:** flag in chat; suggest reactivating `checkout_revops_commercial_strategy_partner_dubai_2026-05-26.md` from Watchlist → Pipeline.
6. **If no match:** log *"Checkout scan: no RevOps/Commercial Strategy Dubai"* in Weekly Discovery Notes.

See: `target_search_queries.md` → **Checkout.com — mandatory daily scan**.

### 2d. Mandatory daily: Adyen (always run)

**Every RUN_DISCOVERY must include a full Adyen pass** — alliances role mapped; watch live posting + new SP/Brazil roles.

1. **Greenhouse API (primary):** `https://boards-api.greenhouse.io/v1/boards/adyen/jobs?content=true`
2. **Filter titles** for **São Paulo / Brazil** matching:
   - `Alliances` · `Partnerships` · `Strategic Partnerships` · `Partner Manager`
   - `Corporate Development` · `Strategy` · `Business Operations` · `Commercial Strategy`
3. **Confirm existing posting live:** Senior Alliances Partner Manager (job 7913587) — if closed, flag in chat + applications watchlist.
4. **Fallback browse:** https://job-boards.greenhouse.io/adyen
5. **If new target role found:** add discovery row; if upgrades current mapped role, note for user.
6. **If no new match:** log *"Adyen scan: Alliances SP live / no new SP-Brazil"* in Weekly Discovery Notes.

See: `target_search_queries.md` → **Adyen — mandatory daily scan**.

### 3. Pre-screen each lead

Add a row only if it passes enough of: target geo · Manager/Sr Manager (or equivalent) · target role family · fintech/payments/platform relevance.

| Outcome | Action |
|---|---|
| Strong new lead | Add row with fit + decision + Link status |
| Duplicate of existing row | Skip or mark `Duplicate` |
| Already in Applications/tracker | Mark `Already processed` if not already labeled |
| Uncertain posting / link / seniority | Add with `Need more info` + Link status `Unknown` or `Aggregator` |
| Stale or closed listing | Link status `Stale`; keep or add row if market signal useful |
| Outside band (sales, analyst, etc.) | `Ignore` or omit |

**Queue:** Weekly **Top 3** = working queue. Set **`Process now`** only when Link status is **Live** (or aggregator verified on official site) and ready for PROMOTE this week.

### 4. Update discovery file

Edit **`Career/opportunities_tracker.md`** only:

- **Append** new rows to Candidate Table — never delete old rows
- Update **Last scan** date in header
- Refresh **Weekly Discovery Notes**: scan method, **Top 3** queue, stale/uncertain summary, **Next scan** list (merged from former Discovery Backlog)
- Update **Parking Lot** for raw leads and company-level no-role signals
- **Canvas** — auto-synced on save; fallback `node AI/.cursor/hooks/sync_discovery_canvas.mjs --force`

Each new row must include: Date found · Company · Role · Seniority signal · Location · Source · Link · **Link status** · Initial fit · Decision · Reason · Next action

Link status: `Live` | `Stale` | `Aggregator` | `Unknown`

Compensation: `Not disclosed / validate later`

### 5. Do NOT

- Run Prompt §1 or PROMOTE
- Create or edit `Career/Applications/*.md`
- Update `Career/applications_tracker.md`
- Edit `career_goals.md` or `target_companies.md` for pipeline status
- Archive or remove existing rows (Promoted / Ignore / Already processed stay in table)

### 6. Reply in chat

- Scan date and geographies covered
- **Mandatory scan results:** Nubank · Checkout · Adyen (roles found or "none")
- **New candidates added** (table summary: company, role, decision, Link status, why)
- **Stale / uncertain flags** on existing or new rows
- **Top 3** queue for the week (not necessarily `Process now`)
- Duplicates skipped

Default model: **Auto** (`AI/cursor_model_usage.md`).
