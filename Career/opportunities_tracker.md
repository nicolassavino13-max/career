# Opportunities Tracker

> **Discovery layer only** — pre-screened leads before **PROMOTE**.
> Daily scan: **`RUN_DISCOVERY`** → `AI/snippets/RUN_DISCOVERY.md` · **Verify first:** `python AI/.cursor/hooks/verify_discovery_links.py`
> Queries: `Career/Opportunities/target_search_queries.md` · Handoff: **`PROMOTE`** → applications tracker
> **Opportunities canvas:** `AI/canvases/opportunities-tracker.canvas.tsx` (auto-sync from this file — @-tag in chat)
> **Applications canvas:** `AI/canvases/applications-tracker.canvas.tsx` (from `Career/applications_tracker.md` only)

**Last scan:** 2026-06-12 · Geographies: **São Paulo/Brazil 75%** · Dubai/UAE 25%

**Active prep:** BTG Round 3 · **ML Corp Dev Round 1 Fri 14:00 BRT** · MP SME HR inbound — see `applications_tracker.md`

---

# Status Logic

| Decision | Meaning |
|---|---|
| Process now | Link validated on official source; ready for **PROMOTE this week** |
| **Promoted** | Ran PROMOTE snippet → Stage 1 file + tracker exist |
| Monitor | Interesting; validate on next scan |
| Need more info | Missing link, location, seniority, or posting status |
| Ignore | Outside target role/geo/seniority |
| Already processed | In `Career/Applications/` + tracker (before discovery label existed) |
| Duplicate | Same role as another candidate row |

**Queue rule:** Weekly Discovery Notes **Top 3** = working queue. Set **`Process now`** only when the posting link is confirmed **Live** (or acceptable aggregator with JD verified) and you are ready to PROMOTE this week. Otherwise keep **Monitor** or **Need more info** and record uncertainty in **Link status**.

| Link status | Meaning |
|---|---|
| Live | Confirmed on company ATS or official careers page |
| Stale | Listing closed, expired, or removed |
| Aggregator | LinkedIn, job board, or third-party mirror — confirm on official site before PROMOTE |
| Unknown | Link missing, broken, or posting not found on official careers |

---

# Initial Fit Logic

| Initial fit | Meaning |
|---|---|
| Very high | Target company + target role family + target geo + Manager/Sr Manager |
| High | Strong on most dimensions; one element to validate |
| Medium | Worth watching; role family or seniority unclear |
| Low | Weak fit; keep only for market mapping |

Compensation: always `Not disclosed / validate later` at discovery stage.

---

# Candidate Table

