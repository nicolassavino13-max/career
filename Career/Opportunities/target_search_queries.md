# Target Search Queries

## Objective

Store reusable search queries for discovering relevant job opportunities.

This file feeds the Job Discovery Workflow.

Use these queries manually first. Later, selected queries may become semi-automated or automated.

Primary geographies: **São Paulo / Brazil (75%)** · **Dubai / UAE (25%)** — discovery rotation weighted SP-first (2026-06-10).

Do not use compensation as a discovery filter.

---

# Core Search Logic

Search by combining:

```text
role keyword + seniority keyword + industry keyword + geography
```

Examples:

```text
"Strategy Manager" fintech Dubai
"Corporate Development Manager" payments "São Paulo"
"Senior Manager" "Business Operations" fintech UAE
"Strategic Partnerships Manager" payments Brazil
```

---

# Seniority Keywords

Use these to catch Manager / Senior Manager-equivalent roles even when titles vary.

## Primary seniority keywords

```text
Manager
"Senior Manager"
"Sr Manager"
"Sr. Manager"
```

## Equivalent seniority keywords

```text
Lead
"Strategy Lead"
"Operations Lead"
"Business Operations Lead"
"Partnerships Lead"
"Growth Lead"
"Expansion Lead"
Principal
"Associate Director"
"Senior Associate"
"Head of Strategy"
"Head of Partnerships"
"General Manager"
"GM"
"Chief of Staff"
```

## Use caution

Use these only when company and role are highly relevant:

```text
Director
"Country Manager"
"Regional Manager"
"Head of"
```

## Deprioritize

Exclude or deprioritize:

```text
Analyst
"Junior"
Intern
Coordinator
"BDR"
"SDR"
"Account Executive"
"Account Manager"
"Customer Success"
"Relationship Manager"
"Sales Executive"
"Sales Representative"
```

---

# Priority Role Queries

## Strategy & Operations / BizOps

```text
"Strategy & Operations Manager" fintech Dubai
"Strategy and Operations Manager" fintech UAE
"Strategy Operations Manager" payments Dubai
"Senior Strategy & Operations Manager" fintech Dubai
"Business Operations Manager" fintech Dubai
"Senior Business Operations Manager" fintech UAE
"BizOps Manager" fintech Dubai
"BizOps Manager" fintech "São Paulo"
"Strategy Lead" fintech Dubai
"Business Operations Lead" payments UAE
"Strategic Operations Manager" fintech Brazil
"Operations Strategy Manager" fintech São Paulo
```

## Revenue / GTM / Commercial Strategy

```text
"Revenue Strategy Manager" fintech Dubai
"Revenue Strategy Manager" fintech "São Paulo"
"GTM Strategy Manager" fintech UAE
"GTM Strategy Manager" payments Brazil
"Go-to-Market Strategy Manager" fintech Dubai
"Commercial Strategy Manager" payments UAE
"Commercial Strategy Manager" fintech São Paulo
"Growth Strategy Manager" fintech Dubai
"Growth Strategy Manager" fintech Brazil
"Market Strategy Manager" payments Dubai
```

## Corporate Development / Strategic Finance

```text
"Corporate Development Manager" fintech Dubai
"Corporate Development Manager" fintech São Paulo
"Corp Dev Manager" fintech UAE
"Corp Dev Manager" payments Brazil
"Senior Corporate Development Manager" fintech Dubai
"Strategic Finance Manager" fintech Dubai
"Strategic Finance Manager" fintech São Paulo
"Senior Strategic Finance Manager" payments Brazil
"Investment Manager" fintech corporate development Dubai
"Investment Manager" fintech São Paulo
"M&A Manager" fintech Brazil
"M&A Manager" payments Dubai
```

## Partnerships / Alliances / Market Development

```text
"Strategic Partnerships Manager" payments Dubai
"Strategic Partnerships Manager" payments São Paulo
"Senior Strategic Partnerships Manager" fintech UAE
"Partnerships Manager" fintech Dubai
"Partnerships Manager" payments Brazil
"Alliances Manager" payments Brazil
"Alliances Manager" fintech Dubai
"Partner Strategy Manager" fintech São Paulo
"Ecosystem Partnerships Manager" payments Dubai
"Market Development Manager" payments UAE
"Market Development Manager" fintech São Paulo
"Business Development Manager" fintech strategy Dubai
"Business Development Manager" payments strategy Brazil
```

