# Applications Tracker

> **Single source of truth** for live pipeline. Detail + scores per dimension: each `Career/Applications/*.md` file.
> **Call times:** **BRT** — America/São_Paulo (Rio de Janeiro), unless noted otherwise.
> **Applications canvas:** `AI/canvases/applications-tracker.canvas.tsx` (auto-sync on save)
>
> Runbook: `Career/JOB_SEARCH.md` · Scoring: `Career/search_context/role_scorecard.md`

---

## Status format

**Rule:** `Token (detail)` — the **first word is always** one of the standard tokens below. Put stage, channel, or reason in parentheses.

| Token | When to use | Bracket examples |
|---|---|---|
| **Mapped** | Stage 1 done; **not applied** | `(not applied)`, `(awaiting referral)`, `(verify posting)` |
| **Applied** | Submitted; **no interview scheduled** | `(direct)`, `(referral)`, `(awaiting ATS)`, `(awaiting response)` |
| **Interviewing** | Active process; interview(s) scheduled or in progress | `(screen)`, `(HR screen)`, `(HM)`, `(panel)`, `(final)` |
| **Offer** | Offer received or in negotiation | `(verbal)`, `(written)` |
| **Rejected** | Closed by company | `(no screen)`, `(post-screen)`, `(post-final)` |
| **Withdrawn** | Closed by you | `(deprioritized)`, `(geo)`, `(scope)` |
| **Archived** | Posting closed **before any apply or recruiter interaction** — watchlist only (see bottom table) | `(posting closed)`, `(listing removed)` |

Add dates in brackets when useful: `Interviewing (HR screen · 2026-06-01)`.

**Pipeline vs watchlist:** Pipeline tables below = real process data. **Active** = applied + company/recruiter momentum (screen, interview, next round). **Applied — awaiting** = submitted, no meaningful follow-up yet. **Mapped** = Stage 1 only, not applied. **Watchlist — Archived** at bottom = posting closed before any apply.

---

## Pipeline Summary

**Active (3):** BTG Pactual (Round 3 pending) · **Mercado Livre (Round 1 · Fri 14:00 BRT)** · Mercado Pago SME (HR inbound · Ivan referral)  
**Applied — awaiting (3):** Adyen (Rafaela referral) · BBVA · Amazon LATAM Payments (referral **Corrado Atzerri** in)  
**Mapped, not applied (6):** Visa · Tether · J.P. Morgan (3) · Brex (skip) · Amazon Last Mile (skip)  
**Rejected (2):** Revolut Dubai · N26 Barcelona · **Withdrawn (1):** MP Crypto

### Active — applied with process momentum

Applied **and** positive follow-up: screen scheduled/completed, interview rounds, HR/recruiter contact, or explicit advance to next stage.

| Rank | Company | Role | Score | Status | Next step | Due | Report |
|---:|---|---|---:|---|---|---|---|
| 1 | BTG Pactual | Operations Transformation (inbound) | 3.70 | Interviewing (awaiting Round 3 · Tulio HM done) | Round 03 prep → `preparation/btg_operations_transformation/round_03_btg_opstransf_stakeholder_pending/prep.md` · warm Ana Clara | TBD | `btg_operations_transformation_inbound_saopaulo_2026-05-26.md` |
| 2 | Mercado Livre | Estratégia & Corp Dev | 4.10 | Interviewing (screen · **2026-06-12 14:00 BRT**) | Round 01 prep → `preparation/mercadolivre_strategy_corp_dev/round_01_meli_corpdev_screen_2026-06-12/` | **2026-06-12 14:00** | `mercadolivre_strategy_corp_dev_saopaulo_2026-05-25.md` |
| 3 | Mercado Pago | Gerente de Engajamento SME | 3.93 | Applied (referral · **Ivan Renner** · HR inbound) | Await HR next step · keep Ivan looped | TBD | `mercadopago_gerente_engajamento_sme_saopaulo_2026-06-05.md` |