| Date found | Company | Role | Seniority signal | Location | Source | Link | Link status | Initial fit | Decision | Reason | Next action |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 2026-05-25 | Revolut | Strategy & Operations Manager — Revenue Team | Manager | UAE / Dubai (also Remote: Brazil · Spain) | Recruiter | https://www.revolut.com/careers/position/strategy-operations-manager-e4b7c063-41c5-4afc-8031-2323db04b9f7/ | Live | Very high | Already processed | **Rejected post-screen 2026-06-06** (Matt); same job ID still **Live** Brazil · Spain · SP 2026-06-10 | Geo pivot via OMR row or reply Matt — do not duplicate ATS apply |
| 2026-05-25 | Mercado Livre | Gerente de Estratégia & Desenvolvimento Corporativo | Manager | São Paulo | Eightfold / referral | https://mercadolibre.eightfold.ai/careers/job/38908589 | **Live** | High | Already processed | Interviewing — Round 1 **2026-06-12 14:00 BRT** | post_call after screen |
| 2026-05-25 | Adyen | Senior Alliances Partner Manager | Senior Manager | São Paulo | Greenhouse | https://job-boards.greenhouse.io/adyen/jobs/7913587 | Live | High | Already processed | Applied (referral · **Rafaela Mello** 2026-06-12) | Await recruiter ~2026-06-18 |
| 2026-05-26 | Visa | Senior Manager, Product Strategy and Planning | Senior Manager | Dubai / UAE (hybrid) | Visa Workday | https://visa.wd5.myworkdayjobs.com/en-US/Visa/job/AE---Dubai-United-Arab-Emirates/Senior-Manager--Product-Strategy-and-Planning_REF082130W | **Live** | Very high | Promoted | Stage 1 — `visa_..._dubai_2026-05-26.md`; verified REF082130W 2026-05-27 | Apply on Workday |
| 2026-05-26 | Checkout.com | RevOps & Commercial Strategy Partner | Manager-equivalent | Dubai, UAE | Built In | https://builtin.com/job/revops-commercial-strategy-partner/6776498 | **Stale** | High | Promoted | Stage 1 archived — `checkout_..._dubai_2026-05-26.md`; removed Oct 2025; **verified closed 2026-05-27** (Ashby API) | Monitor Ashby board for repost |
| 2026-05-26 | Nubank | General Strategic Partnership Profile — Senior Specialist | Senior Specialist (~Manager) | São Paulo | Nubank careers / Greenhouse | https://job-boards.greenhouse.io/nubank · old ID 7577975 | **Stale** | High | Promoted | Stage 1 archived — `nubank_..._saopaulo_2026-05-26.md`; removed ~Mar 25 2026 | **Daily scan:** Greenhouse SPG / Corp Dev / S&O SP |
| 2026-05-26 | Wise | Senior Banking & Expansion Manager | Senior Manager | Dubai, UAE | Fintech Careers / Built In | https://wise.jobs/job/senior-banking-and-expansion-manager-in-dubai-jid-2500 | Stale | High | Monitor | Payments infra + VARA entity launch; **verified expired on wise.jobs 2026-05-31** | Monitor wise.jobs for repost; deprioritize unless relisted |
| 2026-05-26 | Ziina | FP&A Manager | Manager | Dubai, UAE | Greenhouse EU | http://job-boards.eu.greenhouse.io/ziina/jobs/4650048101 | **Stale** | Medium | Monitor | Strategic finance at MENA fintech; **4650048101 404 on Greenhouse EU 2026-06-04** | Monitor Ziina board for repost; deprioritize unless relisted |
| 2026-05-26 | dLocal | Strategy Manager (Strategic Alignment & Execution) | Manager / Sr Manager | Unclear — likely Montevideo hub; Brazil possible | Welcome to the Jungle | https://app.welcometothejungle.com/jobs/b1rQUnVA | Stale | High | Need more info | Chief-of-staff-style strategy & ops | Re-check Lever/careers monthly; high fit if reposted |
| 2026-05-26 | dLocal | Treasury Manager | Manager | São Paulo (hybrid) | Lever | https://jobs.lever.co/dlocal/7cba81c3-4726-498b-8eb3-9ac1106ed51a | **Stale** | Medium | Monitor | Payments treasury; **Lever URL 404 + not on dlocal board 2026-06-04**; Corp Dev talent pool Montevideo only | Re-check Lever monthly; Strategy Manager repost watch |
| 2026-05-26 | EBANX | Product Senior Manager \| Payments | Senior Manager | São Paulo or Curitiba (on-site) | Greenhouse | https://job-boards.greenhouse.io/ebanx/jobs/7718387003 | Live | Medium | Monitor | Strong payments product leadership; less Corp Dev/S&O — good brand | Run PROMOTE only if product strategy track is intentional |
| 2026-05-26 | Airwallex | Head of Middle East | Head / GM-level | Dubai | Airwallex careers | https://careers.airwallex.com/job/4e28592b-90b8-4b4c-adcd-1ec73d31fbc7/head-of-middle-east/ | Live | Medium | Monitor | P&L + regional strategy; likely **above** target seniority | Only if willing to pursue GM-track |
| 2026-05-26 | Circle | VP, Regional Strategy — Middle East & Africa | VP (IC) | Dubai / UAE (remote) | Built In | http://builtin.com/job/vp-regional-strategy-middle-east-africa/8570152 | Aggregator | Medium | Monitor | Stablecoin infra strategy; **14+ yrs** — likely stretch | Monitor unless inbound/referral |
| 2026-05-26 | Circle | Director, Partner Management — MEA | Director | UAE | Web3.career | https://web3.career/director-partner-management-mea-circle/92373 | Aggregator | Medium | Monitor | Partnerships/crypto; senior; strategic commercial | Same as above |
| 2026-06-11 | Circle | Senior Manager, Partner Management — LATAM | Sr Manager (10+ yrs AM/BD) | Brazil (remote) | User inbound (PROMOTE) | https://careers.circle.com/us/en/job/CIICIRUSJR100929EXTERNALENUS/Senior-Manager-Partner-Management-LATAM | **Stale** | Very high | **Promoted** | Stage 1 — `circle_senior_manager_partner_management_latam_brazil_2026-06-11.md`; score **4.55**; **filled** on official site → Archived watchlist | Repost watch on crypto rotation |
| 2026-05-26 | Checkout.com | Manager, External Affairs — UAE | Manager | Dubai | Welcome to the Jungle | https://www.welcometothejungle.com/en/companies/checkout-com-1/jobs/manager-external-affairs-uae_dubai_uyb472wc | Live | Medium | Monitor | Scheme/network partnerships; more commercial RM than strategy | Compare vs RevOps role; likely one Checkout path |
| 2026-05-26 | OpenFX | Product Manager, Payments | Manager (PM) | Dubai listed among hubs | Greenhouse | http://job-boards.greenhouse.io/openfx/jobs/5071725008 | Live | Medium | Ignore | Cross-border payments infra — **product manager**, not S&O/Corp Dev | Skip unless pivoting to product strategy |
| 2026-05-26 | Visa | Strategy Analyst (CEMEA — CISSEE market) | Analyst | Dubai | Dr.Job | https://drjobs.ae/jobs/strategy-analyst-cissee-market-experience-dubai-visa-MPBU6ULN01W6GAC | Aggregator | Low | Ignore | Corp strategy team but **analyst** seniority + CISSEE requirement | Below target band |
| 2026-05-26 | Visa | Director, CoE — Strategy and Execution | Director | Dubai | Aggregator | https://jobuae24h.com/director-coe-strategy-and-execution-job158747 | Aggregator | Medium | Monitor | Strategy execution; **12+ yrs** — likely too senior | Only with strong referral |
| 2026-05-26 | Wise | Compliance Senior Manager — Digital Assets | Senior Manager | Dubai | Fintech Careers | https://www.fintechcareers.com/job/28699/compliance-senior-manager-digital-assets-dubai/ | Aggregator | Low | Ignore | Compliance/regulatory — not operator-strategy destination | Market signal only |
| 2026-05-26 | Getnet | Corporate Commercial Specialist | Specialist | São Paulo | Greenhouse EU | https://job-boards.eu.greenhouse.io/getnet/jobs/4838231101 | Live | Low | Ignore | Commercial hunter/farmer corporate sales | Outside role family |
| 2026-05-26 | Airwallex | Sales Manager, SME & Growth | Manager | Dubai | Airwallex careers | https://careers.airwallex.com/job/0e491f38-2e78-4c7d-afe0-8a5b0700d054/sales-manager-sme-growth/ | Live | Low | Ignore | Pure commercial sales leadership | Penalized per discovery rules |
| 2026-05-26 | Stripe | Strategy & Operations, Embedded Finance | Manager-equivalent | Remote DXB (uncertain) | Remote DXB | https://www.remotedxb.com/job/strategy-operations-embedded-finance-stripe | Stale | High | Need more info | Ideal role family — DXB embedded finance track | Check stripe.com/jobs for UAE/Dubai S&O |
| 2026-05-26 | PGWay | Payments Manager (Middle East) | Manager | GCC — **office Portugal** | Greenhouse EU | https://job-boards.eu.greenhouse.io/pgway/jobs/4815455101 | Live | Medium | Ignore | Payments/GTM — geo mismatch for SP/Dubai priority | Unless remote UAE acceptable |
| 2026-05-26 | BTG Pactual | Operations Transformation (inbound — multiple roles TBD) | TBD (target Manager+) | São Paulo (assumed) | WhatsApp HR — Ana Clara; ref. João Torneli | https://carreiras.btgpactual.com/vagas | Live | High | **Promoted** | HR screen **2026-06-08 16:30 BRT** (rescheduled); prep `preparation/btg_operations_transformation/round_01_btg_opstransf_hr_screen_2026-06-08/prep.md` | João debrief before Mon call |
| 2026-05-26 | BTG Pactual | Analista de Soluções Júnior, Processo e IA | Analyst (below band) | São Paulo | Aggregator / careers | https://pitchmeai.com/jobs/btg-pactual/analista-de-solucoes-junior-processo-e-ia-l5xmy3pp2p | Aggregator | Medium | Ignore | Transformation-adjacent but **Jr + IA builder**; wrong seniority | Only if inbound maps here — else skip |
| 2026-05-26 | BTG Pactual | Analista de Produtos — Conta Corrente (foco IA) | Analyst | São Paulo (Av. Paulista presencial) | Aggregator | https://bebee.com/br/jobs/analista-de-produtos-conta-corrente-foco-em-ia-btg-pactual-sao-paulo-sao-paulo--theirstack-681691144 | Aggregator | Medium | Monitor | Digital banking product — relevant industry, **not** target role family | Compare to inbound scope; PROMOTE only if Manager+ product strategy |
| 2026-05-26 | BTG Pactual | Strategy and Business Management Analyst (B2B partner offices) | Analyst | São Paulo | Aggregator (expired ref.) | https://pitchmeai.com/jobs/btg-pactual/strategy-and-business-management-analyst-a6jxzbn265 | Stale | Low | Ignore | Internal consultancy to partner offices; analyst; wealth B2B — not fintech operator | Market signal only |
| 2026-05-26 | BTG Pactual | Analista de Operações (Credit Operations Digital) | Analyst | São Paulo | Press/careers scan | https://carreiras.btgpactual.com/vagas | Live | Low | Ignore | Back-office ops — conflicts with positioning | Skip |
| 2026-05-26 | BTG Pactual | Engenheiro(a) de Dados — Data Analytics | Specialist | São Paulo (hybrid 3x) | Aggregator | https://echojobs.io/job/btg-pactual-engenheiro-a-de-dados-dados-tmovo | Aggregator | Low | Ignore | Technical data engineering — outside role family | Skip |
| 2026-05-27 | Mercado Pago | Gerente de Negócios Cripto | Manager | São Paulo | LinkedIn + Ivan (MP Banking) | https://www.linkedin.com/jobs/view/4408443201/ | **Stale** | Very high | **Promoted** | **Posting closed** (Ivan 2026-06-01); career chat **2026-06-06 15:30 BRT**; prep `preparation/mercadopago_ivan_career_2026-06-06/` | Prep before Fri call |
| 2026-05-27 | Mercado Pago | Gerente de Online Payments | Manager | São Paulo | LinkedIn | https://br.linkedin.com/jobs/view/gerente-de-online-payments-mercado-pago-at-mercado-livre-brasil-4206073378 | Aggregator | High | Monitor | Payments product/strategy leadership at MELI fintech arm — distinct from ML Corp Dev (already processed) | Confirm live on careers-meli.mercadolibre.com; compare vs ML path |
| 2026-05-27 | Mercado Pago | Especialista de Planejamento e Estratégia em Big Sellers | Specialist (~Manager scope) | São Paulo | LinkedIn | https://br.linkedin.com/jobs/view/especialista-de-planejamento-e-estratégia-em-big-sellers-mercado-pago-at-mercado-livre-brasil-4212096464 | Aggregator | Medium | Monitor | Strategic planning for enterprise sellers; adjacent to S&O — title below Manager band | Validate seniority + posting status on official careers |
| 2026-05-27 | Tamara | Channel Partnership Manager | Manager | Dubai, UAE | Greenhouse EU | https://job-boards.eu.greenhouse.io/tamara | Stale | High | Monitor | GCC BNPL unicorn; **4785885101 dead; not on Tamara board (35 jobs) 2026-05-31** | Re-scan Commercial Dubai monthly; aggregator BeBee mirrors only |
| 2026-05-27 | PayPal | Sr Manager Partnerships | Senior Manager | Dubai Internet City, UAE | Weekday / job board | https://jobs.weekday.works/paypal-sr-manager-partnerships | Stale | High | Monitor | Target role family + payments network; **Weekday flags may no longer accept; not on careers.pypl.com 2026-05-31** | Monitor PayPal careers Dubai filter; run PROMOTE if official posting returns |
| 2026-05-27 | Mastercard | Director, Strategy and Performance Management (CNPF) | Director | Dubai, UAE | Talentmate / aggregator | https://www.talentmate.com/jobs/uae/dubai/director-strategy-and-performance-management/2511-1930-875 | Aggregator | Medium | Monitor | Payments strategy execution; Director level — likely stretch | Confirm R-276740 or equivalent on careers.mastercard.com |
| 2026-05-27 | Mastercard | Director, Commercial Acceptance Strategy | Director | Dubai, UAE | Aggregator (jobuae24h) | https://jobuae24h.com/director-commercial-acceptance-strategy-job54503 | Aggregator | Medium | Monitor | B2B acceptance strategy; Director level | Verify on Mastercard careers before PROMOTE |
| 2026-05-27 | Fireblocks | Business Solutions Director, MENA | Director | Dubai, UAE | Web3.career / crypto boards | https://web3.career/business-solutions-director-mena-fireblocks/55733 | Aggregator | Medium | Monitor | Crypto infra; ex-MBB-style client strategy — Director track | Only if willing to pursue consulting-adjacent Director track |
| 2026-05-29 | BBVA | Strategy & Ops Manager — CIB MENA | Manager | Abu Dhabi, UAE (hybrid) | LinkedIn (PROMOTE inbound) | https://bbva.wd3.myworkdayjobs.com/BBVA/job/Abu-Dhabi/Strategy---Ops-Manager---CIB-MENA_JR00103444 | Live | High | **Promoted** | Stage 1 done — `bbva_strategy_ops_manager_cib_mena_abudhabi_2026-05-29.md`; tracker rank 6; score 3.90; applied direct | Review Benjamin warm path ~06-05 |
| 2026-06-11 | J.P. Morgan | Market and Product Expansion — Treasury (VP) | VP (5+ yrs) | São Paulo, SP (or Mexico City) | User inbound (PROMOTE) | https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210746060 | **Live** | High | **Promoted** | Stage 1 — `jpmorgan_market_product_expansion_treasury_vp_saopaulo_2026-06-11.md`; score **4.15** rank **8**; **preferred JPM SP** | Hold apply ~post-screen week |
| 2026-06-01 | J.P. Morgan | LATAM Payments Rails — Product Delivery Manager (VP) | VP (10+ yrs) | São Paulo, SP | LinkedIn / Oracle CX | https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210741903 | Live | High | **Promoted** | Stage 1 — `jpmorgan_..._saopaulo_2026-06-01.md`; score **4.10** rank **9**; second JPM option | Hold apply ~post-screen week |
| 2026-06-01 | J.P. Morgan | Payments EMEA Innovation Economy Sales (VP) | VP · Sales | Dubai, UAE | LinkedIn / Oracle CX | https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210751285 | Live | Low | **Promoted** | Stage 1 — `jpmorgan_..._dubai_2026-06-01.md`; score **3.40** rank 10; sales — skip vs SP | Apply before 2026-06-12 if ever |
| 2026-06-05 | Mercado Pago | Gerente de Engajamento Pequenas e Médias Empresas | Manager | São Paulo (hybrid) | LinkedIn inbound (PROMOTE) | https://www.linkedin.com/jobs/view/4419607407/ | Aggregator | High | **Promoted** | Applied (referral · **Ivan Renner**); **HR inbound** 2026-06-12 | Await HR next step |
| 2026-06-06 | N26 | Strategy & Operations Manager — Acquire | Manager | Barcelona, Spain | LinkedIn inbound (PROMOTE · cold apply) | https://www.linkedin.com/jobs/view/4423069027/ | Aggregator | Very high | **Promoted** | Stage 1 — `n26_..._barcelona_2026-06-06.md`; **Rejected no screen** 2026-06-11 | Track closed |
| 2026-06-08 | Revolut | Operations Manager (Revenue) | Manager | São Paulo · Madrid · Remote: Brazil · Spain | Revolut careers (mandatory scan) | https://www.revolut.com/careers/position/operations-manager-revenue-6970b9e3-e515-4b76-804b-9df9ce31296d/ | **Live** | High | Monitor | Geo pivot post-Dubai rejection; **Live** 2026-06-12 (403 bypass · en-BR indexed page · Brazil · SP · Madrid · Spain) | Reply Matt before geo-pivot apply |
| 2026-06-11 | Brex | Manager, Banking Operations | Manager (2+ yrs people mgr) | São Paulo (hybrid M/W/Th) | User inbound (PROMOTE · intel) | https://www.brex.com/careers/8580566002?gh_jid=8580566002 | **Live** | Low | **Promoted** | Stage 1 — `brex_manager_banking_operations_saopaulo_2026-06-11.md`; score **3.35** rank 12; **do not apply** — control ops / comp below floor | Intel only |
| 2026-06-11 | Tether | Expansion Manager — Tokenization | Manager (3–5 yrs) | Brazil · 100% remote | User inbound (PROMOTE) | https://careers.tether.io/o/expansion-manager-tokenization-100-remote-6 | **Live** | High | **Promoted** | Stage 1 — `tether_expansion_manager_tokenization_remote_brazil_2026-06-11.md`; score **4.20** rank **8**; Hadron RWA · hold BTG | No AI on apply |
| 2026-06-11 | Amazon | Sr Program Manager — Payment Business Operation LATAM | Sr Program Manager | São Paulo, SP | User inbound (PROMOTE) | https://www.amazon.jobs/en/jobs/10404183/sr-program-manager-payment-business-operation-latam | **Live** | High | **Promoted** | Applied **2026-06-12**; referral **Corrado Atzerri** in | Monitor applicant portal |
| 2026-06-11 | Amazon | Pricing & Payments Manager — Partner Strategy & Experience | Manager (people mgr) | Osasco SP · Rio RJ | User inbound (PROMOTE · intel) | https://www.amazon.jobs/en/jobs/10408004/pricing-payments-manager-partner-strategy-experience | **Live** | Low | **Promoted** | Stage 1 — `amazon_pricing_payments_manager_partner_strategy_brazil_2026-06-11.md`; score **3.40** rank **14**; Last Mile — **do not apply** | Skip vs 10404183 |

