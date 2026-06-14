# Job Discovery Workflow

## Objective

Create a lightweight top-of-funnel system to identify, pre-screen and prioritize job opportunities before they enter the official Job Search OS.

This workflow sits before `AI/job_search_workflow.md`.

The goal is to reduce manual searching, avoid missing relevant opportunities, and create a structured staging area for roles that may deserve deeper analysis.

The discovery agent should focus on **São Paulo / Brazil first (75%)** and **Dubai / UAE second (25%)** — user preference from 2026-06-10 (was 50/50).

Do not use compensation as a discovery filter. Nicolas will filter compensation manually later.

---

# Relationship to Job Search OS

## Opportunities layer (pre-PROMOTE)

Files:

```text
Career/opportunities_tracker.md     ← RUN_DISCOVERY output (canonical)
Career/Opportunities/target_search_queries.md
```

Purpose:
- Find opportunities
- Store search queries
- Pre-screen roles
- Decide what deserves deeper processing

## Search context (agent inputs)

Folder:

```text
Career/search_context/
```

Purpose:
- Profile, positioning, scorecard, goals, target companies, CV — read for fit/scoring; never store pipeline status here

## Applications Layer

Folder:

```text
Career/Applications/
Career/Applications/preparation/   ← interview execution (ADVANCE); not discovery or Stage 1
```

Purpose:
- Store fully processed opportunities (Stage 1 analysis)
- Apply scoring framework
- Generate recommendations
- Track next actions
- **Interview prep** via `preparation/{process}/` when active

---

# Full Funnel

```text
Search queries (`Career/Opportunities/target_search_queries.md`)
↓
RUN_DISCOVERY snippet (`AI/snippets/RUN_DISCOVERY.md`) — daily scan
↓
Candidate opportunities (`Career/opportunities_tracker.md`)
↓
Discovery canvas auto-sync (`AI/.cursor/hooks/sync_discovery_canvas.mjs`)  ← stops here for RUN_DISCOVERY
↓
Pre-screening (Decision: process / monitor / ignore / need more info / promoted)
↓
PROMOTE snippet (`AI/snippets/PROMOTE.md`) → `AI/job_search_workflow.md`   ← handoff to Applications layer
↓
Application file (Stage 1)
↓
Tracker (`Career/applications_tracker.md`)
↓
Canvas auto-sync (`AI/.cursor/hooks/sync_pipeline_canvas.mjs`)
↓
Interview / recruiter contact scheduled
↓
ADVANCE snippet (`AI/snippets/ADVANCE.md`) → `preparation/{process}/round_N/`  ← see `AI/job_advancement_workflow.md`
```

**RUN_DISCOVERY does not update the applications tracker or applications canvas.** It updates the opportunities file + opportunities canvas only. **PROMOTE** updates Applications + applications canvas. **ADVANCE** updates preparation layer only (+ tracker/opportunity file after rounds).

Full architecture: `Career/JOB_SEARCH.md`.

---

# Inputs

## Search Inputs

- Target roles
- Target seniority levels
- Target companies
- Target geographies
- Target industries
- Keywords
- Exclusion keywords
- Job boards
- Company career pages
- Recruiter leads
- LinkedIn saved alerts

## Personal Inputs

Use these as context only. Do not store live pipeline status outside the tracker.

- `Career/search_context/master_context.md`
- `Career/search_context/career_positioning.md`
- `Career/search_context/career_goals.md`
- `AI/job_search_workflow.md`
- `Career/applications_tracker.md`, if available

---

# Target Geographies

The discovery agent should prioritize **São Paulo / Brazil (75%)** over **Dubai / UAE (25%)**.

## Primary geographies (weighted)

1. **São Paulo / Brazil** — default deep pass; most rotation slots; new rows preferred here when fit is comparable
2. **Dubai / UAE** — pipeline verification + high-fit watchlist; fewer rotation slots per run

**Per-run rotation budget (guideline):** ~**3 SP-focused** company checks for every **1 Dubai-focused** check (excluding mandatory dailies). Dual-presence employers: **SP pass every run** when in rotation; **Dubai pass** on ~1 in 3 runs or when a Dubai pipeline/watchlist row needs re-verify.

Mandatory dailies already skew SP (Nubank · Adyen · Itaú · Bradesco vs Checkout Dubai · Revolut Brazil/Spain).

## Secondary / opportunistic geographies

Only include if company and role are highly strategic:
- Remote global / remote-US
- Europe, especially Spain, Portugal, Netherlands, UK or EU-accessible roles
- Switzerland
- Other global fintech hubs

## Discovery rule

A role should generally enter the candidate list if it is:
- in Dubai / UAE; or
- in São Paulo / Brazil; or
- remote/global with strong fintech/payments/crypto/platform relevance; or
- at a must-pursue company even if the geography is secondary.

---

# Target Seniority

The discovery agent should focus on **Manager** and **Senior Manager** level roles.

## Primary seniority signals

Prioritize titles containing:
- Manager
- Senior Manager
- Sr. Manager
- Sr Manager
- Strategy Manager
- Operations Manager
- Business Operations Manager
- Corporate Development Manager
- Strategic Finance Manager
- Partnerships Manager
- Senior Partnerships Manager
- Market Development Manager
- Growth Manager
- Revenue Strategy Manager
- Product Strategy Manager
- Commercial Strategy Manager
- Strategic Projects Manager
- Chief of Staff

