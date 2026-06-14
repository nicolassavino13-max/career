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
PROMOTE        →  applications_tracker.md + Applications/*.md  →  applications canvas (separate)
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
- `Career/Opportunities/target_search_queries.md` — search queries + **link verification registry**
- `Career/opportunities_tracker.md` — existing rows (do not duplicate)
- `Career/search_context/master_context.md` + `Career/search_context/career_positioning.md` — fit context
- `Career/search_context/career_goals.md` — deep fit only if needed
- `Career/applications_tracker.md` — mark `Already processed` if company+role already in pipeline; **also drives §2f pipeline checks**

### 1a. Mandatory: run link verification script (do not skip)

**Every RUN_DISCOVERY must start with:**

```bash
python AI/.cursor/hooks/verify_discovery_links.py
```

This script re-checks **all** mandatory company scans + **pipeline/watchlist/Top-3 links** in one pass (API-first, HTML fallback). Rules:

1. **Do not mark the scan complete** until every script check has a resolved status (`Live` / `Stale` / `Aggregator`) — not `Unknown` or `Blocked` without a manual fallback attempt.
2. If the script reports **Unknown/Blocked** (e.g. Revolut 403), **must try fallbacks** from `target_search_queries.md` → **Link verification registry** (WebFetch, Workday CXS, Eightfold, web search) before closing the run.
3. **Update discovery rows** when script status differs from tracker `Link status` (e.g. Visa still Live, Ziina stale).
4. **Log script output** in Weekly Discovery Notes → *Link verification pass (YYYY-MM-DD)*.
5. **Never skip pipeline roles** because they are "in applications" — discovery still verifies posting live/stale (Visa, Adyen, JPM, MP queue, archived watchlist reposts).

Exit code 1 from the script = unresolved checks — resolve before finishing chat reply.

### 2. Run discovery scan

**Geographies (75% SP / 25% Dubai):** São Paulo / Brazil **first** · Dubai / UAE second. User preference from 2026-06-10 (was 50/50).

**Rotation budget:** ~3 SP-focused company checks per 1 Dubai-focused check (mandatory dailies excluded). Dual-presence companies in rotation → **SP pass every run**; Dubai pass ~1 in 3 runs or when Dubai pipeline/watchlist needs verify.

**Prioritize role families:** Strategy & Operations · BizOps · Corporate Development · Strategic Finance · Revenue / Commercial Strategy · Strategic Partnerships / Alliances · Payments / Fintech Strategy · Chief of Staff / Strategic Projects

**Sources:** company career pages, Greenhouse, Lever, Ashby, official job boards. Use LinkedIn/aggregators for leads only — set Link status `Aggregator` and flag for confirmation on official site.

**Do not filter on compensation.**

**Company-level scans** with no target-titled role → update **Parking Lot** only (do not add pseudo-rows with `—` role to the candidate table).

**Banks (digital / payments side):** Include J.P. Morgan, BBVA, Itaú, Bradesco, BTG, Santander per `AI/job_discovery_workflow.md` → Global & LatAm banks. Penalize **Relationship Sales** / payments hunter roles; note **VP title inflation** on bank delivery/product/strategy roles — do not auto-reject VP on seniority alone.

### 2a. Geography per company (required)

For **every** company touched this run, record **Geo checked** in the Companies Checked Report:

| Geo checked | When to use |
|---|---|
| **Dubai** | Dubai/UAE filter only this run |
| **SP** | São Paulo/Brazil filter only this run |
| **Both** | Both filters applied this run |

**Dual-presence companies** (Revolut, Stripe, dLocal, Wise, Airwallex, Visa, Checkout.com, Adyen, EBANX, PayPal, Mastercard, Mercado Livre, Mercado Pago, BTG Pactual, **Brex**, **Coinbase**, Circle, Fireblocks, Ziina, etc.) → default **`SP`** on rotation runs (75% rule). Mark **`Both`** only when both geos were actually searched this run. Mark **`Dubai`** when Dubai-only pass (pipeline/watchlist). Do not mark `Both` if only one geo was searched.

**Single-region companies** → one geo only (never `Both`):
- **SP:** Nubank · Stone · CloudWalk
- **Dubai:** Tabby · Tamara · Careem · Ripple (MEA)

**Mandatory minimum geo** (deep pass): Nubank `SP` · Checkout `Dubai` · Adyen `SP` · Itaú `SP` · Bradesco `SP`. Full dual-presence pass for Checkout/Adyen on rotation days → `Both`.

Full rules: `AI/job_discovery_workflow.md` → Companies Checked Report.

### 2b. Mandatory daily: Nubank (always run)

**Geo checked:** `SP` (Brazil / São Paulo filter — not `Both`; no Dubai hiring)

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

**Geo checked:** `Dubai` on mandatory pass (RevOps / Commercial Strategy UAE). On weeks Checkout is the **full** dual-presence check, use `Both` and scan global board for Brazil/SP strategy titles too.

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

**Geo checked:** `SP` on mandatory pass (alliances / partnerships São Paulo). On full dual-presence rotation for Adyen, use `Both` (include Dubai/UAE strategy/alliances filter).

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

### 2e. Mandatory daily: Revolut (always run — Brazil · Spain)

**Geo checked:** `Both` — mandatory pass = **Brazil remote / São Paulo** AND **Spain remote / Madrid** (not UAE unless full Revolut dual-presence rotation).

**Every RUN_DISCOVERY must include a full Revolut pass** — Dubai S&O Revenue rejected 2026-06-06; watch Brazil + Spain geo pivot for same role family.

1. **Careers page (primary):** https://www.revolut.com/careers — Operations / Strategy filters.
2. **Verify known postings each scan:**
   - Strategy & Operations Manager — `e4b7c063-41c5-4afc-8031-2323db04b9f7` — Remote: Brazil · Spain
   - Operations Manager (Revenue) — `6970b9e3-e515-4b76-804b-9df9ce31296d` — Office: São Paulo · Madrid
3. **Title filters:** `Strategy & Operations` · `Operations Manager` + `Revenue` · `Business Operations` · `BizOps` · `Revenue Operations` (strategy scope).
4. **Location filters:** Brazil remote · São Paulo office · Spain remote · Madrid · Barcelona.
5. **If Brazil or Spain S&O/Revenue live:** add/update discovery row · Link status `Live` · flag in chat (geo pivot — coordinate with Matt before reapply if same job ID).
6. **If no match:** log *"Revolut scan: no S&O/Revenue Brazil or Spain"* in Weekly Discovery Notes.

See: `target_search_queries.md` → **Revolut — mandatory daily scan**.

### 2f. Mandatory daily: Itaú Unibanco (always run)

**Geo checked:** `SP` (São Paulo / Brazil — Brazil-only employer)

**Every RUN_DISCOVERY must include a full Itaú pass** — tier-1 LatAm bank; digital / payments / strategy side.

1. **Careers page (primary):** https://www.itau.com.br/carreiras — filter São Paulo / Brazil.
2. **Title filters:** `Strategy` · `Corporate Development` · `Business Operations` · `BizOps` · `Payments` · `Digital` · `Transformation` · `Innovation` · `Treasury` · `Product` (strategy/delivery scope).
3. **Exclude:** Relationship Sales / RM · analyst-below-band · pure credit/wealth RM.
4. **VP inflation:** read JD — do not auto-reject VP delivery/product/strategy; reject VP sales.
5. **If new target role found:** add row · Link status `Live` · Decision `Process now` or `Monitor`.
6. **If no match:** log *"Itaú scan: no Manager S&O/Corp Dev/payments strategy SP"* in Weekly Discovery Notes; update Parking Lot if only analyst-level titles.

See: `AI/job_discovery_workflow.md` → **Mandatory Daily Company Scan: Itaú Unibanco**.

### 2g. Mandatory daily: Bradesco (always run)

**Geo checked:** `SP` (São Paulo / Brazil — Brazil-only employer)

**Every RUN_DISCOVERY must include a full Bradesco pass** — tier-1 LatAm bank; digital / payments / strategy side.

1. **Careers page (primary):** Bradesco careers portal — filter São Paulo / Brazil (include digital/innovation units if separate).
2. **Title filters:** `Strategy` · `Corporate Development` · `Business Operations` · `BizOps` · `Payments` · `Digital` · `Transformation` · `Innovation` · `Treasury` · `Product` (strategy/delivery scope).
3. **Exclude:** Relationship Sales / RM · analyst-below-band · pure credit/wealth RM.
4. **VP inflation:** read JD — do not auto-reject VP delivery/product/strategy; reject VP sales.
5. **If new target role found:** add row · Link status `Live` · Decision `Process now` or `Monitor`.
6. **If no match:** log *"Bradesco scan: no Manager S&O/Corp Dev/payments strategy SP"* in Weekly Discovery Notes; update Parking Lot.

See: `AI/job_discovery_workflow.md` → **Mandatory Daily Company Scan: Bradesco**.

### 2h. Mandatory every scan: pipeline + queue link verification

**In addition to §2b–2g**, re-verify **every row that matters for action this week**. The verification script (`AI/.cursor/hooks/verify_discovery_links.py`) covers the canonical list; agent must also cross-check tracker rows not in the script.

**Always verify (via script + fallbacks):**

| Bucket | What to re-check | Primary source | Fallback if blocked |
|---|---|---|---|
| **Pipeline — Mapped/Applied** | Visa REF082130W · Adyen 7913587 · JPM 210741903 + 210751285 · BBVA JR00103444 | Workday CXS / Greenhouse / Oracle REST | Official careers URL · WebFetch |
| **Pipeline — MP tracks** | Gerente Online Payments · Gerente Engajamento SME | MELI Eightfold API | LinkedIn job IDs 4206073378 · 4419607407 |
| **Geo pivot** | Revolut S&O `e4b7c063` · OMR `6970b9e3` (Brazil · Spain) | en-BR careers URL | WebFetch · user confirm |
| **Watchlist — Archived** | Nubank SPG 7577975 · Checkout RevOps Dubai | Greenhouse / Ashby API | — |
| **Top 3 queue** | All rows in Weekly Discovery Notes Top 3 | Per-row source in tracker | Registry fallbacks |
| **Monitor + Live rows** | Any discovery row with Decision `Monitor` or `Process now` and Link status ≠ Stale | Row source column | Registry |

**Source fallback protocol (required when primary fails):**

| Failure | Next step | Never do |
|---|---|---|
| HTML **403** (Revolut, PayPal) | WebFetch URL · Workday/Oracle/Eightfold JSON API · web search "site:company careers title geo" | Mark `Unknown` and close scan |
| Careers URL **404** (careers-meli old path) | `mercadolibre.eightfold.ai/api/pcsx/search` · `careers-meli.mercadolibre.com/pt/jobs` | Skip MP verification |
| Workday HTML empty | `…/wday/cxs/{tenant}/{site}/job/{slug}` JSON API | Assume still live from last scan |
| Greenhouse EU 404 | Try `boards-api.greenhouse.io` then `boards.eu.greenhouse.io` | Drop stale flag without re-check |
| LinkedIn aggregator only | Eightfold or official ATS confirm; keep `Aggregator` until official | Promote to Live without ATS |

**Scan is incomplete if:** any mandatory company (§2b–2g) skipped · any pipeline Mapped role not verified · any Top 3 row link status unchanged when script says otherwise · Revolut Brazil/Spain left `Unknown` after fallbacks.

Full registry: `Career/Opportunities/target_search_queries.md` → **Link verification registry**.

### 2i. Weekly rotation: Crypto / Stablecoin + Brex (1–2 per run when slot open)

**Not mandatory daily** — pick **1–2** from roster when a rotation slot is available (alternate with bank/fintech rotation).

**Roster:** Brex · Coinbase · Circle · Binance · Kraken · Fireblocks · Ripple · Tether · OKX · Bybit · Paxos · Gemini

**Geo priority:** **São Paulo / Brazil office** → **Remote (Brazil · Americas · global)** → Dubai/MENA secondary.

1. **Brex (Greenhouse `brex`):** `boards-api.greenhouse.io/v1/boards/brex/jobs` — filter SP + remote for Strategy / S&O / BizOps / Corp Dev / Partnerships. Re-verify job **8580566002** (Banking Ops SP — already PROMOTED intel · do not apply). Flag new target-family SP roles for PROMOTE.
2. **Coinbase (Greenhouse `coinbase`):** same title filters · remote global + Brazil when listed.
3. **Circle:** careers.circle.com — confirm on official site (GH API may 404).
4. **Binance:** binance.com/en/careers — remote Strategy/BizOps filter.
5. **Kraken:** Lever `jobs.lever.co/kraken` · **Fireblocks:** GH `fireblocks` — SP/Dubai per company table in workflow.
6. **Exclude:** control/monitoring banking ops (intel only) · compliance-only · engineering · retail support.
7. **On match:** add row · Link status `Live` · flag in chat (crypto Strategy postings are rare).
8. **On no match:** one-line log in Weekly Discovery Notes · Parking Lot if company-level no-role.

**Companies Checked Report — Geo checked:** `SP` (default) or `Both` if SP + remote-US both filtered.

See: `AI/job_discovery_workflow.md` → **Weekly Rotation: Crypto / Stablecoin + Brex** · `target_search_queries.md` → **Crypto / Stablecoin — weekly rotation**.

### 2j. Weekly rotation: Big Tech SP (1 per run when slot open)

**Not mandatory daily** — pick **1** from roster when a rotation slot is available.

**Roster:** Amazon · Google · Meta · Apple · Microsoft

**Geo:** **SP** — Brazil · São Paulo · Osasco · Rio on official careers portals.

1. **Amazon:** [amazon.jobs](https://www.amazon.jobs) — filter Brazil + Strategy / BizOps / Payments / Partner Strategy / Product Strategy.
2. **Exclude:** Last Mile · Logistics · Fulfillment · EDSP/AMPL/AMXL — job **10408004** is logistics partner pricing/disputes (PROMOTED · score 3.40 · do not apply).
3. **Google / Meta / Apple / Microsoft:** Brazil SP filter — payments · partnerships · BizOps · product strategy only.
4. **Exclude:** ads sales AE · warehouse/FC ops · generic CS.
5. **On match:** add row · Link status `Live` · flag in chat.
6. **On no match:** Parking Lot one-liner.

**Companies Checked Report — Geo checked:** `SP`.

See: `AI/job_discovery_workflow.md` → **Weekly Rotation: Big Tech SP** · `target_search_queries.md` → **Big Tech — weekly rotation**.

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
- Refresh **Weekly Discovery Notes**: scan method, **Companies checked** (`Company | Geo | Outcome`), **Top 3** queue, stale/uncertain summary, **Next scan** list (merged from former Discovery Backlog)
- Update **Parking Lot** for raw leads and company-level no-role signals
- **Canvas** — auto-synced on save; fallback `node AI/.cursor/hooks/sync_discovery_canvas.mjs --force`

Each new row must include: Date found · Company · Role · Seniority signal · Location · Source · Link · **Link status** · Initial fit · Decision · Reason · Next action

Link status: `Live` | `Stale` | `Aggregator` | `Unknown`

Compensation: `Not disclosed / validate later`

### 5. Do NOT

- Run **PROMOTE**
- Create or edit `Career/Applications/*.md`
- Update `Career/applications_tracker.md`
- Edit `career_goals.md` or `target_companies.md` for pipeline status
- Archive or remove existing rows (Promoted / Ignore / Already processed stay in table)

### 6. Reply in chat

**Order matters.** Lead with the **Companies Checked Report** (see `AI/job_discovery_workflow.md` → Companies Checked Report).

1. **Scan date** and geographies covered (Dubai/UAE · São Paulo/Brazil)
2. **Companies Checked Report** — table: **Company · Geo checked · Source · Outcome**. Geo checked = `Dubai` | `SP` | `Both` per `AI/job_discovery_workflow.md`. Always include mandatory: **Nubank · Checkout.com · Adyen · Revolut · Itaú · Bradesco**. Include **pipeline verification** rows (Visa · JPM · MP · watchlist). Dual-presence companies in rotation → `Both`. Then **Geo coverage summary** (one line: gaps, e.g. which dual-geo companies still need the other geo this week).
3. **Link verification pass** — summary from `verify_discovery_links.py`: Live / Stale / unresolved; note any Link status updates applied to tracker rows.
4. **Mandatory scan results** (detail): Nubank · Checkout · Adyen · Revolut · Itaú · Bradesco — roles found or "none"
5. **New candidates added** (table summary: company, role, decision, Link status, why) — or "None"
6. **Stale / uncertain flags** on existing or new rows
7. **Top 3** queue for the week (not necessarily `Process now`)
8. Duplicates skipped

Default model: **Auto** (`AI/cursor_model_usage.md`).