## Payments / Fintech Strategy

```text
"Payments Strategy Manager" Dubai
"Payments Strategy Manager" São Paulo
"Fintech Strategy Manager" UAE
"Fintech Strategy Manager" Brazil
"Digital Payments Strategy" Brazil
"Digital Payments Strategy" Dubai
"Payment Partnerships Manager" São Paulo
"Payment Partnerships Manager" Dubai
"Financial Infrastructure Strategy" UAE
"Financial Infrastructure Strategy" Brazil
"Cross-border Payments Strategy" Dubai
"Stablecoin Strategy" Dubai
"Stablecoin Strategy" Brazil
```

## Product / Platform Strategy

```text
"Product Strategy Manager" fintech Dubai
"Product Strategy Manager" fintech São Paulo
"Platform Strategy Manager" payments Dubai
"Platform Strategy Manager" fintech Brazil
"Product Operations Manager" fintech Dubai
"Product Operations Manager" fintech São Paulo
"Payments Product Strategy" UAE
"Digital Wallet Strategy Manager" Brazil
"Wallet Strategy Manager" fintech Dubai
```

## Chief of Staff / Strategic Projects / GM-track

```text
"Chief of Staff" fintech Dubai
"Chief of Staff" fintech São Paulo
"Founder Office" fintech Dubai
"CEO Office" fintech UAE
"CEO Office" fintech São Paulo
"Strategic Projects Manager" fintech Dubai
"Strategic Projects Manager" fintech São Paulo
"General Manager" fintech Dubai
"GM" fintech "São Paulo"
"Expansion Manager" fintech UAE
"Expansion Manager" fintech Brazil
```

---

# Target Company Queries

## Global Fintech / Payments

```text
Revolut "Strategy & Operations" Dubai
Revolut "Strategy & Operations" Brazil
Revolut "Strategy & Operations" Spain
Revolut "Strategy & Operations" Madrid
Revolut "Revenue" "Strategy" Dubai
Revolut "Revenue" "Strategy" Brazil
Revolut "Revenue" "Strategy" Spain
Revolut "Operations Manager" Revenue São Paulo
Revolut "Operations Manager" Revenue Madrid
Revolut "Business Operations" São Paulo
Revolut "Business Operations" Spain

Stripe "Strategy" Dubai
Stripe "Business Operations" Dubai
Stripe "GTM Strategy" UAE
Stripe "Strategic Partnerships" Brazil
Stripe "Corporate Development" Brazil

Adyen "Strategy" São Paulo
Adyen "Partnerships" Brazil
Adyen "Alliances" São Paulo
Adyen "Commercial Strategy" Brazil
Adyen "Market Development" São Paulo

Checkout.com "Strategy" Dubai
Checkout.com "Business Operations" UAE
Checkout.com "Strategic Finance" Dubai
Checkout.com "Partnerships" Dubai

Wise "Strategy" Dubai
Wise "Business Operations" São Paulo
Wise "Expansion" UAE
Wise "Payments" Brazil

Airwallex "Strategy" UAE
Airwallex "Business Operations" Dubai
Airwallex "Partnerships" Dubai
Airwallex "Growth Strategy" UAE

PayPal "Corporate Development" Dubai
PayPal "Strategy" Brazil
PayPal "Payments Strategy" São Paulo
```

## Networks / Big Tech Payments