---

# Parking Lot

Raw leads and **company-level scans** (no target-titled role yet):

- **Tabby** (Dubai) — BNPL product/risk/commercial only; no S&O / Corp Dev / BizOps this scan → [tabby.ai/careers](https://tabby.ai/en-AE/careers) · re-scan quarterly
- **Stripe** (SP + Dubai) — no Manager S&O on Greenhouse SP or Dubai filter (498 jobs) → [stripe.com/jobs](https://stripe.com/jobs) · SP pass priority on rotation
- **dLocal** (SP) — Treasury Manager still stale; **Senior PM Cross-Border Operations** São Paulo live on Lever (product ops — outside S&O/Corp Dev); no Strategy Manager repost
- **Brex** (SP) — SP hub confirmed; **BizOps Senior Manager (Technical)** 8551745002 live (engineering-adjacent); Banking Ops 8580566002 PROMOTED intel → [brex.com/careers](https://www.brex.com/careers) · GH `brex`
- **Stone** (SP) — ~90% commercial AE/hunter; no Manager S&O/Corp Dev on jornada.stone.com.br this scan
- **CloudWalk** (São Paulo) — risk/data/eng only; CDB Strategy analyst below band → [jobs.lever.co/cloudwalk](https://jobs.lever.co/cloudwalk)
- **Bradesco** (SP) — official Gupy portal **0 open jobs** (2026-06-12); no Manager S&O/Corp Dev/payments strategy SP → talent pool only
- **Santander** (SP) — CIB trainee / commercial RM only; no Manager S&O/Corp Dev on Workday scan → [santander.com.br/hotsite/carreiras](https://www.santander.com.br/hotsite/carreiras)
- **PicPay** (SP) — Greenhouse board 404; post-IPO; no Corp Dev/Strategy Manager SP found
- Ripple MEA expansion (DIFC HQ opened Apr 2026; doubling regional team) — no Dubai strategy-titled roles found this scan; watch ripple.com/careers Dubai filter
- Careem — no strategy-titled roles on jobs.careem.com this scan; Senior Manager Business Finance (aggregator) adjacent only
- Plaid / Rapyd — remote global (secondary geo only)
- **Coinbase** — remote-heavy GH board; no Brazil SP Strategy (2026-06-12); remote-US Finance & Strategy only → [job-boards.greenhouse.io/coinbase](https://job-boards.greenhouse.io/coinbase)
- **Binance** — remote-global careers portal; no SP office postings typical → [binance.com/en/careers](https://www.binance.com/en/careers)
- **Circle** — LATAM Sr Manager Partner Management **filled** (CIICIRUSJR100929 · score **4.55** archived) — repost watch; MEA roles on aggregators still Monitor-only
- **Amazon** — LATAM Payments SPM **10404183** live (score **4.50** · apply this) vs Last Mile **10408004** skip (3.40) — big-tech rotation anchor pair

---

# Weekly Discovery Notes

## Week of 2026-06-12

**Scan method (SP-weighted 75/25):** `verify_discovery_links.py` + mandatory six + SP rotation — dLocal Lever · Brex · Coinbase · Stripe SP · pipeline re-verify (Visa · JPM · MP · EBANX). Dubai: Checkout mandatory · Visa pipeline.

**Link verification pass (2026-06-12):** 15 script checks — **Live: 9** · **Stale: 3** · **Unknown: 2** (Revolut 403). **Fallback:** en-BR indexed careers pages confirm S&O `e4b7c063` + OMR `6970b9e3` **Live** (Brazil · Sao Paulo · Madrid · Spain remote). Visa **Live** (Posted 30d · canApply). JPM Dubai sales VP **Live** — deadline **2026-06-12** (skip). MP Online Payments still **Aggregator** (0 Gerente on Eightfold).

**Companies checked (Company | Geo | Outcome):**
Nubank | SP | No SPG/Corp Dev/S&O SP; 7577975 closed (104 jobs)
Checkout.com | Dubai | No RevOps Dubai; External Affairs UAE live (214 Ashby)
Adyen | SP | 7913587 Alliances SP — **Live**
Revolut | Both | S&O + OMR — **Live** (403 bypass · en-BR search index · Brazil · SP · Madrid · Spain)
Itaú Unibanco | SP | Analyst strategy/AI/payments PJ only — parking lot
Bradesco | SP | Gupy portal 0 open jobs — parking lot
Visa | Dubai | REF082130W — **Live** (Workday CXS)
J.P. Morgan | Both | 210741903 · 210746060 · 210751285 — **Live** (Oracle REST)
Mercado Pago | SP | Engajamento SME **Live** Eightfold; Online Payments still no Gerente on ATS
EBANX | SP | 7718387003 — **Live**
Brex | SP | Banking Ops live (intel); BizOps Sr Manager Technical 8551745002 SP — engineering-adjacent
Coinbase | SP | No Brazil SP Strategy; remote-US Finance & Strategy only
dLocal | SP | No Strategy Manager repost; Sr PM Cross-Border Ops SP live (product — parking lot)
Stripe | SP | No Manager S&O SP/Brazil (Greenhouse)
Circle | SP | LATAM Sr Manager Partner Management **filled** — repost watch unchanged

**Mandatory scan results:** No Nubank SPG repost · no Checkout RevOps · Adyen live · Revolut live (fallback) · Itaú/Bradesco analyst-only or no Manager-band titles.

**Link status updates (2026-06-12):** None — Revolut rows already **Live**; re-confirmed via fallback.

**New rows added:** None.

**Top 3 queue (none set to Process now):**
1. Revolut — Operations Manager (Revenue) Brazil/Spain (`Live` → reply Matt before geo-pivot PROMOTE)
2. Mercado Pago — Gerente de Online Payments (`Aggregator` → no Gerente on Eightfold; LinkedIn 4206073378)
3. EBANX — Product Senior Manager \| Payments SP (`Live` → only if product strategy track intentional)

**Stale / uncertain flags:** MP Online Payments aggregator-only · PayPal · Wise · Ziina unchanged stale · JPM Dubai sales deadline today (skip).

**Geo coverage:** ~11 SP : 3 Dubai/Both (75/25 met). Gap: Stone SP not scanned today · PayPal Dubai rotation next.

**Next scan — São Paulo / Brazil:** Nubank · Adyen · Itaú · Bradesco (mandatory) · Stone · careers-meli MP Online Payments · **crypto rotation:** Kraken · Binance · Fireblocks · Tether repost watch

**Next scan — Dubai / UAE (lighter):** Checkout (mandatory) · Visa · rotate: PayPal / Mastercard / Ripple MEA

**Duplicates avoided:** All prior rows retained.

---

## Week of 2026-06-11

**Scan method (SP-weighted 75/25):** `verify_discovery_links.py` + mandatory six + SP rotation — Santander · PicPay · CloudWalk · Stripe SP · MP Eightfold (online payments) · Tamara (Dubai 25% slot). Dubai: Checkout mandatory · Visa pipeline.

**Link verification pass (2026-06-11):** 12 checks — **Live: 6** · **Stale: 3** · **Unknown: 2** (Revolut 403). Fallback: Revolut S&O + OMR **Live** (revolut.com/en-BR). Visa **Live** (Posted 29d). JPM Dubai sales VP **Live** — deadline **2026-06-12**.

**Companies checked (Company | Geo | Outcome):**
Nubank | SP | No SPG/Corp Dev/S&O SP; 7577975 closed (103 jobs)
Checkout.com | Dubai | No RevOps Dubai; External Affairs UAE live (214 Ashby)
Adyen | SP | 7913587 Alliances SP — **Live**
Revolut | Both | S&O + OMR — **Live** (403 bypass; Brazil · SP · Madrid)
Itaú Unibanco | SP | Analyst strategy/AI only — parking lot
Bradesco | SP | No Manager S&O/Corp Dev — parking lot
Santander | SP | Trainee CIB / commercial only — parking lot
PicPay | SP | Greenhouse 404 — parking lot
CloudWalk | SP | CDB Strategy analyst only — parking lot
Stripe | SP | No Manager S&O SP/Brazil (497 jobs)
Mercado Pago | SP | Engajamento SME **Live** Eightfold; Online Payments still no Gerente on ATS
EBANX | SP | 7718387003 — **Live**
J.P. Morgan | SP | 210741903 — **Live**
Tamara | Dubai | No partnerships/commercial/strategy Dubai (32 EU GH jobs)
Visa | Dubai | REF082130W — **Live** (Workday CXS)

**Mandatory scan results:** Same as prior — no Nubank SPG repost · no Checkout RevOps · Adyen live · Revolut live (fallback) · Itaú/Bradesco analyst-only or no Manager-band titles.

**Link status updates (2026-06-11):** None — all unchanged from 2026-06-10.

**New rows added:** None.

**Top 3 queue (none set to Process now):**
1. Revolut — Operations Manager (Revenue) Brazil/Spain (`Live` → reply Matt before geo-pivot PROMOTE)
2. Mercado Pago — Gerente de Online Payments (`Aggregator` → no Gerente on Eightfold; LinkedIn 4206073378)
3. EBANX — Product Senior Manager \| Payments SP (`Live` → only if product strategy track intentional)

**Stale / uncertain flags:** MP Online Payments aggregator-only · PayPal · Wise · Ziina unchanged stale.

**Geo coverage:** ~10 SP : 2 Dubai (75/25 met). Next SP gap: dLocal Strategy repost · Stone re-scan.

**Next scan — São Paulo / Brazil:** Nubank · Adyen · Itaú · Bradesco (mandatory) · dLocal Lever · Stone · careers-meli MP Online Payments · **crypto rotation (pick 1–2): Brex · Coinbase · Circle · Binance · Kraken · Fireblocks**

**Next scan — Dubai / UAE (lighter):** Checkout (mandatory) · Visa · rotate: PayPal / Mastercard · Circle/Fireblocks/Ripple MEA on crypto rotation

**Duplicates avoided:** All prior rows retained.

---

## Week of 2026-06-10

**Scan method (latest — SP-weighted 75/25):** `verify_discovery_links.py` + mandatory six + SP rotation — dLocal Lever · CloudWalk · Stripe **SP only** · MP Eightfold (corp dev / online payments) · Stone · EBANX confirm · JPM SP. Dubai light: Checkout (mandatory) · Visa pipeline. **Skipped Dubai rotation:** PayPal · Tamara · Fireblocks · Ripple (defer per geo weight).

**Link verification pass (2026-06-10):** 12 script checks — **Live: 6** · **Stale: 3** · **Unknown: 2** (Revolut 403). Fallback: Revolut S&O + OMR **Live** (revolut.com mirrors). ML Corp Dev **Live** on Eightfold job/38908589 (discovery row updated).

**Companies checked (Company | Geo | Outcome):**
Nubank | SP | No SPG/Corp Dev/S&O SP; 7577975 closed (104 jobs)
Checkout.com | Dubai | No RevOps Dubai; External Affairs UAE live (216 Ashby)
Adyen | SP | 7913587 Alliances SP — **Live**
Revolut | Both | S&O + OMR — **Live** (403 bypass; Brazil · Spain · SP · Madrid)
Itaú Unibanco | SP | Analyst strategy / AI / payments PJ TI only — parking lot
Bradesco | SP | No Manager S&O/Corp Dev on portal — parking lot
dLocal | SP | Treasury stale; Senior PM Cross-Border Ops SP live (product — not added)
CloudWalk | SP | CDB Strategy analyst only — parking lot
Stripe | SP | No Manager S&O SP/Brazil (498 jobs; Dubai not scanned this pass)
Mercado Livre | SP | Corp Dev Gerente **Live** Eightfold 38908589 (applied track)
Mercado Pago | SP | Engajamento SME **Live** Eightfold; Online Payments still no Gerente on ATS
Stone | SP | Commercial-heavy board; no Manager S&O/Corp Dev
EBANX | SP | 7718387003 — **Live**
J.P. Morgan | SP | 210741903 — **Live** (Oracle REST)
Visa | Dubai | REF082130W — **Live** (Workday CXS)

**Mandatory scan results:**
- **Nubank:** no SPG / Corp Dev / S&O SP match. SPG (7577975) still closed.
- **Checkout:** no RevOps / Commercial Strategy Partner Dubai. External Affairs UAE still live.
- **Adyen:** job **7913587 — São Paulo LIVE**.
- **Revolut:** **403** on curl; both IDs **Live** via fallback.
- **Itaú:** analyst-level only — no Manager-band S&O/Corp Dev/payments strategy SP.
- **Bradesco:** no Manager S&O/Corp Dev/payments strategy SP.

**Link status updates (2026-06-10):** Mercado Livre Corp Dev — **Aggregator → Live** (Eightfold 38908589). Revolut OMR — **Live** (re-confirmed). MP Online Payments — unchanged **Aggregator**.

**New rows added:** None.

**Top 3 queue (none set to Process now):**
1. Revolut — Operations Manager (Revenue) Brazil/Spain (`Live` → reply Matt before geo-pivot PROMOTE)
2. Mercado Pago — Gerente de Online Payments (`Aggregator` → no Gerente hit on Eightfold; LinkedIn 4206073378 only)
3. EBANX — Product Senior Manager \| Payments SP (`Live` → only if product strategy track intentional)

**Stale / uncertain flags:** MP Online Payments aggregator-only · PayPal · Tamara · Wise · Ziina unchanged stale · dLocal Treasury stale.

**Geo coverage:** Rotation ~9 SP : 2 Dubai (75/25 target met). Gap: Santander bank SP rotation next.

**Next scan — São Paulo / Brazil:** Nubank · Adyen · Itaú · Bradesco (mandatory) · Santander · PicPay · careers-meli MP Online Payments · dLocal Strategy repost watch

**Next scan — Dubai / UAE (lighter):** Checkout (mandatory) · Visa verify · rotate one: PayPal / Tamara / Mastercard

**Duplicates avoided:** ML Corp Dev Already processed; Revolut Dubai rejected; all prior rows retained.

---

## Week of 2026-06-08

**Scan method:** Mandatory Nubank · Checkout · Adyen · Revolut (APIs + careers) + rotation — Stripe **Both**, Tamara, PayPal, Wise, dLocal Lever, EBANX confirm, Ziina status, Mercado Pago careers, Bradesco (bank rotation).

**Companies checked (Company | Geo | Outcome):**
Nubank | SP | No SPG/Corp Dev/S&O SP; 7577975 still closed; POM III collections only
Checkout.com | Dubai | No RevOps/Commercial Strategy Dubai; External Affairs UAE live
Adyen | SP | 7913587 Alliances SP — **Live**
Revolut | Both | S&O Manager + OMR Brazil/Spain — careers **403**; OMR row added Unknown
Stripe | Both | No Manager S&O Dubai or SP/Brazil (482 jobs)
Tamara | Dubai | No partnerships/commercial/strategy Dubai (35 jobs)
PayPal | Dubai | careers.pypl.com **403**; prior stale retained
Wise | Dubai | JID-2500 expired signals re-confirmed (79652B page)
dLocal | SP | Treasury stale; Corp Dev talent pool Montevideo only
EBANX | SP | 7718387003 Product Sr Manager — **Live**
Ziina | Dubai | FP&A 4650048101 **404 — stale re-confirmed**
Mercado Pago | SP | careers-meli 404; Online Payments still aggregator-only
Bradesco | SP | No public Manager S&O/Corp Dev — parking lot

**Mandatory scan results:**
- **Nubank:** no SPG / Corp Dev / S&O SP match. SPG (7577975) still closed. Only hit: Product Operations Manager III (7158412) — collections scope; not added.
- **Checkout:** no RevOps / Commercial Strategy Partner Dubai. Ashby 215 jobs; Manager External Affairs UAE still live. RevOps archived row unchanged.
- **Adyen:** job **7913587 Senior Alliances Partner Manager — São Paulo LIVE**.
- **Revolut:** mandatory Brazil · Spain pass — direct careers fetch **403 Forbidden**; known job IDs unchanged (S&O `e4b7c063` Live per prior scan; OMR `6970b9e3` added as **Need more info**). Coordinate Matt before geo-pivot apply.

**Link status updates (2026-06-08):** Ziina FP&A — **Stale re-confirmed** (404). Wise Banking Expansion — **Stale re-confirmed** (expired page signals). Revolut OMR — **Unknown** (new row). PayPal · Tamara · dLocal Treasury — unchanged stale.

**New rows added:** Revolut Operations Manager (Revenue) — Brazil/Spain geo pivot watch (`Unknown` link — verify manually).

**Top 3 queue (validate Link status before PROMOTE — none set to Process now):**
1. Mercado Pago — Gerente de Online Payments (`Aggregator` → confirm on careers-meli)
2. EBANX — Product Senior Manager \| Payments SP (`Live` → only if product strategy track intentional)
3. Revolut — Operations Manager (Revenue) Brazil/Spain (`Unknown` → verify live + Matt OK before PROMOTE)

**Stale / uncertain flags:** Ziina · Wise re-confirmed stale · Revolut OMR unverified (403) · PayPal 403 · Mercado Pago Online Payments aggregator-only · Tamara unchanged stale.

**Next scan — Dubai / UAE:** Checkout Ashby (mandatory) · PayPal careers retry · Tamara Commercial Dubai · Fireblocks MENA · Ripple post-DIFC · Mastercard R-276740 confirm

**Next scan — São Paulo / Brazil:** Nubank · Adyen (mandatory) · careers-meli MP Strategy/Online Payments · dLocal Lever Strategy repost · Itaú bank rotation · post-BTG HR debrief (2026-06-08)

**Duplicates avoided:** Revolut S&O Manager (Already processed · Dubai rejected); all prior rows retained.

---

## Week of 2026-06-04

**Scan method:** Mandatory Nubank · Checkout · Adyen (APIs) + rotation — Tamara, Stripe Both, Wise, PayPal, Fireblocks, Ripple, Mastercard, Mercado Pago, dLocal Lever, Itaú (bank rotation), EBANX confirm, Ziina status.

**Companies checked (Company | Geo | Outcome):**
Nubank | SP | No SPG/Corp Dev/S&O SP; 7577975 closed
Checkout.com | Dubai | No RevOps/Commercial Strategy Dubai; External Affairs UAE live on Ashby
Adyen | SP | 7913587 Alliances SP — **Live**
Tamara | Dubai | No partnerships/commercial/strategy Dubai (40 jobs)
Stripe | Both | No Manager S&O Dubai or SP/Brazil on Greenhouse (485 jobs)
Wise | Dubai | JID-2500 expired (re-confirmed)
PayPal | Dubai | careers.pypl.com timeout; prior stale retained
Fireblocks | Dubai | No Dubai office on GH; no MENA strategy role
Ripple | Dubai | Staff Partner Engineer Dubai only; no strategy/partnerships
Mastercard | Dubai | No strategy results on careers portal
Mercado Pago | SP | Online Payments LinkedIn-only; careers-meli SPA
dLocal | SP | Treasury Manager stale; Corp Dev talent pool only
Itaú | SP | Analyst strategy/product only — parking lot
EBANX | SP | 7718387003 Product Sr Manager live
Ziina | Dubai | FP&A 4650048101 **404 — stale**

**Mandatory scan results:**
- **Nubank:** no SPG / Corp Dev / S&O SP match. SPG (7577975) still closed. Only hit: Product Operations Manager III (7901851) — collections scope; not added.
- **Checkout:** no RevOps / Commercial Strategy Partner Dubai. Ashby 214 jobs; Manager External Affairs UAE still live. RevOps archived row unchanged.
- **Adyen:** job **7913587 Senior Alliances Partner Manager — São Paulo LIVE**.

**Link status updates (2026-06-04):** Ziina FP&A — **Stale** (Greenhouse EU 404). dLocal Treasury Manager — **Stale** (Lever 404, not on board). Wise · Tamara · PayPal — unchanged stale.

**New rows added:** None.

**Top 3 queue (validate Link status before PROMOTE — none set to Process now):**
1. Mercado Pago — Gerente de Online Payments (`Aggregator` → confirm on careers-meli)
2. EBANX — Product Senior Manager \| Payments SP (`Live` → only if product strategy track intentional)
3. Checkout.com — Manager, External Affairs UAE (`Live` → scheme/network; compare vs RevOps watchlist)

**Stale / uncertain flags:** Ziina FP&A newly stale · dLocal Treasury newly stale · Wise · Tamara · PayPal unchanged. Mercado Pago Online Payments still aggregator-only.

**Next scan — Dubai / UAE:** Checkout Ashby (mandatory) · PayPal careers.pypl.com retry · Tamara Commercial Dubai · Fireblocks if MENA posting · Ripple post-DIFC · Ziina repost watch

**Next scan — São Paulo / Brazil:** Nubank · Adyen (mandatory) · careers-meli MP Strategy/Online Payments · dLocal Lever Strategy repost · Bradesco bank rotation · post-BTG HR call (2026-06-08)

**Duplicates avoided:** All prior rows retained.

---

## Week of 2026-06-01

**Scan method:** Mandatory Nubank · Checkout · Adyen (APIs) + rotation — EBANX, Ziina, dLocal Lever, Tamara, Wise wise.jobs, Stripe Dubai/strategy, CloudWalk Lever; PayPal careers timeout (prior stale retained); parking-lot re-confirm Tabby/Stone/Ripple/Careem unchanged.

**Companies checked (Company | Geo | Outcome):**
Nubank | SP | No SPG/Corp Dev/S&O; 7577975 closed
Checkout.com | Dubai | No RevOps/Commercial Strategy Dubai
Adyen | SP | 7913587 live
EBANX | SP | Product Sr Manager Payments live
Ziina | Dubai | FP&A Manager; no new S&O
dLocal | SP | Corp Dev pool; no Strategy Manager repost
Tamara | Dubai | No partnerships Dubai; stale
Wise | Dubai | JID-2500 expired
Stripe | Dubai | No Manager S&O Dubai (SP not scanned — gap)
CloudWalk | SP | No Manager strategy
PayPal | Dubai | Stale; careers timeout
Tabby | Dubai | Parking lot no S&O
Stone | SP | Parking lot
Ripple | Dubai | Parking lot
Careem | Dubai | Parking lot
Mercado Pago | SP | Aggregator only
Mastercard | Dubai | Aggregator only
Fireblocks | Dubai | Aggregator only

*Template: use Geo = Dubai | SP | Both per `AI/job_discovery_workflow.md`. Prior run had gaps (e.g. Stripe SP); future runs must use explicit geo column.*

**Mandatory scan results:**
- **Nubank:** no SPG / Corp Dev / S&O SP match. SPG (7577975) still closed. Only title hit: Product Operations Manager III (7901851) — collections scope; not added.
- **Checkout:** no RevOps / Commercial Strategy Partner Dubai. Ashby 211 jobs; Scheme GTM Partnerships NY only. RevOps archived row unchanged.
- **Adyen:** job **7913587 Senior Alliances Partner Manager — São Paulo LIVE** (mapped in applications tracker).

**Link status updates (2026-06-01):** Wise Banking Expansion — **Stale re-confirmed** (wise.jobs JID-2500 expired). Tamara Channel Partnership — **Stale re-confirmed** (no Commercial/Partnerships Manager Dubai on Tamara board; 34 jobs). Stripe Embedded Finance DXB — still no Manager S&O on stripe.com Dubai filter.

**New rows added:** None.

**Top 3 queue (validate Link status before PROMOTE — none set to Process now):**
1. Mercado Pago — Gerente de Online Payments (`Aggregator` → confirm on careers-meli)
2. Ziina — FP&A Manager (`Live` → validate strategic finance vs pure FP&A scope)
3. EBANX — Product Senior Manager \| Payments SP (`Live` → only if product strategy track intentional)

**Stale / uncertain flags:** Wise · Tamara · PayPal (unchanged). Mercado Pago Online Payments still aggregator-only.

**Next scan — Dubai / UAE:** Checkout Ashby (mandatory) · PayPal careers.pypl.com · Tamara Commercial Dubai · Fireblocks careers · Ripple post-DIFC · Mastercard careers R-276740 confirm

**Next scan — São Paulo / Brazil:** Nubank · Adyen (mandatory) · careers-meli MP Strategy/Online Payments · dLocal Lever Strategy repost · BTG post HR call (2026-06-01)

**Duplicates avoided:** All prior rows retained.

---

## Week of 2026-05-31

**Scan method:** Mandatory Nubank · Checkout · Adyen (Greenhouse/Ashby APIs) + backlog rotation — PayPal, Tamara, Wise, Fireblocks, Stripe Dubai, dLocal Lever, Mercado Pago LinkedIn/careers, Ripple MEA signal.

**Mandatory scan results:**
- **Nubank:** no SPG / Corp Dev / S&O SP match. SPG (7577975) still closed. Live SP role: Product Operations Manager III (7901851) — collections/agency scope; not added (outside target role family).
- **Checkout:** no RevOps / Commercial Strategy Partner Dubai. Ashby: 215 jobs; only Scheme GTM Partnerships (NY). RevOps archived row unchanged.
- **Adyen:** job **7913587 Senior Alliances Partner Manager — São Paulo LIVE** (mapped in applications tracker).

**Link status updates (2026-05-31):** Wise Banking Expansion — **Stale confirmed** (wise.jobs JID-2500 expired). PayPal Sr Manager Partnerships — **Stale** (Weekday only). Tamara Channel Partnership — **Stale confirmed** (4785885101 removed; not on official board).

**New rows added:** None.

**Top 3 queue (validate Link status before PROMOTE — none set to Process now):**
1. Mercado Pago — Gerente de Online Payments (`Aggregator` → confirm on careers-meli)
2. Ziina — FP&A Manager (`Live` → validate strategic finance vs pure FP&A scope)
3. EBANX — Product Senior Manager \| Payments SP (`Live` → only if product strategy track intentional)

**Stale / uncertain flags:** Tamara · PayPal · Wise (all confirmed stale). Mercado Pago Online Payments still aggregator-only. Stripe Embedded Finance DXB still closed; Stripe Dubai office has compliance/CRO roles only — no Manager S&O.

**Next scan — Dubai / UAE:**
- Checkout Ashby (mandatory)
- PayPal careers.pypl.com — partnerships / GTM Dubai
- Tamara Greenhouse Commercial Dubai
- Fireblocks.com/careers — Dubai filter
- Ripple careers — post-DIFC HQ hiring wave
- Mastercard careers — confirm Director Strategy R-276740

**Next scan — São Paulo / Brazil:**
- Nubank Greenhouse (mandatory)
- Adyen Greenhouse (mandatory) — confirm 7913587
- careers-meli.mercadolibre.com — MP Strategy / Online Payments
- dLocal Lever — Strategy repost watch
- BTG post HR call debrief (2026-06-01)

**Duplicates avoided:** All prior rows retained; no re-add of promoted/archived roles.

---

## Week of 2026-05-27

**Scan method:** Backlog rotation — Mastercard, Stripe, Tabby, Tamara, Careem, Mercado Pago, Nubank (no new SP strategy beyond partnership), Stone, CloudWalk, dLocal, Fireblocks, PayPal, Wise status check. Queries from `target_search_queries.md` company + geo sections.

**New rows added (2026-05-27):** Mercado Pago Gerente Online Payments · MP Big Sellers Planning · Tamara Channel Partnership · PayPal Sr Manager Partnerships · Mastercard Director Strategy & Performance · Mastercard Director Commercial Acceptance · Fireblocks Business Solutions Director MENA.

**Top 3 queue (validate Link status before PROMOTE — none set to Process now yet):**
1. Mercado Pago — Gerente de Online Payments (`Aggregator` → confirm on careers-meli)
2. Tamara — Channel Partnership Manager (`Stale` → confirm Greenhouse repost)
3. PayPal — Sr Manager Partnerships (`Unknown` → find official careers link)

**Link status pass (2026-05-27):** Added `Link status` column to all rows. Stale: Wise Banking Expansion, dLocal Strategy, Stripe Embedded Finance DXB, Tamara Greenhouse, **Nubank SPG (7577975 — removed ~Mar 25)**. Aggregator-only: Mastercard Director roles, most LinkedIn leads.

**Nubank (2026-05-27):** SPG Senior Specialist verified closed. Application archived. **Mandatory Nubank Greenhouse scan added to RUN_DISCOVERY** — watch for SPG / Corp Dev / S&O repost.

**Next scan — Dubai / UAE:**
- **Checkout Ashby (mandatory every scan):** RevOps · Commercial Strategy Partner · Revenue Operations — `ashby-careers-checkout-production.up.railway.app/api/jobs`
- Visa careers portal (verify SM Product Strategy live)
- PayPal careers — Sr Manager Partnerships
- Tamara Greenhouse — Commercial / Partnerships Dubai
- Fireblocks.com/careers — Dubai Business Operations / Corporate Strategy
- Ripple careers — Dubai (post-DIFC expansion)

**Next scan — São Paulo / Brazil:**
- **Nubank Greenhouse (mandatory every scan):** SPG · Corp Dev · S&O · BizOps — `job-boards.greenhouse.io/nubank` + API
- **Adyen Greenhouse (mandatory every scan):** Alliances · Partnerships · Strategy SP — confirm job 7913587 live
- careers-meli.mercadolibre.com — Mercado Pago Strategy / Online Payments / Planejamento
- Stone / CloudWalk — strategy-titled roles (see Parking Lot)
- dLocal Lever — Strategy repost watch
- BTG `carreiras.btgpactual.com` — post Ana Clara HR call (2026-06-01)

**Secondary (opportunistic):** Remote global Plaid, Rapyd · **crypto/stablecoin rotation:** Brex, Coinbase, Circle, Binance, Kraken, Fireblocks, Ripple, Tether, OKX, Bybit (SP + remote — see `AI/job_discovery_workflow.md`)

**Duplicates avoided:** All prior rows unchanged; Mercado Livre Corp Dev remains Already processed (Mercado Pago is separate entity track).

---

## Week of 2026-05-26

**Scan method:** Target queries from `target_search_queries.md` — company-specific (Visa, Checkout, Wise, Nubank, dLocal, Airwallex, Circle, Ziina, EBANX, Getnet) + Greenhouse geo queries.

**Top 3 to PROMOTE (when ready):**
1. *(re-scan Dubai — Checkout RevOps promoted but paused; no live posting)*
2. *(Monitor: Wise Banking Expansion, dLocal Strategy if validated)*
3. *(third slot — next discovery scan)*

**Uncertainties flagged:**
- Several aggregator links (Remote DXB, Dr.Job, jobuae24h) — confirm on official careers before PROMOTE
- dLocal Strategy Manager on Otta may be closed; Treasury Manager on Lever is active SP
- Stripe Embedded Finance DXB listing appears closed
- PGWay Middle East role is Portugal-based, not Dubai

**Duplicates avoided:** Revolut, Mercado Livre, Adyen unchanged as Already processed.

**Promoted 2026-05-26:** Visa → `visa_..._dubai_2026-05-26.md` · Nubank → `nubank_..._saopaulo_2026-05-26.md` · Checkout RevOps → `checkout_revops_commercial_strategy_partner_dubai_2026-05-26.md` (paused — listing removed) · **BTG inbound** → `btg_operations_transformation_inbound_saopaulo_2026-05-26.md`

**BTG SP scan (2026-05-26):** No public Manager/Sr Manager Strategy, Corp Dev, or BizOps titles found; careers portal is JS-only (manual filter required). Inbound HR lead is the actionable path. Public analyst postings are mostly below seniority band or wrong function (data eng, credit ops). Tier-3 bank per `target_companies.md` — pursue only with digital/transformation scope.
