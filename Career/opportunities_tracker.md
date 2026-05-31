# Opportunities Tracker

> **Discovery layer only** — pre-screened leads before `AI/prompt_library.md` §1.
> Daily scan: **`RUN_DISCOVERY`** → `AI/snippets/RUN_DISCOVERY.md` · Workflow: `AI/job_discovery_workflow.md`
> Queries: `Career/Opportunities/target_search_queries.md` · Handoff: **`PROMOTE`** → §1 + applications tracker
> **Opportunities canvas:** `AI/canvases/opportunities-tracker.canvas.tsx` (auto-sync from this file — @-tag in chat)
> **Applications canvas:** `AI/canvases/applications-tracker.canvas.tsx` (from `Career/applications_tracker.md` only)

**Last scan:** 2026-05-31 · Geographies: Dubai/UAE + São Paulo/Brazil (equal priority)

---

# Status Logic

| Decision | Meaning |
|---|---|
| Process now | Link validated on official source; ready for **PROMOTE / §1 this week** |
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
| 2026-05-25 | Revolut | Strategy & Operations Manager — Revenue Team | Manager | UAE / Dubai | Recruiter | https://www.revolut.com/careers/position/strategy-operations-manager-e4b7c063-41c5-4afc-8031-2323db04b9f7/ | Live | Very high | Already processed | In tracker rank 1 | Follow up Matt |
| 2026-05-25 | Mercado Livre | Gerente de Estratégia & Desenvolvimento Corporativo | Manager | São Paulo | LinkedIn / referral | https://www.linkedin.com/jobs/view/4412835253/ | Aggregator | High | Already processed | In tracker rank 2 | ML friend intel |
| 2026-05-25 | Adyen | Senior Alliances Partner Manager | Senior Manager | São Paulo | Greenhouse | https://job-boards.greenhouse.io/adyen/jobs/7913587 | Live | High | Already processed | In tracker rank 3 | Await contact |
| 2026-05-26 | Visa | Senior Manager, Product Strategy and Planning | Senior Manager | Dubai / UAE (hybrid) | Visa Workday | https://visa.wd5.myworkdayjobs.com/en-US/Visa/job/AE---Dubai-United-Arab-Emirates/Senior-Manager--Product-Strategy-and-Planning_REF082130W | **Live** | Very high | Promoted | Stage 1 — `visa_..._dubai_2026-05-26.md`; verified REF082130W 2026-05-27 | Apply on Workday |
| 2026-05-26 | Checkout.com | RevOps & Commercial Strategy Partner | Manager-equivalent | Dubai, UAE | Built In | https://builtin.com/job/revops-commercial-strategy-partner/6776498 | **Stale** | High | Promoted | Stage 1 archived — `checkout_..._dubai_2026-05-26.md`; removed Oct 2025; **verified closed 2026-05-27** (Ashby API) | Monitor Ashby board for repost |
| 2026-05-26 | Nubank | General Strategic Partnership Profile — Senior Specialist | Senior Specialist (~Manager) | São Paulo | Nubank careers / Greenhouse | https://job-boards.greenhouse.io/nubank · old ID 7577975 | **Stale** | High | Promoted | Stage 1 archived — `nubank_..._saopaulo_2026-05-26.md`; removed ~Mar 25 2026 | **Daily scan:** Greenhouse SPG / Corp Dev / S&O SP |
| 2026-05-26 | Wise | Senior Banking & Expansion Manager | Senior Manager | Dubai, UAE | Fintech Careers / Built In | https://wise.jobs/job/senior-banking-and-expansion-manager-in-dubai-jid-2500 | Stale | High | Monitor | Payments infra + VARA entity launch; **verified expired on wise.jobs 2026-05-31** | Monitor wise.jobs for repost; deprioritize unless relisted |
| 2026-05-26 | Ziina | FP&A Manager | Manager | Dubai, UAE | Greenhouse EU | http://job-boards.eu.greenhouse.io/ziina/jobs/4650048101 | Live | Medium | Monitor | Strategic finance at MENA fintech; founding FP&A — adjacent to Corp Dev/strategic finance | Validate seniority scope; run §1 if comp/strategy angle confirmed |
| 2026-05-26 | dLocal | Strategy Manager (Strategic Alignment & Execution) | Manager / Sr Manager | Unclear — likely Montevideo hub; Brazil possible | Welcome to the Jungle | https://app.welcometothejungle.com/jobs/b1rQUnVA | Stale | High | Need more info | Chief-of-staff-style strategy & ops | Re-check Lever/careers monthly; high fit if reposted |
| 2026-05-26 | dLocal | Treasury Manager | Manager | São Paulo (hybrid) | Lever | https://jobs.lever.co/dlocal/7cba81c3-4726-498b-8eb3-9ac1106ed51a | Live | Medium | Monitor | Payments treasury; strategic finance exposure; not core strategy track | Only if strategic finance path is priority |
| 2026-05-26 | EBANX | Product Senior Manager \| Payments | Senior Manager | São Paulo or Curitiba (on-site) | Greenhouse | https://job-boards.greenhouse.io/ebanx/jobs/7718387003 | Live | Medium | Monitor | Strong payments product leadership; less Corp Dev/S&O — good brand | Run §1 only if product strategy track is intentional |
| 2026-05-26 | Airwallex | Head of Middle East | Head / GM-level | Dubai | Airwallex careers | https://careers.airwallex.com/job/4e28592b-90b8-4b4c-adcd-1ec73d31fbc7/head-of-middle-east/ | Live | Medium | Monitor | P&L + regional strategy; likely **above** target seniority | Only if willing to pursue GM-track |
| 2026-05-26 | Circle | VP, Regional Strategy — Middle East & Africa | VP (IC) | Dubai / UAE (remote) | Built In | http://builtin.com/job/vp-regional-strategy-middle-east-africa/8570152 | Aggregator | Medium | Monitor | Stablecoin infra strategy; **14+ yrs** — likely stretch | Monitor unless inbound/referral |
| 2026-05-26 | Circle | Director, Partner Management — MEA | Director | UAE | Web3.career | https://web3.career/director-partner-management-mea-circle/92373 | Aggregator | Medium | Monitor | Partnerships/crypto; senior; strategic commercial | Same as above |
| 2026-05-26 | Checkout.com | Manager, External Affairs — UAE | Manager | Dubai | Welcome to the Jungle | https://www.welcometothejungle.com/en/companies/checkout-com-1/jobs/manager-external-affairs-uae_dubai_uyb472wc | Live | Medium | Monitor | Scheme/network partnerships; more commercial RM than strategy | Compare vs RevOps role; likely one Checkout path |
| 2026-05-26 | OpenFX | Product Manager, Payments | Manager (PM) | Dubai listed among hubs | Greenhouse | http://job-boards.greenhouse.io/openfx/jobs/5071725008 | Live | Medium | Ignore | Cross-border payments infra — **product manager**, not S&O/Corp Dev | Skip unless pivoting to product strategy |
| 2026-05-26 | Visa | Strategy Analyst (CEMEA — CISSEE market) | Analyst | Dubai | Dr.Job | https://drjobs.ae/jobs/strategy-analyst-cissee-market-experience-dubai-visa-MPBU6ULN01W6GAC | Aggregator | Low | Ignore | Corp strategy team but **analyst** seniority + CISSEE requirement | Below target band |
| 2026-05-26 | Visa | Director, CoE — Strategy and Execution | Director | Dubai | Aggregator | https://jobuae24h.com/director-coe-strategy-and-execution-job158747 | Aggregator | Medium | Monitor | Strategy execution; **12+ yrs** — likely too senior | Only with strong referral |
| 2026-05-26 | Wise | Compliance Senior Manager — Digital Assets | Senior Manager | Dubai | Fintech Careers | https://www.fintechcareers.com/job/28699/compliance-senior-manager-digital-assets-dubai/ | Aggregator | Low | Ignore | Compliance/regulatory — not operator-strategy destination | Market signal only |
| 2026-05-26 | Getnet | Corporate Commercial Specialist | Specialist | São Paulo | Greenhouse EU | https://job-boards.eu.greenhouse.io/getnet/jobs/4838231101 | Live | Low | Ignore | Commercial hunter/farmer corporate sales | Outside role family |
| 2026-05-26 | Airwallex | Sales Manager, SME & Growth | Manager | Dubai | Airwallex careers | https://careers.airwallex.com/job/0e491f38-2e78-4c7d-afe0-8a5b0700d054/sales-manager-sme-growth/ | Live | Low | Ignore | Pure commercial sales leadership | Penalized per discovery rules |
| 2026-05-26 | Stripe | Strategy & Operations, Embedded Finance | Manager-equivalent | Remote DXB (uncertain) | Remote DXB | https://www.remotedxb.com/job/strategy-operations-embedded-finance-stripe | Stale | High | Need more info | Ideal role family — DXB embedded finance track | Check stripe.com/jobs for UAE/Dubai S&O |
| 2026-05-26 | PGWay | Payments Manager (Middle East) | Manager | GCC — **office Portugal** | Greenhouse EU | https://job-boards.eu.greenhouse.io/pgway/jobs/4815455101 | Live | Medium | Ignore | Payments/GTM — geo mismatch for SP/Dubai priority | Unless remote UAE acceptable |
| 2026-05-26 | BTG Pactual | Operations Transformation (inbound — multiple roles TBD) | TBD (target Manager+) | São Paulo (assumed) | WhatsApp HR — Ana Clara; ref. João Torneli | https://carreiras.btgpactual.com/vagas | Live | High | **Promoted** | Stage 1 + HR prep — `btg_operations_transformation_inbound_saopaulo_2026-05-26.md`; tracker rank 3 | HR call tent. 2026-06-01; prep + João debrief |
| 2026-05-26 | BTG Pactual | Analista de Soluções Júnior, Processo e IA | Analyst (below band) | São Paulo | Aggregator / careers | https://pitchmeai.com/jobs/btg-pactual/analista-de-solucoes-junior-processo-e-ia-l5xmy3pp2p | Aggregator | Medium | Ignore | Transformation-adjacent but **Jr + IA builder**; wrong seniority | Only if inbound maps here — else skip |
| 2026-05-26 | BTG Pactual | Analista de Produtos — Conta Corrente (foco IA) | Analyst | São Paulo (Av. Paulista presencial) | Aggregator | https://bebee.com/br/jobs/analista-de-produtos-conta-corrente-foco-em-ia-btg-pactual-sao-paulo-sao-paulo--theirstack-681691144 | Aggregator | Medium | Monitor | Digital banking product — relevant industry, **not** target role family | Compare to inbound scope; run §1 only if Manager+ product strategy |
| 2026-05-26 | BTG Pactual | Strategy and Business Management Analyst (B2B partner offices) | Analyst | São Paulo | Aggregator (expired ref.) | https://pitchmeai.com/jobs/btg-pactual/strategy-and-business-management-analyst-a6jxzbn265 | Stale | Low | Ignore | Internal consultancy to partner offices; analyst; wealth B2B — not fintech operator | Market signal only |
| 2026-05-26 | BTG Pactual | Analista de Operações (Credit Operations Digital) | Analyst | São Paulo | Press/careers scan | https://carreiras.btgpactual.com/vagas | Live | Low | Ignore | Back-office ops — conflicts with positioning | Skip |
| 2026-05-26 | BTG Pactual | Engenheiro(a) de Dados — Data Analytics | Specialist | São Paulo (hybrid 3x) | Aggregator | https://echojobs.io/job/btg-pactual-engenheiro-a-de-dados-dados-tmovo | Aggregator | Low | Ignore | Technical data engineering — outside role family | Skip |
| 2026-05-27 | Mercado Pago | Gerente de Negócios Cripto | Manager | São Paulo | LinkedIn (PROMOTE inbound) | https://www.linkedin.com/jobs/view/4408443201/ | Aggregator | Very high | **Promoted** | Stage 1 done — `mercadopago_gerente_negocios_cripto_saopaulo_2026-05-27.md`; tracker rank 3; score 4.40 | Coordinate ML referrer before apply |
| 2026-05-27 | Mercado Pago | Gerente de Online Payments | Manager | São Paulo | LinkedIn | https://br.linkedin.com/jobs/view/gerente-de-online-payments-mercado-pago-at-mercado-livre-brasil-4206073378 | Aggregator | High | Monitor | Payments product/strategy leadership at MELI fintech arm — distinct from ML Corp Dev (already processed) | Confirm live on careers-meli.mercadolibre.com; compare vs ML path |
| 2026-05-27 | Mercado Pago | Especialista de Planejamento e Estratégia em Big Sellers | Specialist (~Manager scope) | São Paulo | LinkedIn | https://br.linkedin.com/jobs/view/especialista-de-planejamento-e-estratégia-em-big-sellers-mercado-pago-at-mercado-livre-brasil-4212096464 | Aggregator | Medium | Monitor | Strategic planning for enterprise sellers; adjacent to S&O — title below Manager band | Validate seniority + posting status on official careers |
| 2026-05-27 | Tamara | Channel Partnership Manager | Manager | Dubai, UAE | Greenhouse EU | https://job-boards.eu.greenhouse.io/tamara | Stale | High | Monitor | GCC BNPL unicorn; **4785885101 dead; not on Tamara board (35 jobs) 2026-05-31** | Re-scan Commercial Dubai monthly; aggregator BeBee mirrors only |
| 2026-05-27 | PayPal | Sr Manager Partnerships | Senior Manager | Dubai Internet City, UAE | Weekday / job board | https://jobs.weekday.works/paypal-sr-manager-partnerships | Stale | High | Monitor | Target role family + payments network; **Weekday flags may no longer accept; not on careers.pypl.com 2026-05-31** | Monitor PayPal careers Dubai filter; run §1 if official posting returns |
| 2026-05-27 | Mastercard | Director, Strategy and Performance Management (CNPF) | Director | Dubai, UAE | Talentmate / aggregator | https://www.talentmate.com/jobs/uae/dubai/director-strategy-and-performance-management/2511-1930-875 | Aggregator | Medium | Monitor | Payments strategy execution; Director level — likely stretch | Confirm R-276740 or equivalent on careers.mastercard.com |
| 2026-05-27 | Mastercard | Director, Commercial Acceptance Strategy | Director | Dubai, UAE | Aggregator (jobuae24h) | https://jobuae24h.com/director-commercial-acceptance-strategy-job54503 | Aggregator | Medium | Monitor | B2B acceptance strategy; Director level | Verify on Mastercard careers before §1 |
| 2026-05-27 | Fireblocks | Business Solutions Director, MENA | Director | Dubai, UAE | Web3.career / crypto boards | https://web3.career/business-solutions-director-mena-fireblocks/55733 | Aggregator | Medium | Monitor | Crypto infra; ex-MBB-style client strategy — Director track | Only if willing to pursue consulting-adjacent Director track |
| 2026-05-29 | BBVA | Strategy & Ops Manager — CIB MENA | Manager | Abu Dhabi, UAE (hybrid) | LinkedIn (PROMOTE inbound) | https://bbva.wd3.myworkdayjobs.com/BBVA/job/Abu-Dhabi/Strategy---Ops-Manager---CIB-MENA_JR00103444 | Live | High | **Promoted** | Stage 1 done — `bbva_strategy_ops_manager_cib_mena_abudhabi_2026-05-29.md`; tracker rank 6; score 3.90; applied direct | Review Benjamin warm path ~06-05 |

