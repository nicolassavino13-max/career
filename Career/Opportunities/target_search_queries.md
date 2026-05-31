# Target Search Queries

## Objective

Store reusable search queries for discovering relevant job opportunities.

This file feeds the Job Discovery Workflow.

Use these queries manually first. Later, selected queries may become semi-automated or automated.

Primary geographies are **Dubai / UAE** and **São Paulo / Brazil**, with equal priority.

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
Revolut "Revenue" "Strategy" Dubai
Revolut "Business Operations" São Paulo

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
Amazon "Fintech" "Business Operations" Dubai

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

## Crypto / Stablecoin Infrastructure

```text
Circle "Strategy" Dubai
Circle "Business Operations" UAE
Circle "Stablecoin" "Strategy" Dubai
Circle "Partnerships" Brazil

Tether "Strategy" remote
Tether "Strategy" Dubai
Tether "Business Operations" UAE
Tether "Expansion" Brazil

Coinbase "Strategy" Brazil
Coinbase "Business Operations" Brazil
Coinbase "Corporate Development" remote
Coinbase "International Expansion" Dubai

Kraken "Strategy" Dubai
Kraken "Business Operations" UAE
Kraken "Partnerships" Brazil

Ripple "Strategy" Dubai
Ripple "Partnerships" UAE
Ripple "Payments Strategy" Dubai

Fireblocks "Strategy" Dubai
Fireblocks "Business Operations" UAE
Fireblocks "Partnerships" Brazil

Chainalysis "Strategy" Dubai
Chainalysis "Business Operations" UAE
Chainalysis "Partnerships" Brazil

Binance "Strategy" Dubai
Binance "Business Operations" UAE
Bybit "Strategy" UAE
OKX "Strategy" Dubai
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

**Non-rotational — always include in every daily scan:** Nubank · Checkout.com · Adyen (see sections below).

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