## Equivalent / adjacent seniority signals

Include when role scope looks equivalent to Manager / Senior Manager:
- Lead
- Strategy Lead
- Operations Lead
- Business Operations Lead
- Partnerships Lead
- Growth Lead
- Expansion Lead
- Principal
- Principal, Strategy
- Principal, Business Operations
- Senior Associate, Strategy
- Senior Associate, Corporate Development
- Associate Director
- Director, if scope is not too senior and candidate profile may fit
- Head of Strategy, only if small company or country-level scope
- Head of Partnerships, only if strategic and not pure sales
- GM / General Manager, only if realistic and not too senior

## Lower-seniority roles to deprioritize

Generally avoid unless company is exceptional:
- Analyst
- Junior Analyst
- Associate
- Operations Associate
- Strategy Associate
- Business Analyst
- Intern
- Coordinator
- Specialist, unless seniority/scope is clearly Manager-equivalent

Exception:
- “Senior Associate” may be relevant in corporate development, strategic finance, venture/growth, or high-caliber fintech contexts.

## Too senior / likely stretch

Monitor but do not prioritize unless strong referral/inbound exists:
- VP
- Vice President
- Senior Director
- Country Manager
- Regional Head
- Global Head
- C-level

Exception:
- startup/scale-up titles can be inflated. If scope looks Manager/Sr Manager-equivalent, add as `Need more info`.

---

# Target Opportunity Types

Prioritize roles in:

## Highest-priority role families

- Strategy & Operations
- Business Operations
- BizOps
- Corporate Development
- Strategic Finance
- Revenue Strategy
- GTM Strategy
- Growth Strategy
- Product Strategy
- Platform Strategy
- Payments Strategy
- Fintech Strategy
- Market Development
- Strategic Partnerships
- Ecosystem Partnerships
- Alliances
- Chief of Staff
- Strategic Projects
- GM-track roles

## Commercial-adjacent roles to include only if strategic

Include if enterprise-level, ecosystem-oriented, cross-functional, and linked to strategy or partnerships:
- Strategic Partnerships
- Alliances
- Market Development
- Business Development
- Partner Strategy
- Ecosystem Development
- Commercial Strategy
- Enterprise Partnerships

## Roles to avoid or penalize

Avoid unless company/scope is exceptional:
- Account Executive
- Sales Manager
- Sales Executive
- Business Development Representative
- SDR / BDR
- Account Manager
- Customer Success Manager
- Relationship Manager
- Wealth Manager
- Corporate Banking RM
- Pure FP&A
- Back-office operations
- Local operations with weak strategic scope
- Implementation/project manager roles with no business ownership
- Technical Product Manager / Engineering roles
- Data Scientist / Data Analyst roles unless strategy-adjacent

---

# Target Industries

Prioritize:
- Fintech
- Payments
- Crypto infrastructure
- Stablecoins
- Digital banking
- Financial infrastructure
- B2B fintech
- Embedded finance
- Marketplaces with fintech adjacency
- Big tech payments
- Digital platforms
- High-growth platforms
- Adtech / monetization platforms only when role is Strategy, Corp Dev, Growth or Platform Strategy

---

# Target Company Categories

## Global fintech / payments infrastructure

Examples:
- Revolut
- Adyen
- Stripe
- Checkout.com
- Wise
- Airwallex
- PayPal
- Block
- dLocal
- EBANX
- **Brex** (corporate cards + banking; SP hub; stablecoin rails on ops side)

## Payment networks / big tech payments

Examples:
- Visa
- Mastercard
- Amazon · **Amazon Pay**
- Google Payments
- Apple Pay
- Meta payments / commerce
- TikTok commerce/payments

**Discovery note:** At Amazon, **include** payments-adjacent Strategy, BizOps, Partnerships, Product Strategy roles — **exclude or penalize** Last Mile / logistics / fulfillment ops roles even when title contains "Payments" (partner invoice/dispute ops ≠ fintech payments). See **Weekly Rotation: Big Tech SP** below.

## Brazil / LatAm platforms and fintech

Examples:
- Mercado Livre
- Mercado Pago
- Nubank
- Stone
- Pagar.me
- CloudWalk
- PicPay
- XP, only if role is fintech/platform/strategy-aligned

## Global & LatAm banks — digital / payments / fintech side (equal priority with pure fintech)

Search the **fintech-adjacent** side of large banks — not retail branch RM or generic corporate banking. Tier-1 global and LatAm champions are valid targets when the role touches payments, digital, treasury, rails, innovation economy, or transformation.

### Target banks (names to scan)

