import {
  BarChart,
  Callout,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Link,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
} from 'cursor/canvas';

const SOURCE = 'Career/opportunities_tracker.md';
const SCAN_DATE = '2026-06-12';

type Candidate = {
  dateFound: string;
  company: string;
  role: string;
  seniority: string;
  location: string;
  source: string;
  link: string;
  linkStatus: string;
  fit: string;
  decision: string;
  reason: string;
  next: string;
};

const candidates = [
  {
    "dateFound": "2026-05-25",
    "company": "Revolut",
    "role": "Strategy & Operations Manager — Revenue Team",
    "seniority": "Manager",
    "location": "UAE / Dubai (also Remote: Brazil · Spain)",
    "source": "Recruiter",
    "link": "https://www.revolut.com/careers/position/strategy-operations-manager-e4b7c063-41c5-4afc-8031-2323db04b9f7/",
    "linkStatus": "Live",
    "fit": "Very high",
    "decision": "Already processed",
    "reason": "**Rejected post-screen 2026-06-06** (Matt); same job ID still **Live** Brazil · Spain · SP 2026-06-10",
    "next": "Geo pivot via OMR row or reply Matt — do not duplicate ATS apply"
  },
  {
    "dateFound": "2026-05-25",
    "company": "Mercado Livre",
    "role": "Gerente de Estratégia & Desenvolvimento Corporativo",
    "seniority": "Manager",
    "location": "São Paulo",
    "source": "Eightfold / referral",
    "link": "https://mercadolibre.eightfold.ai/careers/job/38908589",
    "linkStatus": "**Live**",
    "fit": "High",
    "decision": "Already processed",
    "reason": "Applied (referral); **HR replied 2026-06-12** — phone requested",
    "next": "Await recruiter contact"
  },
  {
    "dateFound": "2026-05-25",
    "company": "Adyen",
    "role": "Senior Alliances Partner Manager",
    "seniority": "Senior Manager",
    "location": "São Paulo",
    "source": "Greenhouse",
    "link": "https://job-boards.greenhouse.io/adyen/jobs/7913587",
    "linkStatus": "Live",
    "fit": "High",
    "decision": "Already processed",
    "reason": "Applied (referral · **Rafaela Mello** 2026-06-12)",
    "next": "Await recruiter ~2026-06-18"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Checkout.com",
    "role": "RevOps & Commercial Strategy Partner",
    "seniority": "Manager-equivalent",
    "location": "Dubai, UAE",
    "source": "Built In",
    "link": "https://builtin.com/job/revops-commercial-strategy-partner/6776498",
    "linkStatus": "**Stale**",
    "fit": "High",
    "decision": "Promoted",
    "reason": "Stage 1 archived — `checkout_..._dubai_2026-05-26.md`; removed Oct 2025; **verified closed 2026-05-27** (Ashby API)",
    "next": "Monitor Ashby board for repost"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Nubank",
    "role": "General Strategic Partnership Profile — Senior Specialist",
    "seniority": "Senior Specialist (~Manager)",
    "location": "São Paulo",
    "source": "Nubank careers / Greenhouse",
    "link": "https://job-boards.greenhouse.io/nubank · old ID 7577975",
    "linkStatus": "**Stale**",
    "fit": "High",
    "decision": "Promoted",
    "reason": "Stage 1 archived — `nubank_..._saopaulo_2026-05-26.md`; removed ~Mar 25 2026",
    "next": "**Daily scan:** Greenhouse SPG / Corp Dev / S&O SP"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Wise",
    "role": "Senior Banking & Expansion Manager",
    "seniority": "Senior Manager",
    "location": "Dubai, UAE",
    "source": "Fintech Careers / Built In",
    "link": "https://wise.jobs/job/senior-banking-and-expansion-manager-in-dubai-jid-2500",
    "linkStatus": "Stale",
    "fit": "High",
    "decision": "Monitor",
    "reason": "Payments infra + VARA entity launch; **verified expired on wise.jobs 2026-05-31**",
    "next": "Monitor wise.jobs for repost; deprioritize unless relisted"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Ziina",
    "role": "FP&A Manager",
    "seniority": "Manager",
    "location": "Dubai, UAE",
    "source": "Greenhouse EU",
    "link": "http://job-boards.eu.greenhouse.io/ziina/jobs/4650048101",
    "linkStatus": "**Stale**",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "Strategic finance at MENA fintech; **4650048101 404 on Greenhouse EU 2026-06-04**",
    "next": "Monitor Ziina board for repost; deprioritize unless relisted"
  },
  {
    "dateFound": "2026-05-26",
    "company": "dLocal",
    "role": "Strategy Manager (Strategic Alignment & Execution)",
    "seniority": "Manager / Sr Manager",
    "location": "Unclear — likely Montevideo hub; Brazil possible",
    "source": "Welcome to the Jungle",
    "link": "https://app.welcometothejungle.com/jobs/b1rQUnVA",
    "linkStatus": "Stale",
    "fit": "High",
    "decision": "Need more info",
    "reason": "Chief-of-staff-style strategy & ops",
    "next": "Re-check Lever/careers monthly; high fit if reposted"
  },
  {
    "dateFound": "2026-05-26",
    "company": "dLocal",
    "role": "Treasury Manager",
    "seniority": "Manager",
    "location": "São Paulo (hybrid)",
    "source": "Lever",
    "link": "https://jobs.lever.co/dlocal/7cba81c3-4726-498b-8eb3-9ac1106ed51a",
    "linkStatus": "**Stale**",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "Payments treasury; **Lever URL 404 + not on dlocal board 2026-06-04**; Corp Dev talent pool Montevideo only",
    "next": "Re-check Lever monthly; Strategy Manager repost watch"
  },
  {
    "dateFound": "2026-05-26",
    "company": "EBANX",
    "role": "Product Senior Manager \\",
    "seniority": "Payments",
    "location": "Senior Manager",
    "source": "São Paulo or Curitiba (on-site)",
    "link": "Greenhouse",
    "linkStatus": "https://job-boards.greenhouse.io/ebanx/jobs/7718387003",
    "fit": "Live",
    "decision": "Medium",
    "reason": "Monitor",
    "next": "Strong payments product leadership; less Corp Dev/S&O — good brand"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Airwallex",
    "role": "Head of Middle East",
    "seniority": "Head / GM-level",
    "location": "Dubai",
    "source": "Airwallex careers",
    "link": "https://careers.airwallex.com/job/4e28592b-90b8-4b4c-adcd-1ec73d31fbc7/head-of-middle-east/",
    "linkStatus": "Live",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "P&L + regional strategy; likely **above** target seniority",
    "next": "Only if willing to pursue GM-track"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Circle",
    "role": "VP, Regional Strategy — Middle East & Africa",
    "seniority": "VP (IC)",
    "location": "Dubai / UAE (remote)",
    "source": "Built In",
    "link": "http://builtin.com/job/vp-regional-strategy-middle-east-africa/8570152",
    "linkStatus": "Aggregator",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "Stablecoin infra strategy; **14+ yrs** — likely stretch",
    "next": "Monitor unless inbound/referral"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Circle",
    "role": "Director, Partner Management — MEA",
    "seniority": "Director",
    "location": "UAE",
    "source": "Web3.career",
    "link": "https://web3.career/director-partner-management-mea-circle/92373",
    "linkStatus": "Aggregator",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "Partnerships/crypto; senior; strategic commercial",
    "next": "Same as above"
  },
  {
    "dateFound": "2026-06-11",
    "company": "Circle",
    "role": "Senior Manager, Partner Management — LATAM",
    "seniority": "Sr Manager (10+ yrs AM/BD)",
    "location": "Brazil (remote)",
    "source": "User inbound (PROMOTE)",
    "link": "https://careers.circle.com/us/en/job/CIICIRUSJR100929EXTERNALENUS/Senior-Manager-Partner-Management-LATAM",
    "linkStatus": "**Stale**",
    "fit": "Very high",
    "decision": "Promoted",
    "reason": "Stage 1 — `circle_senior_manager_partner_management_latam_brazil_2026-06-11.md`; score **4.55**; **filled** on official site → Archived watchlist",
    "next": "Repost watch on crypto rotation"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Checkout.com",
    "role": "Manager, External Affairs — UAE",
    "seniority": "Manager",
    "location": "Dubai",
    "source": "Welcome to the Jungle",
    "link": "https://www.welcometothejungle.com/en/companies/checkout-com-1/jobs/manager-external-affairs-uae_dubai_uyb472wc",
    "linkStatus": "Live",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "Scheme/network partnerships; more commercial RM than strategy",
    "next": "Compare vs RevOps role; likely one Checkout path"
  },
  {
    "dateFound": "2026-05-26",
    "company": "OpenFX",
    "role": "Product Manager, Payments",
    "seniority": "Manager (PM)",
    "location": "Dubai listed among hubs",
    "source": "Greenhouse",
    "link": "http://job-boards.greenhouse.io/openfx/jobs/5071725008",
    "linkStatus": "Live",
    "fit": "Medium",
    "decision": "Ignore",
    "reason": "Cross-border payments infra — **product manager**, not S&O/Corp Dev",
    "next": "Skip unless pivoting to product strategy"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Visa",
    "role": "Strategy Analyst (CEMEA — CISSEE market)",
    "seniority": "Analyst",
    "location": "Dubai",
    "source": "Dr.Job",
    "link": "https://drjobs.ae/jobs/strategy-analyst-cissee-market-experience-dubai-visa-MPBU6ULN01W6GAC",
    "linkStatus": "Aggregator",
    "fit": "Low",
    "decision": "Ignore",
    "reason": "Corp strategy team but **analyst** seniority + CISSEE requirement",
    "next": "Below target band"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Visa",
    "role": "Director, CoE — Strategy and Execution",
    "seniority": "Director",
    "location": "Dubai",
    "source": "Aggregator",
    "link": "https://jobuae24h.com/director-coe-strategy-and-execution-job158747",
    "linkStatus": "Aggregator",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "Strategy execution; **12+ yrs** — likely too senior",
    "next": "Only with strong referral"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Wise",
    "role": "Compliance Senior Manager — Digital Assets",
    "seniority": "Senior Manager",
    "location": "Dubai",
    "source": "Fintech Careers",
    "link": "https://www.fintechcareers.com/job/28699/compliance-senior-manager-digital-assets-dubai/",
    "linkStatus": "Aggregator",
    "fit": "Low",
    "decision": "Ignore",
    "reason": "Compliance/regulatory — not operator-strategy destination",
    "next": "Market signal only"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Getnet",
    "role": "Corporate Commercial Specialist",
    "seniority": "Specialist",
    "location": "São Paulo",
    "source": "Greenhouse EU",
    "link": "https://job-boards.eu.greenhouse.io/getnet/jobs/4838231101",
    "linkStatus": "Live",
    "fit": "Low",
    "decision": "Ignore",
    "reason": "Commercial hunter/farmer corporate sales",
    "next": "Outside role family"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Airwallex",
    "role": "Sales Manager, SME & Growth",
    "seniority": "Manager",
    "location": "Dubai",
    "source": "Airwallex careers",
    "link": "https://careers.airwallex.com/job/0e491f38-2e78-4c7d-afe0-8a5b0700d054/sales-manager-sme-growth/",
    "linkStatus": "Live",
    "fit": "Low",
    "decision": "Ignore",
    "reason": "Pure commercial sales leadership",
    "next": "Penalized per discovery rules"
  },
  {
    "dateFound": "2026-05-26",
    "company": "Stripe",
    "role": "Strategy & Operations, Embedded Finance",
    "seniority": "Manager-equivalent",
    "location": "Remote DXB (uncertain)",
    "source": "Remote DXB",
    "link": "https://www.remotedxb.com/job/strategy-operations-embedded-finance-stripe",
    "linkStatus": "Stale",
    "fit": "High",
    "decision": "Need more info",
    "reason": "Ideal role family — DXB embedded finance track",
    "next": "Check stripe.com/jobs for UAE/Dubai S&O"
  },
  {
    "dateFound": "2026-05-26",
    "company": "PGWay",
    "role": "Payments Manager (Middle East)",
    "seniority": "Manager",
    "location": "GCC — **office Portugal**",
    "source": "Greenhouse EU",
    "link": "https://job-boards.eu.greenhouse.io/pgway/jobs/4815455101",
    "linkStatus": "Live",
    "fit": "Medium",
    "decision": "Ignore",
    "reason": "Payments/GTM — geo mismatch for SP/Dubai priority",
    "next": "Unless remote UAE acceptable"
  },
  {
    "dateFound": "2026-05-26",
    "company": "BTG Pactual",
    "role": "Operations Transformation (inbound — multiple roles TBD)",
    "seniority": "TBD (target Manager+)",
    "location": "São Paulo (assumed)",
    "source": "WhatsApp HR — Ana Clara; ref. João Torneli",
    "link": "https://carreiras.btgpactual.com/vagas",
    "linkStatus": "Live",
    "fit": "High",
    "decision": "Promoted",
    "reason": "HR screen **2026-06-08 16:30 BRT** (rescheduled); prep `preparation/btg_operations_transformation/round_01_btg_opstransf_hr_screen_2026-06-08/prep.md`",
    "next": "João debrief before Mon call"
  },
  {
    "dateFound": "2026-05-26",
    "company": "BTG Pactual",
    "role": "Analista de Soluções Júnior, Processo e IA",
    "seniority": "Analyst (below band)",
    "location": "São Paulo",
    "source": "Aggregator / careers",
    "link": "https://pitchmeai.com/jobs/btg-pactual/analista-de-solucoes-junior-processo-e-ia-l5xmy3pp2p",
    "linkStatus": "Aggregator",
    "fit": "Medium",
    "decision": "Ignore",
    "reason": "Transformation-adjacent but **Jr + IA builder**; wrong seniority",
    "next": "Only if inbound maps here — else skip"
  },
  {
    "dateFound": "2026-05-26",
    "company": "BTG Pactual",
    "role": "Analista de Produtos — Conta Corrente (foco IA)",
    "seniority": "Analyst",
    "location": "São Paulo (Av. Paulista presencial)",
    "source": "Aggregator",
    "link": "https://bebee.com/br/jobs/analista-de-produtos-conta-corrente-foco-em-ia-btg-pactual-sao-paulo-sao-paulo--theirstack-681691144",
    "linkStatus": "Aggregator",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "Digital banking product — relevant industry, **not** target role family",
    "next": "Compare to inbound scope; PROMOTE only if Manager+ product strategy"
  },
  {
    "dateFound": "2026-05-26",
    "company": "BTG Pactual",
    "role": "Strategy and Business Management Analyst (B2B partner offices)",
    "seniority": "Analyst",
    "location": "São Paulo",
    "source": "Aggregator (expired ref.)",
    "link": "https://pitchmeai.com/jobs/btg-pactual/strategy-and-business-management-analyst-a6jxzbn265",
    "linkStatus": "Stale",
    "fit": "Low",
    "decision": "Ignore",
    "reason": "Internal consultancy to partner offices; analyst; wealth B2B — not fintech operator",
    "next": "Market signal only"
  },
  {
    "dateFound": "2026-05-26",
    "company": "BTG Pactual",
    "role": "Analista de Operações (Credit Operations Digital)",
    "seniority": "Analyst",
    "location": "São Paulo",
    "source": "Press/careers scan",
    "link": "https://carreiras.btgpactual.com/vagas",
    "linkStatus": "Live",
    "fit": "Low",
    "decision": "Ignore",
    "reason": "Back-office ops — conflicts with positioning",
    "next": "Skip"
  },
  {
    "dateFound": "2026-05-26",
    "company": "BTG Pactual",
    "role": "Engenheiro(a) de Dados — Data Analytics",
    "seniority": "Specialist",
    "location": "São Paulo (hybrid 3x)",
    "source": "Aggregator",
    "link": "https://echojobs.io/job/btg-pactual-engenheiro-a-de-dados-dados-tmovo",
    "linkStatus": "Aggregator",
    "fit": "Low",
    "decision": "Ignore",
    "reason": "Technical data engineering — outside role family",
    "next": "Skip"
  },
  {
    "dateFound": "2026-05-27",
    "company": "Mercado Pago",
    "role": "Gerente de Negócios Cripto",
    "seniority": "Manager",
    "location": "São Paulo",
    "source": "LinkedIn + Ivan (MP Banking)",
    "link": "https://www.linkedin.com/jobs/view/4408443201/",
    "linkStatus": "**Stale**",
    "fit": "Very high",
    "decision": "Promoted",
    "reason": "**Posting closed** (Ivan 2026-06-01); career chat **2026-06-06 15:30 BRT**; prep `preparation/mercadopago_ivan_career_2026-06-06/`",
    "next": "Prep before Fri call"
  },
  {
    "dateFound": "2026-05-27",
    "company": "Mercado Pago",
    "role": "Gerente de Online Payments",
    "seniority": "Manager",
    "location": "São Paulo",
    "source": "LinkedIn",
    "link": "https://br.linkedin.com/jobs/view/gerente-de-online-payments-mercado-pago-at-mercado-livre-brasil-4206073378",
    "linkStatus": "Aggregator",
    "fit": "High",
    "decision": "Monitor",
    "reason": "Payments product/strategy leadership at MELI fintech arm — distinct from ML Corp Dev (already processed)",
    "next": "Confirm live on careers-meli.mercadolibre.com; compare vs ML path"
  },
  {
    "dateFound": "2026-05-27",
    "company": "Mercado Pago",
    "role": "Especialista de Planejamento e Estratégia em Big Sellers",
    "seniority": "Specialist (~Manager scope)",
    "location": "São Paulo",
    "source": "LinkedIn",
    "link": "https://br.linkedin.com/jobs/view/especialista-de-planejamento-e-estratégia-em-big-sellers-mercado-pago-at-mercado-livre-brasil-4212096464",
    "linkStatus": "Aggregator",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "Strategic planning for enterprise sellers; adjacent to S&O — title below Manager band",
    "next": "Validate seniority + posting status on official careers"
  },
  {
    "dateFound": "2026-05-27",
    "company": "Tamara",
    "role": "Channel Partnership Manager",
    "seniority": "Manager",
    "location": "Dubai, UAE",
    "source": "Greenhouse EU",
    "link": "https://job-boards.eu.greenhouse.io/tamara",
    "linkStatus": "Stale",
    "fit": "High",
    "decision": "Monitor",
    "reason": "GCC BNPL unicorn; **4785885101 dead; not on Tamara board (35 jobs) 2026-05-31**",
    "next": "Re-scan Commercial Dubai monthly; aggregator BeBee mirrors only"
  },
  {
    "dateFound": "2026-05-27",
    "company": "PayPal",
    "role": "Sr Manager Partnerships",
    "seniority": "Senior Manager",
    "location": "Dubai Internet City, UAE",
    "source": "Weekday / job board",
    "link": "https://jobs.weekday.works/paypal-sr-manager-partnerships",
    "linkStatus": "Stale",
    "fit": "High",
    "decision": "Monitor",
    "reason": "Target role family + payments network; **Weekday flags may no longer accept; not on careers.pypl.com 2026-05-31**",
    "next": "Monitor PayPal careers Dubai filter; run PROMOTE if official posting returns"
  },
  {
    "dateFound": "2026-05-27",
    "company": "Mastercard",
    "role": "Director, Strategy and Performance Management (CNPF)",
    "seniority": "Director",
    "location": "Dubai, UAE",
    "source": "Talentmate / aggregator",
    "link": "https://www.talentmate.com/jobs/uae/dubai/director-strategy-and-performance-management/2511-1930-875",
    "linkStatus": "Aggregator",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "Payments strategy execution; Director level — likely stretch",
    "next": "Confirm R-276740 or equivalent on careers.mastercard.com"
  },
  {
    "dateFound": "2026-05-27",
    "company": "Mastercard",
    "role": "Director, Commercial Acceptance Strategy",
    "seniority": "Director",
    "location": "Dubai, UAE",
    "source": "Aggregator (jobuae24h)",
    "link": "https://jobuae24h.com/director-commercial-acceptance-strategy-job54503",
    "linkStatus": "Aggregator",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "B2B acceptance strategy; Director level",
    "next": "Verify on Mastercard careers before PROMOTE"
  },
  {
    "dateFound": "2026-05-27",
    "company": "Fireblocks",
    "role": "Business Solutions Director, MENA",
    "seniority": "Director",
    "location": "Dubai, UAE",
    "source": "Web3.career / crypto boards",
    "link": "https://web3.career/business-solutions-director-mena-fireblocks/55733",
    "linkStatus": "Aggregator",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "Crypto infra; ex-MBB-style client strategy — Director track",
    "next": "Only if willing to pursue consulting-adjacent Director track"
  },
  {
    "dateFound": "2026-06-11",
    "company": "J.P. Morgan",
    "role": "Market and Product Expansion — Treasury (VP)",
    "seniority": "VP (5+ yrs)",
    "location": "São Paulo, SP (or Mexico City)",
    "source": "User inbound (PROMOTE)",
    "link": "https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210746060",
    "linkStatus": "**Live**",
    "fit": "High",
    "decision": "Promoted",
    "reason": "Stage 1 — `jpmorgan_market_product_expansion_treasury_vp_saopaulo_2026-06-11.md`; score **4.15** rank **8**; **preferred JPM SP**",
    "next": "Hold apply ~post-screen week"
  },
  {
    "dateFound": "2026-06-01",
    "company": "J.P. Morgan",
    "role": "LATAM Payments Rails — Product Delivery Manager (VP)",
    "seniority": "VP (10+ yrs)",
    "location": "São Paulo, SP",
    "source": "LinkedIn / Oracle CX",
    "link": "https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210741903",
    "linkStatus": "Live",
    "fit": "High",
    "decision": "Promoted",
    "reason": "Stage 1 — `jpmorgan_..._saopaulo_2026-06-01.md`; score **4.10** rank **9**; second JPM option",
    "next": "Hold apply ~post-screen week"
  },
  {
    "dateFound": "2026-06-01",
    "company": "J.P. Morgan",
    "role": "Payments EMEA Innovation Economy Sales (VP)",
    "seniority": "VP · Sales",
    "location": "Dubai, UAE",
    "source": "LinkedIn / Oracle CX",
    "link": "https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210751285",
    "linkStatus": "Live",
    "fit": "Low",
    "decision": "Promoted",
    "reason": "Stage 1 — `jpmorgan_..._dubai_2026-06-01.md`; score **3.40** rank 10; sales — skip vs SP",
    "next": "Apply before 2026-06-12 if ever"
  },
  {
    "dateFound": "2026-06-05",
    "company": "Mercado Pago",
    "role": "Gerente de Engajamento Pequenas e Médias Empresas",
    "seniority": "Manager",
    "location": "São Paulo (hybrid)",
    "source": "LinkedIn inbound (PROMOTE)",
    "link": "https://www.linkedin.com/jobs/view/4419607407/",
    "linkStatus": "Aggregator",
    "fit": "High",
    "decision": "Promoted",
    "reason": "Applied (referral · **Ivan Renner**); **HR inbound** 2026-06-12",
    "next": "Await HR next step"
  },
  {
    "dateFound": "2026-06-06",
    "company": "N26",
    "role": "Strategy & Operations Manager — Acquire",
    "seniority": "Manager",
    "location": "Barcelona, Spain",
    "source": "LinkedIn inbound (PROMOTE · cold apply)",
    "link": "https://www.linkedin.com/jobs/view/4423069027/",
    "linkStatus": "Aggregator",
    "fit": "Very high",
    "decision": "Promoted",
    "reason": "Stage 1 — `n26_..._barcelona_2026-06-06.md`; **Rejected no screen** 2026-06-11",
    "next": "Track closed"
  },
  {
    "dateFound": "2026-06-08",
    "company": "Revolut",
    "role": "Operations Manager (Revenue)",
    "seniority": "Manager",
    "location": "São Paulo · Madrid · Remote: Brazil · Spain",
    "source": "Revolut careers (mandatory scan)",
    "link": "https://www.revolut.com/careers/position/operations-manager-revenue-6970b9e3-e515-4b76-804b-9df9ce31296d/",
    "linkStatus": "**Live**",
    "fit": "High",
    "decision": "Monitor",
    "reason": "Geo pivot post-Dubai rejection; **Live** 2026-06-12 (403 bypass · en-BR indexed page · Brazil · SP · Madrid · Spain)",
    "next": "Reply Matt before geo-pivot apply"
  },
  {
    "dateFound": "2026-06-11",
    "company": "Brex",
    "role": "Manager, Banking Operations",
    "seniority": "Manager (2+ yrs people mgr)",
    "location": "São Paulo (hybrid M/W/Th)",
    "source": "User inbound (PROMOTE · intel)",
    "link": "https://www.brex.com/careers/8580566002?gh_jid=8580566002",
    "linkStatus": "**Live**",
    "fit": "Low",
    "decision": "Promoted",
    "reason": "Stage 1 — `brex_manager_banking_operations_saopaulo_2026-06-11.md`; score **3.35** rank 12; **do not apply** — control ops / comp below floor",
    "next": "Intel only"
  },
  {
    "dateFound": "2026-06-11",
    "company": "Tether",
    "role": "Expansion Manager — Tokenization",
    "seniority": "Manager (3–5 yrs)",
    "location": "Brazil · 100% remote",
    "source": "User inbound (PROMOTE)",
    "link": "https://careers.tether.io/o/expansion-manager-tokenization-100-remote-6",
    "linkStatus": "**Live**",
    "fit": "High",
    "decision": "Promoted",
    "reason": "Stage 1 — `tether_expansion_manager_tokenization_remote_brazil_2026-06-11.md`; score **4.20** rank **8**; Hadron RWA · hold BTG",
    "next": "No AI on apply"
  },
  {
    "dateFound": "2026-06-11",
    "company": "Amazon",
    "role": "Sr Program Manager — Payment Business Operation LATAM",
    "seniority": "Sr Program Manager",
    "location": "São Paulo, SP",
    "source": "User inbound (PROMOTE)",
    "link": "https://www.amazon.jobs/en/jobs/10404183/sr-program-manager-payment-business-operation-latam",
    "linkStatus": "**Live**",
    "fit": "High",
    "decision": "Promoted",
    "reason": "Applied **2026-06-12**; referral **Corrado Atzerri** in",
    "next": "Monitor applicant portal"
  },
  {
    "dateFound": "2026-06-11",
    "company": "Amazon",
    "role": "Pricing & Payments Manager — Partner Strategy & Experience",
    "seniority": "Manager (people mgr)",
    "location": "Osasco SP · Rio RJ",
    "source": "User inbound (PROMOTE · intel)",
    "link": "https://www.amazon.jobs/en/jobs/10408004/pricing-payments-manager-partner-strategy-experience",
    "linkStatus": "**Live**",
    "fit": "Low",
    "decision": "Promoted",
    "reason": "Stage 1 — `amazon_pricing_payments_manager_partner_strategy_brazil_2026-06-11.md`; score **3.40** rank **14**; Last Mile — **do not apply**",
    "next": "Skip vs 10404183"
  }
] as Candidate[];