```text
Visa "Strategy Manager" Dubai
Visa "Market Development" UAE
Visa "Product Strategy" São Paulo
Visa "Strategic Partnerships" Brazil
Visa "Fintech" Dubai

Mastercard "Strategy Manager" Dubai
Mastercard "Market Development" UAE
Mastercard "Services" "Strategy" São Paulo
Mastercard "Strategic Partnerships" Brazil
Mastercard "Fintech" Dubai

Amazon Pay "Business Development Manager" Dubai
Amazon Pay "Strategy" São Paulo
Amazon "Payments" "Strategy Manager" Brazil
Amazon "Business Operations" São Paulo
Amazon "Business Operations" Osasco
Amazon "Partner Strategy" Brazil
Amazon "Product Strategy" Brazil
Amazon "Fintech" "Business Operations" Dubai

# Exclude on discovery — logistics false positives (title says Payments but scope is Last Mile)
# Amazon "Last Mile" Brazil
# Amazon "Logistics" "Pricing" Brazil
# Amazon "EDSP" OR "AMPL" OR "AMXL"

Google Payments "Strategy" São Paulo
Google Payments "Partnerships" Brazil
Google "Fintech" "Strategy" Dubai
Google "Payments" "Business Operations" Brazil

Meta "Payments" "Strategy" Brazil
TikTok "Strategy Manager" São Paulo
TikTok "Commerce" "Strategy" Dubai
```

## LatAm Platforms / Fintech

```text
Mercado Livre "Corporate Development" São Paulo
Mercado Livre "Strategy" São Paulo
Mercado Livre "Strategic Finance" São Paulo
Mercado Livre "Partnerships" São Paulo
Mercado Pago "Strategy" São Paulo
Mercado Pago "Business Operations" São Paulo
Mercado Pago "Corporate Development" Brazil
Mercado Pago "Payments Strategy" Brazil

Nubank "Strategy" São Paulo
Nubank "Business Operations" Brazil
Nubank "BizOps" Brazil
Nubank "Strategic Finance" São Paulo
Nubank "Corporate Development" Brazil
Nubank "Product Strategy" Brazil

Stone "Strategy" São Paulo
Stone "Corporate Development" São Paulo
Stone "Strategic Finance" Brazil
Stone "Payments Strategy" Brazil

Pagar.me "Strategy" São Paulo
CloudWalk "Strategy" Brazil
CloudWalk "Business Operations" São Paulo
CloudWalk "Strategic Partnerships" Brazil

EBANX "Strategy" Brazil
EBANX "Business Operations" Brazil
EBANX "Payments Strategy" Brazil
EBANX "Strategic Partnerships" Brazil

dLocal "Strategy" Brazil
dLocal "Business Operations" Dubai
dLocal "Partnerships" Brazil
```

## Crypto / Stablecoin Infrastructure (SP + Remote primary · Dubai secondary)

```text
# São Paulo / Brazil office
Brex "Strategy" São Paulo
Brex "Business Operations" Brazil
Brex "Corporate Development" São Paulo
Coinbase "Strategy" Brazil
Coinbase "Business Operations" Brazil
Coinbase "Corporate Development" São Paulo
Circle "Partnerships" Brazil
Circle "Strategy" Brazil
Fireblocks "Strategy" São Paulo
Fireblocks "Business Operations" Brazil
Kraken "Strategy" Brazil
Kraken "Partnerships" Brazil
Binance "Strategy" Brazil

# Remote (Brazil · Americas · global)
Brex "Strategy" remote
Coinbase "Strategy" remote
Coinbase "Corporate Development" remote
Coinbase "Business Operations" remote
Circle "Strategy" remote
Circle "Stablecoin" "Strategy" remote
Circle "Business Operations" remote
Tether "Strategy" remote
Tether "Expansion" Brazil
Kraken "Strategy" remote
Kraken "Business Operations" remote
Binance "Strategy" remote
Binance "Business Operations" remote
Paxos "Strategy" remote
Gemini "Strategy" remote
OKX "Strategy" remote
Bybit "Strategy" remote

# Dubai / UAE (secondary — after SP + remote pass)
Circle "Strategy" Dubai
Circle "Business Operations" UAE
Circle "Stablecoin" "Strategy" Dubai
Coinbase "International Expansion" Dubai
Ripple "Strategy" Dubai
Ripple "Partnerships" UAE
Ripple "Payments Strategy" Dubai
Fireblocks "Strategy" Dubai
Fireblocks "Business Operations" UAE
Chainalysis "Strategy" Dubai
Chainalysis "Business Operations" UAE
Binance "Strategy" Dubai
Binance "Business Operations" UAE
Bybit "Strategy" UAE
OKX "Strategy" Dubai
Tether "Strategy" Dubai
Tether "Business Operations" UAE
```

---

# Geography-Specific Queries