| Bank | Primary discovery sources | Geo focus |
|---|---|---|
| **J.P. Morgan** | [Oracle Candidate Experience CX_1001](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001) · filter Dubai + São Paulo + payments/digital | Dubai · São Paulo |
| **BBVA** | Workday / bbva careers (already in pipeline) | Dubai/UAE · Spain · LatAm |
| **Itaú Unibanco** | [itaú carreiras](https://www.itau.com.br/carreiras) · LinkedIn | São Paulo · Brazil |
| **Bradesco** | Bradesco careers / LinkedIn | São Paulo · Brazil |
| **BTG Pactual** | carreiras.btgpactual.com (inbound + public) | São Paulo |
| **Santander** | Santander careers / Openbank digital units | São Paulo · Spain |
| **Banco do Brasil / Caixa** | Only if digital/payments/transformation titled | Brazil |

Also monitor: **HSBC**, **Citi**, **Goldman** (transaction banking / payments), **Standard Chartered** (MENA payments) when queries surface relevant titles.

### Role families to **include** (bank context)

- Payments / treasury & cash management **strategy, product, delivery, transformation** (not quota-carrying sales)
- Digital banking / innovation economy **program, operations, partnerships** (client advisory only if strategic, not hunter)
- LATAM or EMEA **payments rails**, embedded finance, commercial banking **product**
- Crypto / digital assets / stablecoin **institutional** (bank-led, not retail trading)
- Corporate development / strategy / BizOps on **digital or payments** P&L
- Operations transformation / digital ops (validate scope — see BTG pattern)

### Role families to **exclude or penalize** (even at good banks)

- Relationship Sales / **Payments sales** / RM / hunter-farmer corporate sales
- Pure coverage banker, KYC ops, credit analyst, wealth RM
- Generic VP titles with no JD — verify function first

### Banking seniority: inflated VP titles

In **investment and commercial banking**, **Vice President** is often **inflated** vs tech/fintech:

- May map to **Manager / Senior Manager / Director-equivalent IC or small-team lead**, not true executive VP.
- **Do not auto-reject** VP bank roles at 10+ years if scope is delivery, product, or transformation — **read the JD**.
- **Do reject or score low** VP **sales** roles regardless of inflation (wrong function).
- At Stage 1 / PROMOTE: note *"VP inflation possible — validate level on recruiter screen"* for delivery/product/strategy bank roles.

### Discovery process (banks)

1. **Company careers** — filter by location (Dubai/UAE · São Paulo/Brazil) + keywords: `payments`, `digital`, `treasury`, `rails`, `innovation economy`, `transformation`, `strategy`, `product delivery`.
2. **J.P. Morgan** — Oracle CX API/browse; job IDs change — store full URL + job ID per row.
3. **BBVA / Itaú / Bradesco** — Workday or local ATS; LinkedIn as lead only → confirm on official site.
4. **Same company, multiple roles** — create **one discovery row per role**; at PROMOTE create **one Application file per role**; compare scores (higher fit first for apply priority).
5. **RUN_DISCOVERY rotation** — **Itaú** and **Bradesco** are **mandatory daily** (see below). Weekly rotation alternates **JPM / BBVA / Santander** with fintech rotation and **crypto/stablecoin cluster** (Brex · Coinbase · Circle · Binance + peers — SP + remote).

## Crypto / stablecoin infrastructure

**Discovery geos (priority order):** **São Paulo / Brazil office** → **Remote (Brazil or global)** → Dubai / UAE (secondary for crypto cluster — many roles are US-remote or MEA-remote).

Examples (scan on **weekly crypto rotation** — see end of file):
- **Circle** (USDC / stablecoin infra)
- **Coinbase**
- **Binance**
- **Brex** (stablecoin monitoring on banking ops; also watch for Strategy/BizOps if posted)
- Tether
- Kraken
- Ripple
- Fireblocks
- Chainalysis
- OKX
- Bybit
- Paxos
- Gemini
- Blockchain.com (institutional)

For crypto, prioritize infrastructure, stablecoins, payments, custody, institutional digital assets, tokenization, on/off-ramp, blockchain analytics and cross-border payments.

**Include** when title matches target role families (Strategy, S&O, BizOps, Corp Dev, Partnerships, Payments Strategy) even if company is crypto-native.

**Penalize / usually skip** (PROMOTE for intel only unless exceptional):
- Banking operations **transaction monitoring** / control ops team lead (e.g. Brex Manager, Banking Operations — stablecoin rails but wrong function)
- Compliance-only, KYC ops, pure engineering, retail support, community/growth

Avoid retail trading, token marketing, community growth, gambling-like crypto, or roles without institutional/business substance.

---

# Discovery Sources

## Preferred sources

- Company career pages
- Greenhouse
- Lever
- Ashby
- Workable
- Wellfound
- Welcome to the Jungle / Otta, if relevant
- Google Jobs
- Fintech job boards
- Recruiter messages
- LinkedIn manual search and saved alerts

## LinkedIn caution

LinkedIn should initially be used manually or through saved alerts.

Avoid:
- aggressive scraping
- logged-in automation
- tools that risk account restriction
- suspicious browser extensions

---

# Pre-Screening Logic

A role should enter `opportunities_tracker.md` if it meets enough of the following:

## Strong positive signals

- Target geography: Dubai / UAE or São Paulo / Brazil
- Target seniority: Manager / Senior Manager or equivalent
- Target role family
- Target company or strong adjacent company
- Strong fintech/payments/platform/crypto-infra relevance
- Strong brand value
- Strategic or operator exposure
- Referral or recruiter path exists
- Role could improve global optionality
- Role has useful market intelligence value

## Do not filter on compensation

Do not reject opportunities at the discovery stage because compensation is unknown.

Compensation should be marked as:
- Not disclosed
- To validate later

Nicolas will filter compensation manually during application/interview decisioning.

## Add when uncertain

When uncertain, add to candidates with `Need more info`.

The discovery layer should avoid missing good opportunities. Deep analysis belongs in `Career/Applications/`.

---

# Candidate Decision Labels

| Decision | Meaning |
|---|---|
| Process now | Link validated; ready for **PROMOTE** this week |
| Promoted | PROMOTE run complete — Stage 1 + tracker updated |
| Monitor | Interesting but not urgent |
| Need more info | Missing key information before decision |
| Ignore | Not worth processing |
| Already processed | Already exists in Career/Applications |
| Duplicate | Duplicate of another candidate |

## Link status (per row)

| Link status | Meaning |
|---|---|
| Live | Confirmed on company ATS or official careers page |
| Stale | Listing closed, expired, or removed |
| Aggregator | Third-party or LinkedIn mirror — confirm on official site before PROMOTE |
| Unknown | Link missing, broken, or posting not found on official careers |

## Queue rule

- **Weekly Top 3** in Discovery Notes = working queue for the week.
- Set **`Process now`** only when Link status is **Live** (or aggregator verified) and ready to PROMOTE this week.
- Company-level **no target role** signals (e.g. careers page scanned, no S&O title) → **Parking Lot**, not candidate table rows.

---

# Processing Threshold

Move a candidate from Discovery to Applications when:
- It is in Dubai / UAE or São Paulo / Brazil and fits a target role family
- It is at a target company
- It is time-sensitive
- There is a referral or recruiter path
- It has strong brand/geography/role relevance
- It deserves a full opportunity file
- It may become an actual application

Do not over-process low-quality roles.

---

# Output

The output of this workflow is an updated:

```text
Career/opportunities_tracker.md
```

## Companies Checked Report (required every run)

Every **RUN_DISCOVERY** must end with a **Companies Checked Report** in the **chat reply** (not only in the tracker file). The user should see at a glance which employers were touched this run, **which geography filter was applied**, and what happened.

### Geo checked column (required)

Every company row must include **Geo checked** — exactly one of:

| Value | Meaning |
|---|---|
| **Dubai** | This run applied Dubai/UAE (or UAE-wide) location filter only |
| **SP** | This run applied São Paulo/Brazil location filter only |
| **Both** | This run applied **both** filters (two passes or one API filtered per geo) |

**Rules:**

1. **Dual-presence companies** — when the company actually hires target role families in **both** Dubai and SP/Brazil, **Geo checked must be `Both`** for that company this run. Do not mark `Both` if you only searched one geo.
2. **Single-region companies** — use `Dubai` or `SP` only; never mark `Both`. Optionally note in Outcome: *"Dubai N/A — Brazil-only employer"* or *"SP N/A — UAE-only board"*.
3. **Mandatory scans** use their canonical geo for the deep pass, but dual-presence employers still need **`Both`** on the same calendar day if they appear in rotation (see table below). Mandatory-only minimum:
   - **Nubank** → `SP`
   - **Checkout.com** → `Dubai` (mandatory pass); full company check → `Both`
   - **Adyen** → `SP` (mandatory pass); full company check → `Both`
   - **Revolut** → `Both` (mandatory pass = **Brazil · Spain** Strategy & Ops / Revenue — see Revolut mandatory section; UAE optional unless full rotation)
   - **Itaú Unibanco** → `SP`
   - **Bradesco** → `SP`
4. **Weekly balance:** Target **~75% SP / 25% Dubai** company-checks across the week (mandatory + rotation). SP gaps take priority (e.g. Stripe SP not scanned → next run **SP before** another Dubai-only pass). Dubai still verified for live pipeline rows (Visa · BBVA · Checkout watchlist).

### Dual-presence companies (`Both` required when checked)

Apply **Both** when scanning these (non-exhaustive — update as boards change):

Revolut · Stripe · dLocal · Wise · Airwallex · Visa · Checkout.com (full pass) · Adyen (full pass) · EBANX · PayPal · Mastercard · Mercado Livre · Mercado Pago · BTG Pactual · **Brex** · **Coinbase** · Circle · Fireblocks · Ziina · Getnet (if strategy titles appear)

### Single-region companies (never `Both`)

| Geo checked | Examples |
|---|---|
| **SP** | Nubank · Stone · CloudWalk · PicPay (when scanned) |
| **Dubai** | Tabby · Tamara · Careem · Ripple (MEA watch) |

### What to include

1. **Scan date** and geographies (Dubai/UAE · São Paulo/Brazil).
2. **Full list of companies checked** this run — one row per company, in scan order:
   - Company name
   - **Geo checked** — `Dubai` | `SP` | `Both`
   - Source used (e.g. Greenhouse API, Ashby API, Lever, careers page, aggregator confirm)
   - Outcome in one phrase (e.g. *no target role*, *7913587 live*, *repost watch*, *stale confirmed*, *parking lot — no S&O*)
3. **Mandatory scans** — always six rows: Nubank · Checkout.com · Adyen · Revolut · Itaú Unibanco · Bradesco (with Geo checked per rules above).
4. **Rotation / backlog** from Weekly Discovery Notes **Next scan** — same table; dual-presence → `Both`.
5. If a company was **not** checked this run, do not list it (avoid false completeness).
6. **Geo coverage summary** (one line after the table): e.g. *"Dual-geo: 4/6 checked with Both this run · Single-geo: 8 Dubai/SP passes · Gap: Stripe SP not scanned today."*

### Report format (chat)

Use a markdown table. Example:

| Company | Geo checked | Source | Outcome |
|---|---|---|---|
| Nubank | SP | Greenhouse API | No SPG/Corp Dev/S&O SP; 7577975 still closed |
| Checkout.com | Dubai | Ashby API | No RevOps/Commercial Strategy Dubai (mandatory pass) |
| Adyen | SP | Greenhouse API | 7913587 Alliances SP — **Live** |
| Stripe | Both | stripe.com + location filters | Dubai: no Manager S&O; SP: no Brazil S&O posting |
| Tamara | Dubai | Greenhouse API | No partnerships Manager Dubai; stale re-confirmed |
| … | … | … | … |

Also log under **Weekly Discovery Notes → Companies checked** in `opportunities_tracker.md`:

```text
Company | Geo | Outcome (short)
```

### Snippet alignment

`AI/snippets/RUN_DISCOVERY.md` §2 (geo rules) and §6 **Reply in chat** require this report as the **first substantive block** after scan date (before new candidates / Top 3).

---

Each candidate should include:
- Date found
- Company
- Role
- Seniority signal
- Location
- Source
- Link
- **Link status** — `Live` | `Stale` | `Aggregator` | `Unknown`
- Initial fit
- Decision
- Reason
- Next action

---

# Link verification (mandatory every run)

**RUN_DISCOVERY is incomplete without re-checking live/stale status on all actionable links.**

## Step 0 — verification script

```bash
python AI/.cursor/hooks/verify_discovery_links.py
```

Runs before company rotation. Covers: Nubank · Checkout · Adyen · Revolut · Visa · JPM (2) · Mercado Pago (2) · EBANX · Brex 8580566002 (intel) · archived watchlist reposts.

Exit code **1** = unresolved checks — agent must apply fallbacks from `Career/Opportunities/target_search_queries.md` → **Link verification registry** before finishing.

## What must be re-verified every scan

1. **Mandatory companies** (Nubank, Checkout, Adyen, Revolut, Itaú, Bradesco) — § snippets RUN_DISCOVERY 2b–2g
2. **Applications pipeline — Mapped/Applied** with live posting dependency (Visa, Adyen, JPM, BBVA when in pipeline)
3. **Weekly Top 3** queue rows in `opportunities_tracker.md`
4. **Watchlist — Archived** repost watch (Nubank SPG, Checkout RevOps)
5. **All discovery rows** where Decision is `Monitor` or `Process now` and Link status is not `Stale`

Pipeline roles are **not exempt** — discovery verifies posting status even when Stage 1 exists in Applications.

## Source fallback protocol

| Primary fails | Use next |
|---|---|
| HTML 403 (Revolut, PayPal) | WebFetch · JSON API · web search on official careers |
| careers-meli 404 | `mercadolibre.eightfold.ai` API · `careers-meli.mercadolibre.com/pt/jobs` |
| Workday HTML empty | `/wday/cxs/{tenant}/{site}/job/{slug}` JSON |
| Greenhouse EU 404 | `boards-api.greenhouse.io` then `boards.eu.greenhouse.io` |
| LinkedIn-only lead | Eightfold or official ATS; stay `Aggregator` until confirmed |

**Rule:** Do not mark scan complete with `Unknown` on mandatory or pipeline rows without exhausting fallbacks.

Registry detail: `Career/Opportunities/target_search_queries.md` → **Link verification registry**.

---

# Future Automation Ideas

Potential future automation:
- ~~Monitor Greenhouse/Lever/Ashby boards for target companies~~ → **partial:** `verify_discovery_links.py`
- Parse job descriptions
- Extract role family, seniority, location and source
- Generate preliminary fit score
- Detect duplicates
- Update candidate opportunities automatically
- Create weekly job discovery report
- Surface urgent opportunities
- Feed selected opportunities into `AI/job_search_workflow.md`

---

# Operating Principle

Keep this layer lightweight.

Discovery should be fast, broad and low-friction.

Deep analysis belongs in `Career/Applications/`, not here.

Do not reject promising roles too early. Add them as candidates and let the full workflow decide later.

---

# Mandatory Daily Company Scan: Nubank

**Every RUN_DISCOVERY run must include Nubank**, regardless of weekly rotation.

Nubank is a tier-1 LatAm target (SPG / Corp Dev / S&O). Postings close quickly and the careers URL structure is unreliable — use Greenhouse as the canonical source.

## Scan procedure

1. Fetch: `https://boards-api.greenhouse.io/v1/boards/nubank/jobs?content=true`
2. Filter for target role families in **São Paulo / Brazil** (see Target Opportunity Types).
3. Priority title keywords: `Strategic Partnership`, `SPG`, `Corporate Development`, `Strategy`, `Business Operations`, `BizOps`, `Chief of Staff`, `Product Operations Manager`.
4. On match → add/update candidate row; set Link status `Live`.
5. On no match → note in Weekly Discovery Notes; keep archived SPG row (`7577975`) as `Stale`.

Canonical board: https://job-boards.greenhouse.io/nubank

Detailed queries: `Career/Opportunities/target_search_queries.md` → **Nubank — mandatory daily scan**.

---

# Mandatory Daily Company Scan: Checkout.com

**Every RUN_DISCOVERY run must include Checkout.com**, regardless of weekly rotation.

RevOps & Commercial Strategy Partner (Dubai, score 4.75) is **archived** — posting removed Oct 2025. Use Ashby as canonical source.

## Scan procedure

1. Fetch: `https://ashby-careers-checkout-production.up.railway.app/api/jobs`
2. Filter Dubai/UAE for: `RevOps`, `Revenue Operations`, `Commercial Strategy`, `GTM` (strategy scope).
3. On repost → flag for Watchlist → Pipeline reactivation.
4. On no match → note in Weekly Discovery Notes.

Canonical board: https://www.checkout.com/jobs

Detailed queries: `Career/Opportunities/target_search_queries.md` → **Checkout.com — mandatory daily scan**.

---

# Mandatory Daily Company Scan: Adyen

**Every RUN_DISCOVERY run must include Adyen**, regardless of weekly rotation.

Senior Alliances Partner Manager (São Paulo, score 4.45) is **mapped — awaiting referral**; posting may still be live on Greenhouse. Also watch for new alliances/strategy SP roles.

## Scan procedure

1. Fetch: `https://boards-api.greenhouse.io/v1/boards/adyen/jobs?content=true`
2. Filter São Paulo/Brazil for: `Alliances`, `Partnerships`, `Strategy`, `Corporate Development`.
3. Confirm job 7913587 status each scan.
4. On new target role → add discovery row; flag if current mapped role closes.

Canonical board: https://job-boards.greenhouse.io/adyen

Detailed queries: `Career/Opportunities/target_search_queries.md` → **Adyen — mandatory daily scan**.

---

# Mandatory Daily Company Scan: Revolut (Brazil · Spain)

**Every RUN_DISCOVERY run must include Revolut**, regardless of weekly rotation.

Dubai S&O Revenue track **rejected post-screen (2026-06-06)** — geo pivot under consideration. Mandatory pass focuses on **Brazil** and **Spain** for the same role family (Strategy & Operations / Revenue), not UAE unless doing a full dual-presence rotation pass.

## Scan procedure

1. **Careers page (primary):** https://www.revolut.com/careers — filter or search Operations / Strategy.
2. **Known postings to verify each scan:**
   - Strategy & Operations Manager — job ID `e4b7c063-41c5-4afc-8031-2323db04b9f7` — Remote: **Brazil · Spain** · Office: São Paulo · Madrid (among others)
     - Brazil: https://www.revolut.com/en-BR/careers/position/strategy-operations-manager-e4b7c063-41c5-4afc-8031-2323db04b9f7/
     - Global: https://www.revolut.com/careers/position/strategy-operations-manager-e4b7c063-41c5-4afc-8031-2323db04b9f7/
   - Operations Manager (Revenue) — job ID `6970b9e3-e515-4b76-804b-9df9ce31296d` — Office: **São Paulo · Madrid** · Remote: Brazil · Spain · Portugal (among others)
3. **Title filters (Brazil · Spain only on mandatory pass):**
   - `Strategy & Operations` · `Strategy and Operations` · `Operations Manager` + `Revenue`
   - `Business Operations` · `BizOps` · `Revenue Operations` (strategy/ops scope, not pure sales)
4. **Location filters:** Remote **Brazil** · Office **São Paulo** · Remote **Spain** · Office **Madrid** · **Barcelona** (if listed).
5. **Exclude on mandatory pass:** pure sales, account management, compliance-only, analyst-below-band.
6. **On match (Brazil or Spain live):** add/update discovery row; Link status `Live`; Decision `Process now` or `Monitor`; flag in chat — suggest geo-specific PROMOTE or reply to Matt (recruiter) before duplicate ATS apply.
7. **On no match:** log in Weekly Discovery Notes: *"Revolut scan: no S&O/Revenue Brazil or Spain"* — keep Dubai rejected row in applications tracker unchanged.
8. **Relationship to applications:** Dubai process closed — `revolut_strategy_operations_manager_dubai_2026-05-25.md`. New Brazil/Spain rows are **separate discovery candidates** until PROMOTE creates geo-specific Stage 1 files.

**Companies Checked Report — Geo checked:** `Both` with outcome clarifying *Brazil · Spain S&O/Revenue pass*.

Detailed queries: `Career/Opportunities/target_search_queries.md` → **Revolut — mandatory daily scan**.

---

# Mandatory Daily Company Scan: Itaú Unibanco

**Every RUN_DISCOVERY run must include Itaú Unibanco**, regardless of weekly rotation.

Tier-1 LatAm bank — digital / payments / strategy side. Careers ATS is local (not Greenhouse); LinkedIn is lead-only → confirm on official site.

## Scan procedure

1. **Careers page (primary):** https://www.itau.com.br/carreiras — filter or search São Paulo / Brazil.
2. **Title filters:** `Strategy` · `Corporate Development` · `Business Operations` · `BizOps` · `Payments` · `Digital` · `Transformation` · `Innovation` · `Treasury` · `Product` (strategy/delivery scope).
3. **Location filters:** São Paulo · Brazil.
4. **Exclude:** Relationship Sales / RM / hunter-farmer corporate sales · pure credit analyst · wealth RM · analyst-below-band unless Senior Associate in Corp Dev context.
5. **VP inflation:** read JD on delivery/product/strategy bank roles — do not auto-reject VP on seniority alone; reject VP sales.
6. **On match (Manager+ target family):** add/update discovery row; Link status `Live`; Decision `Process now` or `Monitor`.
7. **On no match:** log in Weekly Discovery Notes: *"Itaú scan: no Manager S&O/Corp Dev/payments strategy SP"* — update **Parking Lot** if only analyst-level strategy/product titles visible.

**Companies Checked Report — Geo checked:** `SP`.

---

# Mandatory Daily Company Scan: Bradesco

**Every RUN_DISCOVERY run must include Bradesco**, regardless of weekly rotation.

Tier-1 LatAm bank — digital / payments / strategy side. Confirm postings on official careers portal; LinkedIn is lead-only.

## Scan procedure

1. **Careers page (primary):** Bradesco careers portal — filter or search São Paulo / Brazil (also check digital/innovation units if listed separately).
2. **Title filters:** `Strategy` · `Corporate Development` · `Business Operations` · `BizOps` · `Payments` · `Digital` · `Transformation` · `Innovation` · `Treasury` · `Product` (strategy/delivery scope).
3. **Location filters:** São Paulo · Brazil.
4. **Exclude:** Relationship Sales / RM / hunter-farmer corporate sales · pure credit analyst · wealth RM · analyst-below-band.
5. **VP inflation:** read JD on delivery/product/strategy bank roles — do not auto-reject VP on seniority alone; reject VP sales.
6. **On match (Manager+ target family):** add/update discovery row; Link status `Live`; Decision `Process now` or `Monitor`.
7. **On no match:** log in Weekly Discovery Notes: *"Bradesco scan: no Manager S&O/Corp Dev/payments strategy SP"* — update **Parking Lot** if company-level no-role signal.

**Companies Checked Report — Geo checked:** `SP`.

---

# Weekly Rotation: Crypto / Stablecoin + Brex (SP + Remote)

**Not mandatory daily** — include **1–2 companies from this cluster per RUN_DISCOVERY** when a rotation slot is available (alternate with bank/fintech rotation). User preference: **São Paulo office** or **remote** (Brazil or global); Dubai/MENA only as secondary pass for dual-geo employers.

## Why this cluster

Nicolas's north star includes **fintech / payments / crypto-infrastructure operator** paths (stablecoins, rails, institutional digital assets). These employers post infrequently for Strategy/S&O but are high signal when they do. **Brex** confirmed SP hub (Banking Operations + stablecoin monitoring — see promoted intel row `brex_manager_banking_operations_saopaulo_2026-06-11.md`).

## Rotation roster (pick 1–2 per run; full roster ~every 2 weeks)

| Company | Geo focus | Canonical source | ATS / API |
|---|---|---|---|
| **Brex** | SP office · remote US | [brex.com/careers](https://www.brex.com/careers) | Greenhouse board `brex` · `boards-api.greenhouse.io/v1/boards/brex/jobs` |
| **Coinbase** | Remote global · Brazil occasional | [coinbase.com/careers](https://www.coinbase.com/careers) | Greenhouse `coinbase` |
| **Circle** | Remote global · UAE/MENA | [careers.circle.com](https://www.careers.circle.com) | Careers site (confirm ATS); aggregators → official only |
| **Binance** | Remote global | [binance.com/en/careers](https://www.binance.com/en/careers) | Binance careers portal |
| **Kraken** | Remote · Brazil occasional | [jobs.lever.co/kraken](https://jobs.lever.co/kraken) | Lever API |
| **Fireblocks** | Dubai MENA · Brazil sales | [fireblocks.com/careers](https://www.fireblocks.com/careers) | Greenhouse `fireblocks` |
| **Ripple** | Dubai MEA · remote | [ripple.com/careers](https://ripple.com/careers) | Ripple careers |
| **Tether** | Remote global | tether.to careers / LinkedIn | Confirm on official site |
| **OKX** · **Bybit** | Remote · UAE | Official careers pages | Often aggregator-only |
| **Paxos** · **Gemini** | Remote US/global | Official careers | Greenhouse or Lever varies |

## Scan procedure (each company in rotation)

1. **Fetch canonical API/board** when available (Greenhouse/Lever first).
2. **Location filters (priority order):**
   - Office: **São Paulo** · **Brazil**
   - Remote: **Brazil** · **Remote - Brazil** · **Remote - Americas**
   - Remote global (US/EU) — include if target role family matches and remote policy is realistic
3. **Title filters:** `Strategy` · `Strategy & Operations` · `Business Operations` · `BizOps` · `Corporate Development` · `Strategic Partnerships` · `Alliances` · `Payments Strategy` · `Market Development` · `Chief of Staff` · `Strategic Finance` · `Commercial Strategy` (non-quota).
4. **Stablecoin / rails keywords (bonus signal):** `stablecoin` · `USDC` · `digital assets` · `institutional` · `on-chain` · `custody` · `tokenization`.
5. **Exclude:** pure compliance/KYC ops · engineering · support · sales AE · **banking ops transaction monitoring** (intel only) · analyst-below-band.
6. **On match (Manager+ target family):** add discovery row · Link status `Live` · Decision `Process now` or `Monitor` · flag in chat.
7. **On no match:** log in Weekly Discovery Notes → Parking Lot or one-line outcome; do not add pseudo-rows.

## Brex — known SP signal (verify each rotation pass)

```text
Manager, Banking Operations — job 8580566002 — São Paulo (hybrid M/W/Th)
https://www.brex.com/careers/8580566002?gh_jid=8580566002
```

- **Already PROMOTED** (2026-06-11) — score 3.35 · **do not apply** (control ops + comp below floor).
- Still **re-verify Link status** on rotation passes; if **Strategy / BizOps / Partnerships** SP role appears → new row + PROMOTE.

## Companies Checked Report — Geo checked

| Company type | Geo checked |
|---|---|
| Brex · Coinbase (SP + remote pass) | `SP` (default rotation) or `Both` if remote-US + SP both filtered |
| Circle · Ripple · Fireblocks (MEA) | `SP` or `Both` if Dubai/MENA also searched |
| Binance · OKX · Bybit (remote-only) | `SP` if Brazil remote filter applied; note *remote-global* in Outcome if no geo filter |

Detailed queries and registry: `Career/Opportunities/target_search_queries.md` → **Crypto / Stablecoin — weekly rotation**.

---

# Weekly Rotation: Big Tech — São Paulo / Brazil (payments-adjacent)

**Not mandatory daily** — include **1 company per RUN_DISCOVERY** when a rotation slot is open (alternate with crypto/bank/fintech rotation). User geo priority: **São Paulo / Osasco / Brazil corporate offices** + **remote Brazil** when listed.

## Why this cluster

Big tech brands (Amazon, Google, Meta, Apple) can host **Strategy, BizOps, Partnerships, Product Strategy, Payments** roles that strengthen global platform credibility — but most Brazil postings are **logistics, ads sales, or local operations**. Discovery must **filter aggressively** for fintech-adjacent scope.

## Rotation roster (pick 1 per run; full roster ~every 2–3 weeks)

| Company | Geo focus | Canonical source | What to include |
|---|---|---|---|
| **Amazon** | Osasco · SP · RJ · Brazil | [amazon.jobs](https://www.amazon.jobs) — filter Brazil + keywords | **Payments Strategy** · **BizOps** · **Partner Strategy** (platform/payments) · **Amazon Pay** · Product Strategy · Corp Dev-adjacent · Finance strategy **not** Last Mile logistics |
| **Google** | SP · Brazil remote | [careers.google.com](https://careers.google.com) | Payments · Wallet · Partnerships · Strategy · BizOps Brazil |
| **Meta** | SP · remote | [metacareers.com](https://www.metacareers.com) | WhatsApp payments/commerce · Partnerships · Monetization strategy · BizOps |
| **Apple** | SP when listed | [jobs.apple.com](https://jobs.apple.com) | Apple Pay · Wallet · partnerships (rare SP) |
| **Microsoft** | SP · remote | [careers.microsoft.com](https://careers.microsoft.com) | Cloud/fintech partnerships · strategy Brazil postings |
| **Stripe** | SP (rotation) | stripe.com/jobs | Already in fintech rotation — SP pass priority |

## Amazon — scan procedure (high false-positive risk)

1. **Search:** `amazon.jobs` → Location **Brazil** / **São Paulo** / **Osasco** + keywords: `Strategy` · `Business Operations` · `Payments` · `Partner` · `Product Strategy` · `Corporate Development` · `Finance Strategy`.
2. **Include:** Roles in **Amazon Pay**, marketplace payments, partner **platform** strategy, BizOps with cross-functional business ownership.
3. **Exclude / penalize (PROMOTE for intel only):**
   - **Last Mile** · **Logistics** · **Fulfillment** · **Delivery** partner ops — e.g. job **10408004** Pricing & Payments Manager (EDSP/AMPL/AMXL) — logistics partner pricing/disputes, not fintech payments (`amazon_pricing_payments_manager_partner_strategy_brazil_2026-06-11.md` · score **3.40** · do not apply).
   - **Include example:** job **10404183** Sr Program Manager Payment Business Operation LATAM — schemes, acquirers, Pix, partnership program (`amazon_sr_program_manager_payment_business_operations_latam_saopaulo_2026-06-11.md` · score **4.50**).
   - Warehouse / FC operations · Seller Support · pure Account Executive / sales hunter.
4. **On match (Manager+ target family):** discovery row · Link status `Live` · flag in chat.
5. **On no match:** Parking Lot one-liner · do not add pseudo-rows.

## Other big tech — scan procedure

- Filter **Brazil / São Paulo** on official careers portals.
- Title filters same as Amazon **include** list.
- Exclude: ads sales, content policy, trust & safety ops, generic CS, logistics unless strategy-titled with business ownership.

## Companies Checked Report — Geo checked

**SP** for all companies in this cluster (Brazil-only employers on rotation pass).

Detailed queries: `Career/Opportunities/target_search_queries.md` → **Big Tech — weekly rotation (SP)**.