const top3Notes = [
  "Revolut — Operations Manager (Revenue) Brazil/Spain (`Live` → reply Matt before geo-pivot PROMOTE)",
  "Mercado Pago — Gerente de Online Payments (`Aggregator` → no Gerente on Eightfold; LinkedIn 4206073378)",
  "EBANX — Product Senior Manager \\| Payments SP (`Live` → only if product strategy track intentional)"
] as string[];

const decisionTone = (d: string): 'success' | 'warning' | 'info' | 'neutral' | 'deleted' => {
  if (d === 'Process now') return 'success';
  if (d === 'Promoted' || d === 'Already processed') return 'info';
  if (d === 'Monitor') return 'warning';
  if (d === 'Need more info') return 'neutral';
  return 'deleted';
};

const countBy = (decision: string) => candidates.filter((c) => c.decision === decision).length;

const processNow = candidates.filter((c) => c.decision === 'Process now');
const promoteNext = candidates.filter(
  (c) => c.decision === 'Monitor' && (c.fit === 'Very high' || c.fit === 'High')
);
const inPipeline = candidates.filter(
  (c) => c.decision === 'Already processed' || c.decision === 'Promoted'
);
const monitor = candidates.filter((c) => c.decision === 'Monitor');
const needInfo = candidates.filter((c) => c.decision === 'Need more info');