---

# Parking Lot

Raw leads and **company-level scans** (no target-titled role yet):

- **Tabby** (Dubai) — BNPL product/risk/commercial only; no S&O / Corp Dev / BizOps this scan → [tabby.ai/careers](https://tabby.ai/en-AE/careers) · re-scan quarterly
- **Stripe** (Dubai office) — Embedded Finance DXB closed; no Manager S&O on careers → [stripe.com/jobs](https://stripe.com/jobs) · weekly location=Dubai check
- **CloudWalk** (São Paulo) — risk/data/eng only; CDB Strategy analyst below band → [jobs.lever.co/cloudwalk](https://jobs.lever.co/cloudwalk)
- **Stone** (São Paulo) — credit/growth coord below Manager or wrong function → [jornada.stone.com.br](https://jornada.stone.com.br/times/outras-vagas/oportunidades)
- Ripple MEA expansion (DIFC HQ opened Apr 2026; doubling regional team) — no Dubai strategy-titled roles found this scan; watch ripple.com/careers Dubai filter
- Careem — no strategy-titled roles on jobs.careem.com this scan; Senior Manager Business Finance (aggregator) adjacent only
- Plaid / Rapyd — remote global (secondary geo only)
- PicPay — post-IPO; no public Corp Dev/Strategy Manager SP titles found

---

# Weekly Discovery Notes

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

**Secondary (opportunistic):** Remote global Plaid, Rapyd, Coinbase, Kraken strategy (§1 only if exceptional)

**Duplicates avoided:** All prior rows unchanged; Mercado Livre Corp Dev remains Already processed (Mercado Pago is separate entity track).

---

## Week of 2026-05-26

**Scan method:** Target queries from `target_search_queries.md` — company-specific (Visa, Checkout, Wise, Nubank, dLocal, Airwallex, Circle, Ziina, EBANX, Getnet) + Greenhouse geo queries.

**Top 3 to advance to Prompt §1 (when ready):**
1. *(re-scan Dubai — Checkout RevOps promoted but paused; no live posting)*
2. *(Monitor: Wise Banking Expansion, dLocal Strategy if validated)*
3. *(third slot — next discovery scan)*

**Uncertainties flagged:**
- Several aggregator links (Remote DXB, Dr.Job, jobuae24h) — confirm on official careers before §1
- dLocal Strategy Manager on Otta may be closed; Treasury Manager on Lever is active SP
- Stripe Embedded Finance DXB listing appears closed
- PGWay Middle East role is Portugal-based, not Dubai

**Duplicates avoided:** Revolut, Mercado Livre, Adyen unchanged as Already processed.

**Promoted 2026-05-26:** Visa → `visa_..._dubai_2026-05-26.md` · Nubank → `nubank_..._saopaulo_2026-05-26.md` · Checkout RevOps → `checkout_revops_commercial_strategy_partner_dubai_2026-05-26.md` (paused — listing removed) · **BTG inbound** → `btg_operations_transformation_inbound_saopaulo_2026-05-26.md`

**BTG SP scan (2026-05-26):** No public Manager/Sr Manager Strategy, Corp Dev, or BizOps titles found; careers portal is JS-only (manual filter required). Inbound HR lead is the actionable path. Public analyst postings are mostly below seniority band or wrong function (data eng, credit ops). Tier-3 bank per `target_companies.md` — pursue only with digital/transformation scope.