## Dubai / UAE

```text
site:greenhouse.io "Dubai" "Strategy Manager" fintech
site:greenhouse.io "UAE" "Corporate Development Manager" fintech
site:lever.co "Dubai" "Business Operations Manager" fintech
site:lever.co "UAE" "Strategic Partnerships Manager" payments
site:jobs.ashbyhq.com "Dubai" "Strategy & Operations"
site:jobs.ashbyhq.com "UAE" "Revenue Strategy"
site:workable.com "Dubai" "Corporate Development" fintech

"Strategy Manager" fintech "Dubai"
"Senior Strategy Manager" fintech "UAE"
"Business Operations Manager" fintech "Dubai"
"Corporate Development Manager" fintech "UAE"
"Strategic Finance Manager" fintech "Dubai"
"Strategic Partnerships Manager" payments "UAE"
"Market Development Manager" payments "Dubai"
"Revenue Strategy Manager" fintech "UAE"
"Chief of Staff" fintech "Dubai"
```

## São Paulo / Brazil

```text
site:greenhouse.io "São Paulo" "Strategy Manager" fintech
site:greenhouse.io "Brazil" "Corporate Development Manager" fintech
site:lever.co "São Paulo" "Business Operations Manager" fintech
site:lever.co "Brazil" "Strategic Partnerships Manager" payments
site:jobs.ashbyhq.com "São Paulo" "Strategy & Operations"
site:jobs.ashbyhq.com "Brazil" "Revenue Strategy"
site:workable.com "São Paulo" "Corporate Development" fintech

"Strategy Manager" fintech "São Paulo"
"Senior Strategy Manager" fintech "Brazil"
"Business Operations Manager" fintech "São Paulo"
"Corporate Development Manager" fintech "Brazil"
"Strategic Finance Manager" fintech "São Paulo"
"Strategic Partnerships Manager" payments "Brazil"
"Market Development Manager" payments "São Paulo"
"Revenue Strategy Manager" fintech "Brazil"
"Chief of Staff" fintech "São Paulo"
```

## Secondary / opportunistic remote queries

Use less frequently than Dubai / São Paulo.

```text
"Strategy Operations Manager" fintech remote
"BizOps Manager" fintech remote
"Corporate Development Manager" fintech remote
"Strategic Finance Manager" fintech remote
"Payments Strategy Manager" remote
"Stablecoin Strategy" remote
"Crypto Infrastructure Strategy" remote
"Business Operations" "global remote" fintech
```

---

# Exclusion / Negative Queries

Use these to filter manually or in automation logic.

```text
-"Account Executive"
-"Sales Executive"
-"Sales Representative"
-"BDR"
-"SDR"
-"Customer Success"
-"Account Manager"
-"Relationship Manager"
-"Wealth Manager"
-"Analyst"
-"Intern"
-"Junior"
-"Coordinator"
```

Do not use exclusions too aggressively on the first pass, because some relevant roles may contain adjacent commercial terms.

---

# Manual Search Routine

## Daily Quick Scan

Use 3–5 priority queries, rotating between:
- Dubai / UAE
- São Paulo / Brazil
- target companies
- Strategy & Operations / BizOps
- Corporate Development
- Strategic Partnerships / Alliances

**Non-rotational — always include in every daily scan:** Nubank · Checkout.com · Adyen · Revolut (see sections below).

---

# Nubank — mandatory daily scan

> Run on **every** RUN_DISCOVERY. Archived SPG role (7577975) closed ~Mar 2026 — watch for repost.

## Primary source (canonical)

```text
https://boards-api.greenhouse.io/v1/boards/nubank/jobs?content=true
https://job-boards.greenhouse.io/nubank
```

## Title filters (São Paulo / Brazil)

```text
"General Strategic Partnership Profile"
"Strategic Partnership Group"
"Strategic Partnership"
"Corporate Development"
"Strategy & Corporate Development"
"Business Operations"
"BizOps"
"Chief of Staff"
"Product Operations Manager"
"Strategic Finance"
```

## Company-specific queries (web / LinkedIn leads only — confirm on Greenhouse)