const decisionCounts = [{"label":"Process now","value":0},{"label":"Promoted","value":14},{"label":"Already processed","value":3},{"label":"Monitor","value":17},{"label":"Need more info","value":2},{"label":"Ignore","value":10}];

const dubaiCount = 19;
const spCount = 25;
const otherCount = 3;

const linkStatusTone = (s: string): 'success' | 'warning' | 'neutral' | 'deleted' => {
  if (s === 'Live') return 'success';
  if (s === 'Stale') return 'deleted';
  if (s === 'Aggregator') return 'warning';
  return 'neutral';
};

function shortRole(role: string) {
  return role.length > 42 ? `${role.slice(0, 40)}…` : role;
}

export default function OpportunitiesTracker() {
  return (
    <Stack gap={24}>
      <Stack gap={6}>
        <H1>Opportunities Tracker</H1>
        <Text tone="secondary" size="small">
          Source: {SOURCE} · Last scan: {SCAN_DATE} · Dubai/UAE + São Paulo/Brazil · Pre-PROMOTE layer only
        </Text>
      </Stack>

      <Callout tone="info" title="Before PROMOTE">
        <Text size="small">
          This canvas mirrors {SOURCE}. Say RUN_DISCOVERY to scan and refresh. Say PROMOTE [Company] to advance a row into Applications + applications tracker.
        </Text>
      </Callout>

      <Grid columns={5} gap={12}>
        <Stat value={String(candidates.length)} label="Mapped candidates" />
        <Stat value={String(countBy('Process now'))} label="Process now" tone="success" />
        <Stat value={String(countBy('Promoted') + countBy('Already processed'))} label="Advanced / in pipeline" tone="info" />
        <Stat value={String(countBy('Monitor'))} label="Monitor" tone="warning" />
        <Stat value={String(countBy('Need more info'))} label="Need more info" />
      </Grid>

      <Grid columns="1.1fr 0.9fr" gap={20}>
        <Stack gap={10}>
          <H2>Decision mix</H2>
          <Text tone="secondary" size="small">Candidates by pre-screen decision · {SCAN_DATE}</Text>
          <BarChart
            categories={decisionCounts.map((d) => d.label)}
            series={[{ name: 'Candidates', data: decisionCounts.map((d) => d.value), tone: 'info' }]}
            height={200}
          />
        </Stack>
        <Stack gap={10}>
          <H2>Geography mix</H2>
          <Text tone="secondary" size="small">Primary location signal · {SOURCE}</Text>
          <BarChart
            categories={['Dubai / UAE', 'São Paulo / Brazil', 'Other / unclear']}
            series={[{ name: 'Candidates', data: [dubaiCount, spCount, otherCount], tone: 'neutral' }]}
            height={200}
          />
        </Stack>
      </Grid>

      <Divider />

      <Stack gap={10}>
        <H2>Process now — PROMOTE next</H2>
        <Text tone="secondary" size="small">Strong enough for PROMOTE · Not yet in Career/Applications/</Text>
        {processNow.length === 0 ? (
          <Callout tone="warning" title="No Process now rows">
            <Text size="small">Weekly Top 3 queue lives in source file. Set Process now when Link status is Live and ready for PROMOTE.</Text>
          </Callout>
        ) : (
          <Table
            headers={['Company', 'Role', 'Location', 'Fit', 'Link', 'Next action', 'Open']}
            rows={processNow.map((c) => [
              <Text weight="semibold">{c.company}</Text>,
              c.role,
              c.location,
              <Pill tone="success" size="sm">{c.fit}</Pill>,
              <Pill tone={linkStatusTone(c.linkStatus)} size="sm">{c.linkStatus}</Pill>,
              c.next,
              <Link href={c.link}>Open</Link>,
            ])}
            rowTone={processNow.map(() => 'success' as const)}
            striped
          />
        )}
      </Stack>

      {promoteNext.length > 0 && (
        <Stack gap={10}>
          <H2>High-fit Monitor — validate then PROMOTE</H2>
          <Table
            headers={['Company', 'Role', 'Location', 'Fit', 'Link', 'Next action']}
            rows={promoteNext.slice(0, 6).map((c) => [
              <Text weight="semibold">{c.company}</Text>,
              shortRole(c.role),
              c.location,
              <Pill tone="warning" size="sm">{c.fit}</Pill>,
              <Pill tone={linkStatusTone(c.linkStatus)} size="sm">{c.linkStatus}</Pill>,
              c.next,
            ])}
            striped
          />
        </Stack>
      )}

      <Grid columns="1fr 1fr" gap={16}>
        <Card>
          <CardHeader trailing={<Pill tone="info" size="sm">{inPipeline.length}</Pill>}>Promoted / Already processed</CardHeader>
          <CardBody>
            <Stack gap={8}>
              {inPipeline.map((c) => (
                <Row key={`${c.company}-${c.role}`} gap={8} align="center" wrap>
                  <Text weight="medium">{c.company}</Text>
                  <Text tone="secondary" size="small">{shortRole(c.role)}</Text>
                  <Pill tone="info" size="sm">{c.decision}</Pill>
                </Row>
              ))}
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader trailing={<Pill tone="neutral" size="sm">{needInfo.length}</Pill>}>Need more info</CardHeader>
          <CardBody>
            <Stack gap={8}>
              {needInfo.slice(0, 8).map((c) => (
                <Row key={`${c.company}-${c.role}`} gap={8} align="center" wrap>
                  <Text weight="medium">{c.company}</Text>
                  <Text tone="secondary" size="small">{shortRole(c.role)}</Text>
                </Row>
              ))}
              {needInfo.length > 8 && (
                <Text tone="tertiary" size="small">+{needInfo.length - 8} more in source file</Text>
              )}
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <Card collapsible defaultOpen>
        <CardHeader trailing={<Pill size="sm">{candidates.length}</Pill>}>Full candidate table</CardHeader>
        <CardBody style={{ padding: 0 }}>
          <Table
            headers={['Company', 'Role', 'Location', 'Fit', 'Decision', 'Link', 'Next', 'Open']}
            rows={candidates.map((c) => [
              c.company,
              shortRole(c.role),
              c.location,
              c.fit,
              <Pill tone={decisionTone(c.decision)} size="sm">{c.decision}</Pill>,
              <Pill tone={linkStatusTone(c.linkStatus)} size="sm">{c.linkStatus}</Pill>,
              c.next,
              c.link ? <Link href={c.link}>Open</Link> : <Text tone="tertiary" size="small">—</Text>,
            ])}
            rowTone={candidates.map((c) => decisionTone(c.decision))}
            striped
            stickyHeader
          />
        </CardBody>
      </Card>

      <Stack gap={8}>
        <H2>Weekly notes</H2>
        <H3>Top 3 for PROMOTE</H3>
        {top3Notes.length === 0 ? (
          <Text tone="secondary" size="small">See Weekly Discovery Notes in {SOURCE}</Text>
        ) : (
          top3Notes.map((t, i) => <Text key={i}>{i + 1}. {t}</Text>)
        )}
        
      </Stack>

      <Text tone="tertiary" size="small">
        Auto-sync: AI/.cursor/hooks/sync_discovery_canvas.mjs · Command: RUN_DISCOVERY
      </Text>
    </Stack>
  );
}
