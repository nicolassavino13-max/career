# Job Discovery Workflow

## Objective

Create a lightweight top-of-funnel system to identify, pre-screen and prioritize job opportunities before they enter the official Job Search OS.

This workflow sits before `AI/job_search_workflow.md`.

The goal is to reduce manual searching, avoid missing relevant opportunities, and create a structured staging area for roles that may deserve deeper analysis.

The discovery agent should focus on **Dubai / UAE** and **São Paulo / Brazil** as equal-priority geographies.

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
```

Purpose:
- Store fully processed opportunities
- Apply scoring framework
- Generate recommendations
- Track next actions

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
PROMOTE snippet (`AI/snippets/PROMOTE.md`) → Prompt §1   ← handoff to Applications layer
↓
Application file (Stage 1)
↓
Tracker (`Career/applications_tracker.md`)
↓
Canvas auto-sync (`AI/.cursor/hooks/sync_pipeline_canvas.mjs`)
```

**RUN_DISCOVERY does not update the applications tracker or applications canvas.** It updates the opportunities file + opportunities canvas only. PROMOTE / §1 update Applications + applications canvas.

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

The discovery agent should prioritize **Dubai / UAE** and **São Paulo / Brazil equally**.

## Primary geographies

1. Dubai / UAE
2. São Paulo / Brazil

These are equal-priority geographies.

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

## Payment networks / big tech payments

Examples:
- Visa
- Mastercard
- Amazon Pay
- Google Payments
- Apple Pay
- Meta payments / commerce
- TikTok commerce/payments

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
- BTG, Itaú, Santander, Bradesco, only if role is digital/payments/fintech/platform/corp dev-aligned

## Crypto / stablecoin infrastructure

Examples:
- Circle
- Tether
- Coinbase
- Kraken
- Ripple
- Fireblocks
- Chainalysis
- Binance
- OKX
- Bybit

For crypto, prioritize infrastructure, stablecoins, payments, custody, institutional digital assets, tokenization, on/off-ramp, blockchain analytics and cross-border payments.

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
| Process now | Link validated; ready for PROMOTE / §1 this week |
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

# Future Automation Ideas

Potential future automation:
- Search company career pages automatically
- Monitor Greenhouse/Lever/Ashby boards for target companies
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