```text
Nubank "Strategic Partnership Group" São Paulo
Nubank "General Strategic Partnership Profile" Brazil
Nubank "Corporate Development" São Paulo
Nubank SPG Greenhouse
site:greenhouse.io/nubank "Strategic Partnership"
site:greenhouse.io/nubank "Corporate Development" "Sao Paulo"
site:greenhouse.io/nubank "Business Operations" Brazil
```

## Exclude (unless exceptional scope)

```text
B2B Account Specialist - Hunter
Growth & Promotional Marketing
Design & Construction
Model Risk / Operational Risk / Compliance
Engineer / Data Scientist / Business Analyst (below Manager band)
```

## When SPG reposts

- Add new candidate row or update existing Nubank row with new Greenhouse job ID
- Link status `Live` · Decision `Process now`
- Flag in chat — reactivate from **Watchlist — Archived** → Pipeline Summary in `applications_tracker.md`

---

# Checkout.com — mandatory daily scan

> Run on **every** RUN_DISCOVERY. RevOps Dubai role archived (removed ~Oct 2025) — watch for repost.

## Primary source (canonical)

```text
https://ashby-careers-checkout-production.up.railway.app/api/jobs
https://www.checkout.com/jobs
```

## Title filters (Dubai / UAE)

```text
"RevOps"
"Revenue Operations"
"Commercial Strategy Partner"
"Commercial Strategy"
"Commercial Strategy & Performance"
"GTM" + strategy or operations scope
"Business Operations"
"BizOps"
```

## Company-specific queries (aggregators only — confirm on Ashby)

```text
Checkout.com "RevOps" Dubai
Checkout.com "Commercial Strategy" UAE
Checkout.com "Revenue Operations" MENA
site:jobs.ashbyhq.com/checkout.com Dubai strategy
```

## Exclude (unless exceptional scope)

```text
Manager, Sales
Account Management
Sales Engineering
Regional Marketing
People Operations
Tax / Treasury / Legal
```

## When RevOps reposts

- Update discovery row · Link status `Live`
- Flag in chat — move from **Watchlist — Archived** → **Pipeline Summary** in applications tracker
- Reuse Stage 1 file `checkout_revops_commercial_strategy_partner_dubai_2026-05-26.md`

---

# Adyen — mandatory daily scan

> Run on **every** RUN_DISCOVERY. Alliances SP mapped (awaiting referral); confirm posting + watch for new Brazil roles.

## Primary source (canonical)

```text
https://boards-api.greenhouse.io/v1/boards/adyen/jobs?content=true
https://job-boards.greenhouse.io/adyen
```

## Known mapped posting (verify each scan)

```text
Senior Alliances Partner Manager — job 7913587 — São Paulo
https://job-boards.greenhouse.io/adyen/jobs/7913587
```

## Title filters (São Paulo / Brazil)

```text
"Alliances"
"Partnerships"
"Strategic Partnerships"
"Partner Manager"
"Corporate Development"
"Strategy"
"Commercial Strategy"
"Business Operations"
"Market Development"
```

## Company-specific queries (aggregators only — confirm on Greenhouse)

```text
Adyen "Alliances" São Paulo
Adyen "Partnerships" Brazil
site:greenhouse.io/adyen "Alliances" Brazil
site:greenhouse.io/adyen "Strategy" "Sao Paulo"
```

## If mapped role closes before apply

- Flag in chat · update applications tracker Adyen status
- Keep scanning for repost or adjacent alliances/strategy role

## When new Adyen target role found

- Add discovery row · Link status `Live`
- Flag for PROMOTE or update existing Stage 1 file

---

# Revolut — mandatory daily scan

> Run on **every** RUN_DISCOVERY. Dubai S&O Revenue **rejected post-screen 2026-06-06** — mandatory pass watches **Brazil · Spain** geo pivot for same role family.

## Primary source (canonical)

```text
https://www.revolut.com/careers
https://www.revolut.com/en-BR/careers
```

## Known postings to verify each scan

```text
Strategy & Operations Manager — e4b7c063-41c5-4afc-8031-2323db04b9f7
https://www.revolut.com/careers/position/strategy-operations-manager-e4b7c063-41c5-4afc-8031-2323db04b9f7/
https://www.revolut.com/en-BR/careers/position/strategy-operations-manager-e4b7c063-41c5-4afc-8031-2323db04b9f7/

Operations Manager (Revenue) — 6970b9e3-e515-4b76-804b-9df9ce31296d
https://www.revolut.com/careers/position/operations-manager-revenue-6970b9e3-e515-4b76-804b-9df9ce31296d/
```