### Applied — awaiting response

Submitted (direct or referral) — **no screen, interview, or HR/process advance yet.**

| Rank | Company | Role | Score | Status | Next step | Due | Report |
|---:|---|---|---:|---|---|---|---|
| 4 | Adyen | Senior Alliances Partner Manager | 4.45 | Applied (referral · **Rafaela Mello**) | Await recruiter / HM signal post internal apply | ~**2026-06-18** | `adyen_senior_alliances_partner_manager_saopaulo_2026-05-25.md` |
| 5 | BBVA | Strategy & Ops Manager — CIB MENA | 3.90 | Applied (direct · awaiting response) | Review Benjamin warm path; hold prep until screen | ~2026-06-05 | `bbva_strategy_ops_manager_cib_mena_abudhabi_2026-05-29.md` |
| 6 | Amazon | Sr Program Manager — Payment Business Ops LATAM | 4.50 | Applied (direct · referral **Corrado Atzerri** · awaiting ATS) | Monitor [applicant portal](https://account.amazon.jobs/pt-BR/applicant) | TBD | `amazon_sr_program_manager_payment_business_operations_latam_saopaulo_2026-06-11.md` |

### Mapped — not applied

Stage 1 complete; not submitted on ATS.

| Rank | Company | Role | Score | Status | Next step | Due | Report |
|---:|---|---|---:|---|---|---|---|
| 7 | Visa | Sr Manager, Product Strategy & Planning | 4.55 | Mapped (not applied · referral planned) | Message **James Hake** → apply Workday REF082130W | overdue | `visa_senior_manager_product_strategy_planning_dubai_2026-05-26.md` |
| 8 | Tether | Expansion Manager — Tokenization (remote) | 4.20 | Mapped (not applied · posting live) | Best mapped crypto/RWA — hold BTG Round 3; no AI on application | — | `tether_expansion_manager_tokenization_remote_brazil_2026-06-11.md` |
| 9 | J.P. Morgan | Market & Product Expansion — Treasury (VP) | 4.15 | Mapped (not applied · posting live) | Preferred JPM SP — GTM/commercialization | — | `jpmorgan_market_product_expansion_treasury_vp_saopaulo_2026-06-11.md` |
| 10 | J.P. Morgan | LATAM Payments Rails — Product Delivery Manager (VP) | 4.10 | Mapped (not applied · posting live) | Second JPM option | ~2026-06-07 | `jpmorgan_latam_payments_rails_product_delivery_manager_vp_saopaulo_2026-06-01.md` |
| 11 | J.P. Morgan | Payments EMEA Innovation Economy Sales (VP) | 3.40 | Mapped (not applied · sales · live) | **Skip** — sales function | 2026-06-12 deadline | `jpmorgan_payments_emea_innovation_economy_sales_vp_dubai_2026-06-01.md` |
| 12 | Brex | Manager, Banking Operations | 3.35 | Mapped (not applied · intel only) | **Do not apply** — control ops + comp below floor | — | `brex_manager_banking_operations_saopaulo_2026-06-11.md` |
| 13 | Amazon | Pricing & Payments Manager — Last Mile | 3.40 | Mapped (not applied · intel only) | **Do not apply** — logistics not fintech payments | — | `amazon_pricing_payments_manager_partner_strategy_brazil_2026-06-11.md` |

**Rank ≠ score:** Visa **4.55** rank 7 (overdue). Amazon LATAM Payments **4.50** rank 6. MP SME **3.93** rank 3 — active via Ivan + HR.

### Rejected

| Company | Role | Score | Status | Notes | Report |
|---|---|---:|---|---|---|
| Revolut | S&O Manager — Revenue (Dubai) | 4.85 | Rejected (post-screen · no feedback) | Matt email 2026-06-06; geo pivot SP/Spain closed | `revolut_strategy_operations_manager_dubai_2026-05-25.md` |
| N26 | S&O Manager — Acquire (Barcelona) | 4.30 | Rejected (no screen · cold apply) | Denied at first round; LinkedIn apply 2026-06-06; no interview | `n26_strategy_operations_manager_acquire_barcelona_2026-06-06.md` |

### Withdrawn

| Company | Role | Score | Status | Notes | Report |
|---|---|---:|---|---|---|
| Mercado Pago | Gerente de Negócios Cripto | 4.40 | Withdrawn (posting closed · late) | Ivan call 2026-06-06 → pivot to SME | `mercadopago_gerente_negocios_cripto_saopaulo_2026-05-27.md` |

---

## Open Items

| Company | Status | Comp known? | Warm path? | Follow-up due |
|---|---|---|---|---|
| BTG Pactual | **Active** — Interviewing (awaiting Round 3) | Partial — "best variable in market" (no numbers) | João Torneli → Ana Clara → Tulio | Round 03 prep · follow Ana Clara for schedule |
| Mercado Livre | **Active — Interviewing** (Round 1 screen · **14:00 BRT**) | No | Referral + HR FUP | Prep `round_01_meli_corpdev_screen_2026-06-12/` · **post_call.md** after |
| Mercado Pago | **Active** — Applied · HR inbound (no next step yet) | No | **Ivan Renner** referral | Await HR follow-up |
| Adyen | **Applied — awaiting** (referral · Rafaela) | No | **Rafaela Mello** — internal apply path | Await recruiter ~**2026-06-18** |
| BBVA | **Applied — awaiting** (direct) | No | Cold — Benjamin on LinkedIn | ~2026-06-05 |
| Amazon | **Applied — awaiting** (direct · referral **Corrado Atzerri**) | No | Referral in · job **10404183** | Monitor [applicant portal](https://account.amazon.jobs/pt-BR/applicant) |
| Visa | Mapped (not applied · live) | No | **James Hake** — outreach overdue | Apply Workday after James |
| Tether | Mapped (not applied · live) | No | Cold — careers.tether.io | Hold BTG Round 3 |
| J.P. Morgan | Mapped (not applied · 3 roles) | No | Cold — Oracle CX | Treasury GTM first; skip Dubai sales |
| Revolut | Rejected (post-screen · 2026-06-06) | Yes — **333–370k AED** (screen only) | Matt — optional geo pivot | Reply Matt if pursuing geo pivot |

---

## Watchlist — Archived

> Strong fit, **no interaction yet** (posting closed or removed before apply). Monitored via daily RUN_DISCOVERY — not part of pipeline ranks or canvas process view. **Reactivate** into Pipeline Summary when posting is live.

| Company | Role | Score | Status | Why archived | Monitor via | Report |
|---|---|---:|---|---|---|---|
| Checkout.com | RevOps & Commercial Strategy Partner | 4.75 | Archived (listing removed · verified 2026-05-27) | Built In removed Oct 2025; Ashby API — 0 RevOps Dubai | Ashby API daily | `checkout_revops_commercial_strategy_partner_dubai_2026-05-26.md` |
| Nubank | General Strategic Partnership — Senior Specialist | 4.35 | Archived (posting closed · ~2026-03-25) | Greenhouse 7577975 dead; Built In removed Mar 2025 | Greenhouse API daily | `nubank_general_strategic_partnership_senior_specialist_saopaulo_2026-05-26.md` |
| Circle | Senior Manager, Partner Management — LATAM | **4.55** | Archived (posting filled · verified 2026-06-11) | careers.circle.com job CIICIRUSJR100929 — filled message | Circle careers LATAM scan on crypto rotation | `circle_senior_manager_partner_management_latam_brazil_2026-06-11.md` |

---

## Update Log

| Date | Update |
|---|---|
| 2026-05-25 | Tracker created. Revolut, Mercado Livre, Adyen mapped. |
| 2026-05-25 | Mercado Livre: Applied (referral). |
| 2026-05-26 | Revolut: follow-up to Matt. Adyen: internal outreach sent. |
| 2026-05-26 | Tracker slimmed: detail/score tables removed; lives in opportunity files. |
| 2026-05-26 | PROMOTE: Visa Sr Manager Product Strategy & Planning — Stage 1 created; rank 5. |
| 2026-05-26 | PROMOTE: Nubank General Strategic Partnership Senior Specialist — Stage 1 created. |
| 2026-05-26 | PROMOTE: Checkout RevOps — Stage 1 created; Archived (listing removed). |
| 2026-05-26 | BTG: Ana Clara HR inbound (transformação Operações, ref. João Torneli) — Stage 1; rank 4. |
| 2026-05-27 | BTG: HR screening tent. 2026-06-01; Stage 2 HR prep in application file. |
| 2026-05-27 | Revolut: Matt scheduled screen **2026-06-02 09:30**; Stage 2 prep in application file. |
| 2026-05-27 | PROMOTE inbound: Mercado Pago Gerente de Negócios Cripto — Stage 1; score 4.40; rank 2. |
| 2026-05-27 | MP Crypto: Applied (direct); Ivan outreach sent; dual-track with ML Corp Dev locked. |
| 2026-05-27 | BTG: Ana Clara HR call **confirmed 2026-06-01 16:30**. |
| 2026-05-27 | Nubank SPG: posting closed (~Mar 25). Moved to Watchlist — Archived. |
| 2026-05-27 | **Status vocabulary standardized** — `Token (detail)` format; 4 in process. |
| 2026-05-27 | Checkout RevOps: verified **closed** via Ashby API. Moved to Watchlist — Archived. |
| 2026-05-27 | Visa SM Product Strategy Dubai: **verified live** on Workday REF082130W — ready to apply. |
| 2026-05-29 | PROMOTE inbound: BBVA Strategy & Ops Manager CIB MENA Abu Dhabi — Stage 1; score 3.90; rank 6; Applied (direct). |
| 2026-06-01 | **Timezone rule:** pipeline call times logged as **BRT (Rio / America/São_Paulo)**. |
| 2026-06-01 | **Preparation folder** — `Career/Applications/preparation/`; active: BTG HR (today 16:30 BRT), Revolut screen (tomorrow 09:30 BRT), MP Ivan career (Fri 15:30 BRT). |
| 2026-06-01 | **Mercado Pago:** Ivan replied — Cripto posting **closed**; career chat **2026-06-06 15:30 BRT**; status → Interviewing (career chat). |
| 2026-06-01 | **Mercado Livre:** no reply; FUP referrer planned ~2026-06-05. BTG + Revolut prep in progress. |
| 2026-06-01 | PROMOTE inbound: J.P. Morgan LATAM Payments Rails Product Delivery Manager (VP) SP — Stage 1; score **4.10**; rank **8**; Mapped (not applied). |
| 2026-06-01 | PROMOTE: JPM Dubai Payments Innovation Economy **Sales** VP — score **3.40** rank **9**; deprioritize vs SP delivery; banking VP inflation noted in workflow. |
| 2026-06-01 | **Visa:** James Hake added as referral contact; outreach planned **2026-06-03** post-Revolut; apply Workday same day. |
| 2026-06-01 | **Job Advancement Workflow** — `AI/job_advancement_workflow.md` + `AI/snippets/ADVANCE.md` created; `base/` narrative bank live; BTG process folder + round_01 prep. |
| 2026-06-01 | **BTG:** HR screen postponed (Ana Clara conflict) → **2026-06-08 16:30 BRT**; prep folder `round_01_..._2026-06-08`. |
| 2026-06-02 | **Revolut:** Screen complete. 5-stage process + AED comp on call. **EOW** advance decision. `process_log.md` + `round_01/post_call.md` + `round_02` assessments prep. |
| 2026-06-05 | PROMOTE inbound: Mercado Pago Gerente de Engajamento SME — Stage 1; score **3.93**; rank **6**; Mapped (not applied · live). Ivan leverage today. |
| 2026-06-06 | **MP Crypto:** Ivan call done — Withdrawn (late). **MP SME:** Ivan will support; user reconsidering. ML Corp Dev parallel unchanged. |
| 2026-06-06 | **Revolut:** Rejected post-screen (Matt email, no feedback). Dubai track closed. Rank 1 → ML Corp Dev. Geo pivot SP/Spain under consideration. |
| 2026-06-06 | PROMOTE inbound: N26 S&O Manager Acquire Barcelona — Stage 1; score **4.30**; rank **2**; Applied (direct cold). |
| 2026-06-06 | **N26:** LinkedIn link `4423069027`; comp ask **90k EUR gross** logged. |
| 2026-06-08 | **BTG:** HR screen complete (Ana Clara) — advanced to **Tulio Prado** **2026-06-10 14:00 BRT**. `round_01/post_call.md` + `round_02` HM prep. |
| 2026-06-08 | **ML Corp Dev:** still no HR reply (14d). **LinkedIn DM sent to Isabela Miguel** (Gerente Corp Dev @ MELI) — awaiting reply ~2026-06-11. FUP referrer ~2026-06-09. |
| 2026-06-11 | **BTG:** HM Tulio **complete** — no formal feedback; referrals requested + LinkedIn views. `round_02/post_call.md` + **Round 03 prep** (`stakeholder_pending`). |
| 2026-06-11 | **Adyen:** Rafaela requested CV → forwarded **internally** (no coffee chat). Hold Greenhouse until process confirmed. |
| 2026-06-11 | PROMOTE inbound: **Brex** Manager Banking Operations SP — Stage 1; score **3.35** rank **11**; **do not apply** (intel only). |
| 2026-06-11 | PROMOTE inbound: **JPM** Market & Product Expansion Treasury VP SP — Stage 1; score **4.15** rank **9**; preferred JPM SP role (posted 2026-06-09). |
| 2026-06-11 | PROMOTE inbound: **Tether** Expansion Manager Tokenization remote Brazil — Stage 1; score **4.20** rank **8**; best mapped crypto/RWA. |
| 2026-06-11 | PROMOTE inbound: **Circle** Sr Manager Partner Management LATAM — Stage 1; score **4.55** (ties Visa); **posting filled** → Watchlist — Archived. |
| 2026-06-11 | PROMOTE inbound: **Amazon** Pricing & Payments Manager Last Mile — Stage 1; score **3.40** rank **14**; **do not apply** (logistics intel). Big-tech SP rotation added to discovery workflow. |
| 2026-06-11 | PROMOTE inbound: **Amazon** Sr PM Payment Business Ops LATAM — Stage 1; score **4.50** rank **6**; preferred Amazon apply (10404183). |
| 2026-06-11 | **N26:** Rejected **no screen** — cold LinkedIn apply denied at first round; Europe S&O Barcelona track closed. |
| 2026-06-12 | **Amazon:** Applied (direct) Sr PM Payment Business Ops LATAM — job **10404183**. Next: referral **Santi Repetto**; track on account.amazon.jobs applicant portal. |
| 2026-06-12 | **Tracker restructure:** Pipeline split into **Active** · **Applied — awaiting** · **Mapped — not applied** · Rejected · Withdrawn. |
| 2026-06-12 | **Mercado Livre:** First interview **Fri 14:00 BRT** — ADVANCE Round 01 prep (`mercadolivre_strategy_corp_dev/`). |
| 2026-06-12 | **Amazon:** Referral **Corrado Atzerri** received (job **10404183**). **MP SME:** Applied + Ivan; HR inbound. **Adyen:** Applied via Rafaela. |
