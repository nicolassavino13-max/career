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
const SCAN_DATE = '2026-05-31';

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
    "location": "UAE / Dubai",
    "source": "Recruiter",
    "link": "https://www.revolut.com/careers/position/strategy-operations-manager-e4b7c063-41c5-4afc-8031-2323db04b9f7/",
    "linkStatus": "Live",
    "fit": "Very high",
    "decision": "Already processed",
    "reason": "In tracker rank 1",
    "next": "Follow up Matt"
  },
  {
    "dateFound": "2026-05-25",
    "company": "Mercado Livre",
    "role": "Gerente de Estratégia & Desenvolvimento Corporativo",
    "seniority": "Manager",
    "location": "São Paulo",
    "source": "LinkedIn / referral",
    "link": "https://www.linkedin.com/jobs/view/4412835253/",
    "linkStatus": "Aggregator",
    "fit": "High",
    "decision": "Already processed",
    "reason": "In tracker rank 2",
    "next": "ML friend intel"
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
    "reason": "In tracker rank 3",
    "next": "Await contact"
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
    "linkStatus": "Live",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "Strategic finance at MENA fintech; founding FP&A — adjacent to Corp Dev/strategic finance",
    "next": "Validate seniority scope; run §1 if comp/strategy angle confirmed"
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
    "linkStatus": "Live",
    "fit": "Medium",
    "decision": "Monitor",
    "reason": "Payments treasury; strategic finance exposure; not core strategy track",
    "next": "Only if strategic finance path is priority"
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
    "reason": "Stage 1 + HR prep — `btg_operations_transformation_inbound_saopaulo_2026-05-26.md`; tracker rank 3",
    "next": "HR call tent. 2026-06-01; prep + João debrief"
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
    "next": "Compare to inbound scope; run §1 only if Manager+ product strategy"
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
    "source": "LinkedIn (PROMOTE inbound)",
    "link": "https://www.linkedin.com/jobs/view/4408443201/",
    "linkStatus": "Aggregator",
    "fit": "Very high",
    "decision": "Promoted",
    "reason": "Stage 1 done — `mercadopago_gerente_negocios_cripto_saopaulo_2026-05-27.md`; tracker rank 3; score 4.40",
    "next": "Coordinate ML referrer before apply"
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
    "next": "Monitor PayPal careers Dubai filter; run §1 if official posting returns"
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
    "next": "Verify on Mastercard careers before §1"
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
  }
] as Candidate[];

const top3Notes = [
  "Mercado Pago — Gerente de Online Payments (`Aggregator` → confirm on careers-meli)",
  "Ziina — FP&A Manager (`Live` → validate strategic finance vs pure FP&A scope)",
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

const decisionCounts = [{"label":"Process now","value":0},{"label":"Promoted","value":4},{"label":"Already processed","value":3},{"label":"Monitor","value":16},{"label":"Need more info","value":2},{"label":"Ignore","value":10}];

const dubaiCount = 18;
const spCount = 15;
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
        <Text tone="secondary" size="small">Strong enough for PROMOTE → §1 · Not yet in Career/Applications/</Text>
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