## Title filters (Brazil · Spain — mandatory pass)

```text
"Strategy & Operations"
"Strategy and Operations"
"Operations Manager" + "Revenue"
"Revenue Operations"
"Business Operations"
"BizOps"
```

## Location filters (mandatory pass)

```text
Remote: Brazil
Office: São Paulo
Remote: Spain
Office: Madrid
Office: Barcelona
```

## Company-specific queries (aggregators only — confirm on revolut.com/careers)

```text
Revolut "Strategy & Operations" Brazil
Revolut "Strategy & Operations" Spain
Revolut "Strategy & Operations" Madrid
Revolut "Operations Manager" Revenue São Paulo
Revolut "Operations Manager" Revenue Madrid
site:revolut.com/careers Brazil "Strategy & Operations"
site:revolut.com/careers Spain "Strategy & Operations"
```

## Exclude (unless exceptional scope)

```text
Sales Manager
Account Executive
Customer Support
Compliance-only
Analyst / Associate (below Manager band)
```

## When Brazil or Spain S&O/Revenue is live

- Add discovery row · Link status `Live` · location = Brazil or Spain explicitly
- Flag in chat — geo pivot from rejected Dubai track (`revolut_strategy_operations_manager_dubai_2026-05-25.md`)
- **Before reapply:** coordinate with Matt (recruiter) if same global job ID — avoid duplicate ATS without recruiter OK
- PROMOTE may create geo-specific Stage 1 file (e.g. `revolut_strategy_operations_manager_brazil_YYYY-MM-DD.md`)

## When no Brazil/Spain match

- Log in Weekly Discovery Notes: *"Revolut scan: no S&O/Revenue Brazil or Spain"*
- Do not remove Dubai rejected application row

---

# Crypto / Stablecoin — weekly rotation (SP + Remote)

> **Not mandatory daily.** Pick **1–2 companies per RUN_DISCOVERY** from this cluster when a rotation slot is open. Full workflow: `AI/job_discovery_workflow.md` → **Weekly Rotation: Crypto / Stablecoin + Brex**.

## Rotation roster

Brex · Coinbase · Circle · Binance · Kraken · Fireblocks · Ripple · Tether · OKX · Bybit · Paxos · Gemini

**Geo priority:** São Paulo / Brazil office → Remote (Brazil · Americas · global) → Dubai/MENA (secondary).

## Brex — rotation scan

### Primary source (canonical)

```text
https://boards-api.greenhouse.io/v1/boards/brex/jobs?content=true
https://job-boards.greenhouse.io/brex
https://www.brex.com/careers
```

### Known SP posting (re-verify each rotation pass)

```text
Manager, Banking Operations — job 8580566002 — São Paulo
https://www.brex.com/careers/8580566002?gh_jid=8580566002
```

- PROMOTED 2026-06-11 — intel only · score 3.35 · do not apply (control ops).
- Watch for **Strategy / BizOps / Partnerships** SP titles — PROMOTE if live.

### Title filters (SP + remote)

```text
"Strategy" · "Strategy & Operations" · "Business Operations" · "BizOps"
"Corporate Development" · "Partnerships" · "Alliances" · "Payments Strategy"
"Chief of Staff" · "Commercial Strategy"
```

### Exclude

```text
Banking Operations monitoring / transaction monitoring (intel only unless pivot)
Data / Engineering · Intern / Rotational · pure Compliance
```

## Coinbase — rotation scan

```text
https://boards-api.greenhouse.io/v1/boards/coinbase/jobs?content=true
https://job-boards.greenhouse.io/coinbase
```

Filter: Remote global + Brazil/São Paulo when listed. Title filters same as Brex block.

## Circle — rotation scan

```text
https://www.careers.circle.com
```

Greenhouse board `circle` may 404 on US API — use careers site HTML or aggregators (Built In · Web3.career) → confirm on official site before PROMOTE.

