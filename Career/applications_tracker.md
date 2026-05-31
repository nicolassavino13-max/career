# Applications Tracker

> **Single source of truth** for live pipeline. Detail + scores per dimension: each `Career/Applications/*.md` file.
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

**Pipeline vs watchlist:** The table below is **real process data** — where you are in each company's funnel. The **Watchlist — Archived** table at the bottom is high-fit roles that never opened (no ATS, no screen, no rejection). Those stay separate; reactivate into Pipeline only when a posting goes live.

---

## Pipeline Summary

**In process (5):** Revolut · Mercado Pago · Mercado Livre · BTG Pactual · BBVA  
**Mapped, not applied (2):** Visa · Adyen

| Rank | Company | Role | Score | Status | Next step | Due | Report |
|---:|---|---|---:|---|---|---|---|
| 1 | Revolut | S&O Manager — Revenue | 4.85 | Interviewing (screen · 2026-06-02) | Prep screen call; confirm timezone in invite | **2026-06-02 09:30** | `revolut_strategy_operations_manager_dubai_2026-05-25.md` |
| 2 | Mercado Pago | Gerente de Negócios Cripto | 4.40 | Applied (direct · awaiting ATS) | Wait ATS; follow up Ivan ~06-03; find 1–2 crypto contacts | Ongoing | `mercadopago_gerente_negocios_cripto_saopaulo_2026-05-27.md` |
| 3 | Mercado Livre | Estratégia & Corp Dev | 4.10 | Applied (referral · awaiting ATS) | Hold; rebalance to Crypto if ML HR contacts first | When triggered | `mercadolivre_strategy_corp_dev_saopaulo_2026-05-25.md` |
| 4 | BTG Pactual | Operations Transformation (inbound) | 3.70 | Interviewing (HR screen · 2026-06-01) | Prep HR call; debrief João; qualify scope + seniority | **2026-06-01 16:30** | `btg_operations_transformation_inbound_saopaulo_2026-05-26.md` |
| 5 | Visa | Sr Manager, Product Strategy & Planning | 4.55 | Mapped (not applied · posting live) | **Apply** on Workday REF082130W | ASAP | `visa_senior_manager_product_strategy_planning_dubai_2026-05-26.md` |
| 6 | BBVA | Strategy & Ops Manager — CIB MENA | 3.90 | Applied (direct · awaiting response) | Review Benjamin for warm path; hold prep until screen | ~2026-06-05 | `bbva_strategy_ops_manager_cib_mena_abudhabi_2026-05-29.md` |
| 7 | Adyen | Senior Alliances Partner Manager | 4.45 | Mapped (awaiting referral) | Wait for contact reply; schedule call before apply | ~2026-05-29 | `adyen_senior_alliances_partner_manager_saopaulo_2026-05-25.md` |

**Rank ≠ score:** MP Crypto **4.40** rank 2. ML Corp Dev **4.10** rank 3. BTG **3.70** rank 4. BBVA **3.90** rank 6 (applied, but below Visa/Adyen on fintech narrative). Checkout **4.75** and Nubank **4.35** are on watchlist only (archived postings).

---

## Open Items

| Company | Status | Comp known? | Warm path? | Follow-up due |
|---|---|---|---|---|
| Revolut | Interviewing (screen) | Yes — USD 10k+ UAE | Inbound — Matt; Cavan scheduling | **2026-06-02 09:30** |
| Mercado Pago | Applied (direct) | No | Ivan (MP Banking) — msg 2026-05-27; no reply | ~2026-06-03 |
| Mercado Livre | Applied (referral) | No | Referral submitted (Corp Dev) | Rebalance if ML HR contacts first |
| BTG Pactual | Interviewing (HR screen) | No | João Torneli → Ana Clara HR | **2026-06-01 16:30**; prep by 2026-05-31 |
| Visa | Mapped (not applied · live) | No | Cold — find alumni | **Apply ASAP** — REF082130W |
| BBVA | Applied (direct · awaiting response) | No | Cold — Benjamin on LinkedIn | ~2026-06-05 |
| Adyen | Mapped (awaiting referral) | No | Outreach sent 2026-05-26 | ~2026-05-29 |

---

## Watchlist — Archived

> Strong fit, **no interaction yet** (posting closed or removed before apply). Monitored via daily RUN_DISCOVERY — not part of pipeline ranks or canvas process view. **Reactivate** into Pipeline Summary when posting is live.

| Company | Role | Score | Status | Why archived | Monitor via | Report |
|---|---|---:|---|---|---|---|
| Checkout.com | RevOps & Commercial Strategy Partner | 4.75 | Archived (listing removed · verified 2026-05-27) | Built In removed Oct 2025; Ashby API — 0 RevOps Dubai | Ashby API daily | `checkout_revops_commercial_strategy_partner_dubai_2026-05-26.md` |
| Nubank | General Strategic Partnership — Senior Specialist | 4.35 | Archived (posting closed · ~2026-03-25) | Greenhouse 7577975 dead; Built In removed Mar 2025 | Greenhouse API daily | `nubank_general_strategic_partnership_senior_specialist_saopaulo_2026-05-26.md` |

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