Existing discovery rows: VP Regional Strategy MEA · Director Partner Management MEA — Monitor unless inbound.

## Binance — rotation scan

```text
https://www.binance.com/en/careers
```

Often remote-global; filter Strategy / BizOps / Corp Dev / Partnerships. Binance Greenhouse board returns empty — use careers portal.

## Kraken — rotation scan

```text
https://jobs.lever.co/kraken
https://api.lever.co/v0/postings/kraken?mode=json
```

## Fireblocks — rotation scan

```text
https://boards-api.greenhouse.io/v1/boards/fireblocks/jobs?content=true
https://www.fireblocks.com/careers
```

SP signal: Sales Director Brazil (commercial — penalize unless strategic partnerships scope). Dubai MENA strategy rows on aggregators — confirm official.

## Ripple · Tether · OKX · Bybit · Paxos · Gemini

- **Ripple:** ripple.com/careers — Dubai MEA filter + remote
- **Tether / OKX / Bybit:** official careers · often aggregator-only
- **Paxos / Gemini:** Greenhouse or Lever — remote Strategy / Corp Dev

## When crypto target role found

- Add discovery row · Link status `Live` · Decision `Process now` or `Monitor`
- Flag in chat — crypto Strategy/S&O postings are rare and time-sensitive

## When no match

- Log one line in Weekly Discovery Notes (company | SP | outcome)
- Update Parking Lot if company-level no-role signal

---

# Big Tech — weekly rotation (São Paulo / Brazil)

> **Not mandatory daily.** Pick **1 company per RUN_DISCOVERY** when rotation slot open. Full workflow: `AI/job_discovery_workflow.md` → **Weekly Rotation: Big Tech SP**.

## Rotation roster

Amazon · Google · Meta · Apple · Microsoft (+ Stripe SP already in fintech rotation)

**Geo:** São Paulo · Osasco · Rio · Brazil filter on official careers.

## Amazon — rotation scan

```text
https://www.amazon.jobs/en/search?base_query=&loc_query=Brazil
https://www.amazon.jobs/en/search?base_query=payments&loc_query=São Paulo
https://www.amazon.jobs/en/search?base_query=strategy&loc_query=Osasco
```

**Include:** Payments Strategy · BizOps · Partner Strategy (platform) · Amazon Pay · Product Strategy · deal/pricing strategy with business ownership.

**Exclude / intel only:** Last Mile · Logistics · Fulfillment · EDSP/AMPL/AMXL partner ops — ref job **10408004** (score 3.40 · do not apply).

## Google · Meta · Apple · Microsoft

```text
site:careers.google.com Brazil "Strategy" payments
site:metacareers.com Brazil "Partnerships" OR "Business Operations"
site:jobs.apple.com Brazil strategy
site:careers.microsoft.com Brazil "Strategy" payments
```

Filter: Manager / Senior Manager · target role families. Exclude ads sales AE, logistics, warehouse ops.

## When big-tech target role found

- Discovery row · Link status `Live` · flag in chat — big-tech SP strategy postings are rare.

---

# Link verification registry — mandatory every RUN_DISCOVERY

> **Run first:** `python AI/.cursor/hooks/verify_discovery_links.py`  
> Script implements this table. Agent must resolve any `Unknown`/`Blocked` via fallbacks before closing scan.

## Script-covered checks (every run)

| ID | Company | Role / check | Geo | Primary API / URL | Fallback chain |
|---|---|---|---|---|---|
| nubank-target | Nubank | SPG / Corp Dev / S&O SP | SP | `boards-api.greenhouse.io/v1/boards/nubank/jobs` | GH board browse |
| watch-nubank-spg | Nubank | SPG repost 7577975 | SP | Greenhouse job ID lookup | — |
| checkout-revops | Checkout.com | RevOps / Commercial Strategy Dubai | Dubai | `ashby-careers-checkout-production.up.railway.app/api/jobs` | checkout.com/jobs |
| adyen-7913587 | Adyen | Senior Alliances Partner Manager | SP | Greenhouse job 7913587 | job-boards.greenhouse.io/adyen |
| revolut-som | Revolut | S&O Manager Revenue `e4b7c063` | Both | en-BR + global careers URL | **WebFetch** · manual confirm |
| revolut-omr | Revolut | OMR `6970b9e3` | Both | en-BR + global careers URL | **WebFetch** · manual confirm |
| visa-ref082130w | Visa | SM Product Strategy REF082130W | Dubai | Workday CXS JSON (see below) | Workday HTML |
| meli-online-payments | Mercado Pago | Gerente Online Payments | SP | Eightfold search | LinkedIn **4206073378** |
| meli-sme-engagement | Mercado Pago | Gerente Engajamento SME | SP | Eightfold search | LinkedIn **4419607407** |
| ebanx-7718387003 | EBANX | Product Sr Manager Payments | SP | Greenhouse 7718387003 | — |
| jpm-210741903 | J.P. Morgan | LATAM Payments Rails Delivery VP | SP | Oracle REST (see below) | Oracle CX UI |
| jpm-210746060 | J.P. Morgan | Market & Product Expansion Treasury VP | SP | Oracle REST | Oracle CX UI |
| jpm-210751285 | J.P. Morgan | Innovation Economy Sales VP | Dubai | Oracle REST | Oracle CX UI |
| brex-8580566002 | Brex | Manager, Banking Operations (intel) | SP | Greenhouse job 8580566002 | brex.com/careers |

## Rotation checks (not in script — agent on crypto rotation pass)

| ID | Company | Role / check | Geo | Primary API / URL |
|---|---|---|---|---|
| brex-strategy-sp | Brex | Strategy / S&O / BizOps SP or remote | SP | Greenhouse `brex` filter |
| coinbase-strategy | Coinbase | Strategy / Corp Dev remote | SP | Greenhouse `coinbase` filter |
| circle-careers | Circle | Strategy / Partnerships | SP/remote | careers.circle.com |
| binance-careers | Binance | Strategy / BizOps remote | SP | binance.com/en/careers |

## Canonical API URLs

```text
# Visa Workday (prefer CXS JSON over HTML)
https://visa.wd5.myworkdayjobs.com/wday/cxs/visa/Visa/job/AE---Dubai-United-Arab-Emirates/Senior-Manager--Product-Strategy-and-Planning_REF082130W

# Mercado Libre / Mercado Pago (Eightfold — not legacy careers-meli 404 paths)
https://mercadolibre.eightfold.ai/api/pcsx/search?domain=mercadolibre.com&query=Gerente+Online+Payments&start=0
https://careers-meli.mercadolibre.com/pt/jobs

# J.P. Morgan Oracle
https://jpmc.fa.oraclecloud.com/hcmRestApi/resources/latest/recruitingCEJobRequisitionDetails?expand=all&onlyData=true&finder=ById;Id=210741903,siteNumber=CX_1001

# Revolut (403 on curl — use WebFetch in agent)
https://www.revolut.com/en-BR/careers/position/strategy-operations-manager-e4b7c063-41c5-4afc-8031-2323db04b9f7/
https://www.revolut.com/careers/position/operations-manager-revenue-6970b9e3-e515-4b76-804b-9df9ce31296d/
```

## Also verify from tracker (rotation + Top 3)

Each run: read `opportunities_tracker.md` **Top 3** + all rows with `Link status` = Live or Aggregator and Decision ≠ Promoted/Ignore. Add to Companies Checked Report if not in script table.

## When primary source fails

| Symptom | Action |
|---|---|
| HTTP 403 | WebFetch · JSON API alternative · web search `site:official-careers title` |
| HTTP 404 on careers URL | Check registry for current ATS (Eightfold, CXS, Greenhouse API) |
| Empty / JS-only page | Use board API (Greenhouse, Ashby, Lever, Workday CXS, Oracle REST) |
| LinkedIn-only | Eightfold confirm → keep `Aggregator` until official ATS match |

**Never close RUN_DISCOVERY with unresolved `Unknown` on pipeline or mandatory rows.**

---

## Weekly Deep Scan

Use:
- all target company queries
- geography-specific queries
- crypto / stablecoin queries
- corporate development queries
- partnerships / market development queries

---

# Notes

Add new queries whenever a useful search pattern appears.

If a strong opportunity appears under an unexpected title, add that title to the seniority or role keyword lists.
