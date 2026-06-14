import {
  Callout,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H1,
  H2,
  Pill,
  Row,
  Spacer,
  Stack,
  Stat,
  Table,
  Text,
} from 'cursor/canvas';

type OppScores = {
  fintech: number;
  global: number;
  role: number;
  brand: number;
  comp: number;
  operator: number;
  lifestyle: number;
};

type Opportunity = {
  company: string;
  role: string;
  location: string;
  setup: string;
  function: string;
  source: string;
  status: string;
  statusTone: 'success' | 'warning' | 'info' | 'neutral' | 'deleted';
  nextStep: string;
  score: string;
  priority: string;
  priorityTone: 'success' | 'warning' | 'info' | 'neutral' | 'deleted';
  compensation: string;
  longTermFit: string;
  file: string;
  keyStrengths: string;
  keyRisk: string;
  scores: OppScores;
};

const LAST_UPDATED = '2026-06-12';
const SOURCE = 'Career/applications_tracker.md';

const opportunities = [
  {
    "company": "BTG Pactual",
    "role": "Operations Transformation (inbound)",
    "location": "São Paulo",
    "setup": "Hybrid",
    "function": "Operations / transformation (likely BizOps, process excellence, digital ops — TBD)",
    "source": "WhatsApp inbound — Ana Clara (HR BTG); referral: João Torneli",
    "status": "Interviewing (awaiting Round 3 · Tulio HM done)",
    "statusTone": "warning",
    "nextStep": "Round 03 prep → `preparation/btg_operations_transformation/round_03_btg_opstransf_stakeholder_pending/prep.md` · warm Ana Clara",
    "score": "3.70",
    "priority": "1",
    "priorityTone": "success",
    "compensation": "Not disclosed — validate on call; BTG typically competitive at manager+",
    "longTermFit": "Worth applying if effort is reasonable (3.5–3.9)",
    "file": "btg_operations_transformation_inbound_saopaulo_2026-05-26.md",
    "keyStrengths": "Payment acquirer operational transformation (Brazil)",
    "keyRisk": "No inside-BTG brand; may compete with internal IB/ops profiles",
    "scores": {
      "fintech": 3,
      "global": 4,
      "role": 4,
      "brand": 4,
      "comp": 4,
      "operator": 4,
      "lifestyle": 2
    }
  },
  {
    "company": "Mercado Livre",
    "role": "Estratégia & Corp Dev",
    "location": "São Paulo, Brazil",
    "setup": "Hybrid",
    "function": "Strategy & Corporate Development — Ads & Marketing vertical",
    "source": "LinkedIn — applied with internal referral from a friend who is a Manager at Mercado Livre",
    "status": "Interviewing (screen · **2026-06-12 14:00 BRT**)",
    "statusTone": "info",
    "nextStep": "Round 01 prep → `preparation/mercadolivre_strategy_corp_dev/round_01_meli_corpdev_screen_2026-06-12/`",
    "score": "4.10",
    "priority": "2",
    "priorityTone": "info",
    "compensation": "Not disclosed. São Paulo BRL role. Must validate.",
    "longTermFit": "Strong opportunity; prioritize",
    "file": "mercadolivre_strategy_corp_dev_saopaulo_2026-05-25.md",
    "keyStrengths": "**Active — send phone if requested; await recruiter call.**",
    "keyRisk": "See opportunity file",
    "scores": {
      "fintech": 4,
      "global": 4,
      "role": 5,
      "brand": 5,
      "comp": 3,
      "operator": 4,
      "lifestyle": 3
    }
  },
  {
    "company": "Mercado Pago",
    "role": "Gerente de Engajamento SME",
    "location": "São Paulo, Brazil",
    "setup": "Hybrid",
    "function": "Growth / commercial engagement — SME portfolio campaigns, incentives, LTV & share-of-wallet",
    "source": "LinkedIn inbound (PROMOTE Path B) — applied with **Ivan Renner** referral",
    "status": "Applied (referral · **Ivan Renner** · HR inbound)",
    "statusTone": "info",
    "nextStep": "Await HR next step · keep Ivan looped",
    "score": "3.93",
    "priority": "3",
    "priorityTone": "neutral",
    "compensation": "Not disclosed. São Paulo BRL role — validate vs BRL 30k+ net floor.",
    "longTermFit": "Worth applying if effort is reasonable",
    "file": "mercadopago_gerente_engajamento_sme_saopaulo_2026-06-05.md",
    "keyStrengths": "SME growth strategy (Ecuador) — portfolio analytics, segmentation, cross-sell, RM allocation across 15K clients.",
    "keyRisk": "**Function typecast:** Engagement/campaign manager vs strategy/Corp Dev operator track.",
    "scores": {
      "fintech": 5,
      "global": 4,
      "role": 3,
      "brand": 4,
      "comp": 3,
      "operator": 4,
      "lifestyle": 3
    }
  },
  {
    "company": "Adyen",
    "role": "Senior Alliances Partner Manager",
    "location": "São Paulo, Brazil — Morumbi office. Office-first: 3 days on site. No remote option.",
    "setup": "Remote / flexible",
    "function": "Strategic Partnerships / Alliances / Commercial",
    "source": "Greenhouse. Applied via **Rafaela Mello** internal referral (2026-06-12).",
    "status": "Applied (referral · **Rafaela Mello**)",
    "statusTone": "info",
    "nextStep": "Await recruiter / HM signal post internal apply",
    "score": "4.45",
    "priority": "4",
    "priorityTone": "neutral",
    "compensation": "Not disclosed. São Paulo BRL role. Likely includes variable/commercial component. Must validate.",
    "longTermFit": "Strong opportunity; prioritize (score) — conditional (action)",
    "file": "adyen_senior_alliances_partner_manager_saopaulo_2026-05-25.md",
    "keyStrengths": "**Applied — await recruiter/HM.** Hold extra Greenhouse apply unless Rafaela/recruiter requests.",
    "keyRisk": "See opportunity file",
    "scores": {
      "fintech": 5,
      "global": 5,
      "role": 4,
      "brand": 5,
      "comp": 3,
      "operator": 5,
      "lifestyle": 3
    }
  },
  {
    "company": "BBVA",
    "role": "Strategy & Ops Manager — CIB MENA",
    "location": "Abu Dhabi, United Arab Emirates",
    "setup": "Hybrid",
    "function": "Strategy & Operations — Corporate & Investment Banking (CIB) regional setup",
    "source": "LinkedIn — user mapped and applied direct (PROMOTE inbound)",
    "status": "Applied (direct · awaiting response)",
    "statusTone": "warning",
    "nextStep": "Review Benjamin warm path; hold prep until screen",
    "score": "3.90",
    "priority": "5",
    "priorityTone": "neutral",
    "compensation": "Not disclosed. Assumption: UAE bank Manager comp may be solid net but likely below Revolut/Visa fintech bands — validate",
    "longTermFit": "Worth applying if effort is reasonable",
    "file": "bbva_strategy_ops_manager_cib_mena_abudhabi_2026-05-29.md",
    "keyStrengths": "Multi-country FS strategy and business cases (wallet, stablecoin consortium, acquiring transformation)",
    "keyRisk": "**Fintech narrative dilution** — CIB setup reads as traditional banking vs payments/crypto operator path",
    "scores": {
      "fintech": 3,
      "global": 4,
      "role": 5,
      "brand": 4,
      "comp": 3,
      "operator": 5,
      "lifestyle": 4
    }
  },
  {
    "company": "Amazon",
    "role": "Sr Program Manager — Payment Business Ops LATAM",
    "location": "São Paulo, SP — corporate office",
    "setup": "—",
    "function": "**LATAM Payments** — partnership strategy & program delivery with banks, schemes, acquirers, PSPs; Pix, Boletos, APMs",
    "source": "User inbound research — LinkedIn → [amazon.jobs](https://www.amazon.jobs/en/jobs/10404183/sr-program-manager-payment-business-operation-latam)",
    "status": "Applied (direct · referral **Corrado Atzerri** · awaiting ATS)",
    "statusTone": "warning",
    "nextStep": "Monitor [applicant portal](https://account.amazon.jobs/pt-BR/applicant)",
    "score": "4.50",
    "priority": "6",
    "priorityTone": "neutral",
    "compensation": "Not disclosed — Amazon Sr PM Brazil typically strong BRL; validate vs BRL 30k+ net floor",
    "longTermFit": "Strong opportunity; prioritize (with caveats)",
    "file": "amazon_sr_program_manager_payment_business_operations_latam_saopaulo_2026-06-11.md",
    "keyStrengths": "**Applied** — referral in; monitor ATS. Do not apply Last Mile 10408004.",
    "keyRisk": "See opportunity file",
    "scores": {
      "fintech": 3,
      "global": 5,
      "role": 3,
      "brand": 5,
      "comp": 4,
      "operator": 3,
      "lifestyle": 3
    }
  },
  {
    "company": "Visa",
    "role": "Sr Manager, Product Strategy & Planning",
    "location": "Dubai, United Arab Emirates",
    "setup": "Remote / flexible",
    "function": "Product Strategy & Planning — CEMEA Products",
    "source": "Discovery scan → Remote DXB aggregator; **verified live on Visa Workday 2026-05-27**",
    "status": "Mapped (not applied · referral planned)",
    "statusTone": "info",
    "nextStep": "Message **James Hake** → apply Workday REF082130W",
    "score": "4.55",
    "priority": "7",
    "priorityTone": "neutral",
    "compensation": "Not disclosed. Assumption: Dubai Visa SM likely competitive; UAE tax-advantaged. Validate in process.",
    "longTermFit": "Must pursue aggressively",
    "file": "visa_senior_manager_product_strategy_planning_dubai_2026-05-26.md",
    "keyStrengths": "Digital wallet MVP — business model, roadmap, multi-country rollout",
    "keyRisk": "Product strategy vs operator narrative — may read as \"another strategist\"",
    "scores": {
      "fintech": 5,
      "global": 5,
      "role": 4,
      "brand": 5,
      "comp": 4,
      "operator": 4,
      "lifestyle": 4
    }
  },
  {
    "company": "Tether",
    "role": "Expansion Manager — Tokenization (remote)",
    "location": "**100% remote** — Brazil",
    "setup": "Remote / flexible",
    "function": "Tokenization expansion — client/partner project delivery, ecosystem partnerships, institutional RWA onboarding",
    "source": "User inbound research — LinkedIn → [careers.tether.io](https://careers.tether.io/o/expansion-manager-tokenization-100-remote-6/c/new?source=LinkedIn+Basic+Jobs)",
    "status": "Mapped (not applied · posting live)",
    "statusTone": "info",
    "nextStep": "Best mapped crypto/RWA — hold BTG Round 3; no AI on application",
    "score": "4.20",
    "priority": "8",
    "priorityTone": "neutral",
    "compensation": "Not disclosed — application asks **expected annual salary (USD)**; crypto remote often USD-strong — validate vs BRL 30k+",
    "longTermFit": "Strong opportunity; prioritize (with caveats)",
    "file": "tether_expansion_manager_tokenization_remote_brazil_2026-06-11.md",
    "keyStrengths": "**Worth applying if crypto/RWA operator path is intentional** — McKinsey + stablecoin narrative fits; deprioritize if staying fintech S&O/Corp Dev/partnerships (Visa/Adyen). **Do n",
    "keyRisk": "See opportunity file",
    "scores": {
      "fintech": 5,
      "global": 5,
      "role": 3,
      "brand": 3,
      "comp": 4,
      "operator": 4,
      "lifestyle": 3
    }
  },
  {
    "company": "J.P. Morgan",
    "role": "Market & Product Expansion — Treasury (VP)",
    "location": "São Paulo, SP — Avenida Brigadeiro Faria Lima 3729",
    "setup": "—",
    "function": "Treasury suite **commercialization** — market analysis, GTM execution, product positioning/pricing, sales/marketing collaboration, cross-sell",
    "source": "User inbound research — LinkedIn → [JPMC Oracle CX](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210746060)",
    "status": "Mapped (not applied · posting live)",
    "statusTone": "info",
    "nextStep": "Preferred JPM SP — GTM/commercialization",
    "score": "4.15",
    "priority": "9",
    "priorityTone": "neutral",
    "compensation": "Not disclosed — VP CIB SP typically strong BRL; validate vs BRL 30k+ net floor",
    "longTermFit": "Strong opportunity; prioritize (with caveats)",
    "file": "jpmorgan_market_product_expansion_treasury_vp_saopaulo_2026-06-11.md",
    "keyStrengths": "**Worth mapping; apply selectively** — stronger GTM/strategy angle than LATAM Rails delivery VP. Hold apply during active BTG Round 3 + ML referrer FUP unless deliberate bank treas",
    "keyRisk": "See opportunity file",
    "scores": {
      "fintech": 4,
      "global": 5,
      "role": 3,
      "brand": 5,
      "comp": 4,
      "operator": 3,
      "lifestyle": 2
    }
  },
  {
    "company": "J.P. Morgan",
    "role": "LATAM Payments Rails — Product Delivery Manager (VP)",
    "location": "São Paulo, SP — Avenida Brigadeiro Faria Lima 3729",
    "setup": "—",
    "function": "Product portfolio & delivery — program governance, release/operationalization, cross-functional execution",
    "source": "LinkedIn → JPMC Oracle Candidate Experience",
    "status": "Mapped (not applied · posting live)",
    "statusTone": "info",
    "nextStep": "Second JPM option",
    "score": "4.10",
    "priority": "10",
    "priorityTone": "neutral",
    "compensation": "Not disclosed — VP CIB SP typically strong BRL; validate vs BRL 30k+ net floor",
    "longTermFit": "Strong opportunity; prioritize (with seniority caveat)",
    "file": "jpmorgan_latam_payments_rails_product_delivery_manager_vp_saopaulo_2026-06-01.md",
    "keyStrengths": "Payment acquirer transformation (Brazil) — rails-adjacent infrastructure and operating model.",
    "keyRisk": "**VP + 10+ years** — seniority stretch; may need to clarify expected years and people leadership.",
    "scores": {
      "fintech": 4,
      "global": 5,
      "role": 3,
      "brand": 5,
      "comp": 4,
      "operator": 4,
      "lifestyle": 2
    }
  },
  {
    "company": "J.P. Morgan",
    "role": "Payments EMEA Innovation Economy Sales (VP)",
    "location": "Dubai International Financial Centre — Full time",
    "setup": "—",
    "function": "**Relationship Sales** — treasury & cash management / payments solutions sales",
    "source": "LinkedIn → JPMC Oracle Candidate Experience",
    "status": "Mapped (not applied · sales · live)",
    "statusTone": "info",
    "nextStep": "**Skip** — sales function",
    "score": "3.40",
    "priority": "11",
    "priorityTone": "neutral",
    "compensation": "Not disclosed",
    "longTermFit": "Opportunistic only",
    "file": "jpmorgan_payments_emea_innovation_economy_sales_vp_dubai_2026-06-01.md",
    "keyStrengths": "**Deprioritize / likely skip** — unless deliberately pivoting to enterprise payments **sales**. Not operator-strategy destination. Hold mapped for market signal only",
    "keyRisk": "See opportunity file",
    "scores": {
      "fintech": 3,
      "global": 5,
      "role": 1,
      "brand": 5,
      "comp": 4,
      "operator": 2,
      "lifestyle": 3
    }
  },
  {
    "company": "Brex",
    "role": "Manager, Banking Operations",
    "location": "São Paulo, Brazil — hybrid",
    "setup": "Remote / flexible",
    "function": "Banking Operations — payment monitoring, exception management, team leadership (Risk & Credit org)",
    "source": "User inbound research — [Brex careers](https://www.brex.com/careers/8580566002?gh_jid=8580566002)",
    "status": "Mapped (not applied · intel only)",
    "statusTone": "info",
    "nextStep": "**Do not apply** — control ops + comp below floor",
    "score": "3.35",
    "priority": "12",
    "priorityTone": "neutral",
    "compensation": "**R$ 271,932** stated expected base (annual, per posting). ≈ **R$ 22.7k gross/month** before PLR/equity — likely **below",
    "longTermFit": "Opportunistic only",
    "file": "brex_manager_banking_operations_saopaulo_2026-06-11.md",
    "keyStrengths": "**Do not apply** — valuable **market signal** only (Brex SP hiring, stablecoin rails, AI-native ops). Revisit only if SP strategy/BizOps roles at Brex appear.",
    "keyRisk": "See opportunity file",
    "scores": {
      "fintech": 5,
      "global": 5,
      "role": 3,
      "brand": 5,
      "comp": 3,
      "operator": 3,
      "lifestyle": 3
    }
  },
  {
    "company": "Amazon",
    "role": "Pricing & Payments Manager — Last Mile",
    "location": "Corporate office — **Osasco, SP** or **Rio de Janeiro, RJ** · periodic travel",
    "setup": "—",
    "function": "Last Mile Brazil — **People Manager** for Pricing, Incentives, **Payments & Disputes** (logistics partners)",
    "source": "User inbound research — LinkedIn → [amazon.jobs](https://www.amazon.jobs/en/jobs/10408004/pricing-payments-manager-partner-strategy-experience)",
    "status": "Mapped (not applied · intel only)",
    "statusTone": "info",
    "nextStep": "**Do not apply** — logistics not fintech payments",
    "score": "3.40",
    "priority": "13",
    "priorityTone": "neutral",
    "compensation": "Not disclosed — Amazon Manager Brazil typically strong BRL; validate vs floor",
    "longTermFit": "Opportunistic only",
    "file": "amazon_pricing_payments_manager_partner_strategy_brazil_2026-06-11.md",
    "keyStrengths": "**Do not apply** — intel only unless deliberate pivot to **Amazon logistics operations** people-manager track.",
    "keyRisk": "See opportunity file",
    "scores": {
      "fintech": 3,
      "global": 3,
      "role": 3,
      "brand": 5,
      "comp": 4,
      "operator": 4,
      "lifestyle": 3
    }
  }
] as Opportunity[];

const dimensions: { key: keyof OppScores; label: string; weight: string }[] = [
  { key: 'fintech', label: 'Fintech / payments / crypto relevance', weight: '20%' },
  { key: 'global', label: 'Global optionality', weight: '20%' },
  { key: 'role', label: 'Role fit', weight: '15%' },
  { key: 'brand', label: 'Brand quality', weight: '15%' },
  { key: 'comp', label: 'Compensation potential', weight: '15%' },
  { key: 'operator', label: 'Operator exposure', weight: '10%' },
  { key: 'lifestyle', label: 'Lifestyle sustainability', weight: '5%' },
];

export default function ApplicationsTracker() {
  const scoreHeaders = ['Dimension', 'Weight', ...opportunities.map(o => o.company)];

  return (
    <Stack gap={24}>
      <Stack gap={4}>
        <H1>Applications Tracker</H1>
        <Text tone="secondary" size="small">
          Last updated: {LAST_UPDATED} · {opportunities.length} opportunities · Auto-synced from {SOURCE}
        </Text>
      </Stack>

      <Grid columns={4} gap={16}>
        <Stat value={String(opportunities.length)} label="In pipeline" />
        <Stat value="3.70" label="Top score (BTG Pactual)" tone="success" />
        <Stat value={String(11)} label="Applied" tone="info" />
        <Stat value={String(3)} label="Awaiting / preparing" tone="warning" />
      </Grid>

      <Callout tone="info" title="This week">
        <Text size="small">{`BTG Pactual: Round 03 prep → \`preparation/btg_operations_transformation/round_03_btg_opstransf_stakeholder_pending/prep.md\` · warm Ana Clara. Mercado Livre: Round 01 prep → \`preparation/mercadolivre_strategy_corp_dev/round_01_meli_corpdev_screen_2026-06-12/\`. Mercado Pago: Await HR next step · keep Ivan looped. Adyen: Await recruiter / HM signal post internal apply. BBVA: Review Benjamin warm path; hold prep until screen. Amazon: Monitor [applicant portal](https://account.amazon.jobs/pt-BR/applicant). Visa: Message **James Hake** → apply Workday REF082130W. Tether: Best mapped crypto/RWA — hold BTG Round 3; no AI on application. J.P. Morgan: Preferred JPM SP — GTM/commercialization. J.P. Morgan: Second JPM option. J.P. Morgan: **Skip** — sales function. Brex: **Do not apply** — control ops + comp below floor. Amazon: **Do not apply** — logistics not fintech payments.`}</Text>
      </Callout>

      <Callout tone="warning" title="Rank ≠ score">
        <Text size="small">{`Visa **4.55** rank 7 (overdue). Amazon LATAM Payments **4.50** rank 6. MP SME **3.93** rank 3 — active via Ivan + HR.`}</Text>
      </Callout>

      <Divider />

      <H2>Pipeline Overview</H2>
      <Table
        headers={['Rank', 'Company', 'Role', 'Location', 'Score', 'Status', 'Next Step']}
        rows={opportunities.map(o => [
          <Pill tone={o.priorityTone} active size="sm">{o.priority}</Pill>,
          <Text weight="semibold">{o.company}</Text>,
          o.role,
          o.location,
          <Text weight="semibold">{o.score}</Text>,
          <Pill tone={o.statusTone} size="sm">{o.status}</Pill>,
          <Text size="small" tone="secondary">{o.nextStep}</Text>,
        ])}
        rowTone={['warning', undefined, undefined, undefined, 'warning', 'warning', undefined, undefined, undefined, undefined, undefined, undefined, undefined]}
        striped
      />

      <Divider />

      <H2>Score Breakdown</H2>
      <Table
        headers={scoreHeaders}
        rows={[
          ...dimensions.map(d => [
            d.label,
            d.weight,
            ...opportunities.map(o => String(o.scores[d.key] ?? '—')),
          ]),
          [
            <Text weight="bold">Weighted total</Text>,
            <Text weight="bold">100%</Text>,
            ...opportunities.map(o => (
              <Text weight="bold" tone={o.company === 'Revolut' ? 'primary' : undefined}>{o.score}</Text>
            )),
          ],
        ]}
        rowTone={[undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'neutral']}
        striped
        columnAlign={['left', 'right', ...opportunities.map(() => 'right' as const)]}
      />

      <Divider />

      <H2>Opportunity Profiles</H2>

      {opportunities.map((o) => (
        <Card key={o.company} collapsible defaultOpen={o.priority === '1'}>
          <CardHeader trailing={
            <Row gap={8} align="center">
              <Pill tone={o.statusTone} size="sm">{o.status}</Pill>
              <Text size="small" tone="secondary">{o.score}</Text>
            </Row>
          }>
            {o.company} — {o.role}
          </CardHeader>
          <CardBody>
            <Stack gap={12}>
              <Grid columns={3} gap={12}>
                <Stack gap={4}>
                  <Text size="small" tone="tertiary" weight="semibold">Location</Text>
                  <Text size="small">{o.location} · {o.setup}</Text>
                </Stack>
                <Stack gap={4}>
                  <Text size="small" tone="tertiary" weight="semibold">Function</Text>
                  <Text size="small">{o.function}</Text>
                </Stack>
                <Stack gap={4}>
                  <Text size="small" tone="tertiary" weight="semibold">How it started</Text>
                  <Text size="small">{o.source}</Text>
                </Stack>
                <Stack gap={4}>
                  <Text size="small" tone="tertiary" weight="semibold">Compensation</Text>
                  <Text size="small">{o.compensation}</Text>
                </Stack>
                <Stack gap={4}>
                  <Text size="small" tone="tertiary" weight="semibold">Long-term fit</Text>
                  <Text size="small">{o.longTermFit}</Text>
                </Stack>
                <Stack gap={4}>
                  <Text size="small" tone="tertiary" weight="semibold">Decision rank</Text>
                  <Text size="small">{o.priority}</Text>
                </Stack>
              </Grid>
              <Divider />
              <Grid columns={2} gap={12}>
                <Stack gap={4}>
                  <Text size="small" tone="tertiary" weight="semibold">Key strengths</Text>
                  <Text size="small">{o.keyStrengths}</Text>
                </Stack>
                <Stack gap={4}>
                  <Text size="small" tone="tertiary" weight="semibold">Key risk</Text>
                  <Text size="small">{o.keyRisk}</Text>
                </Stack>
              </Grid>
              <Row gap={8} align="center">
                <Text size="small" tone="tertiary">Next step:</Text>
                <Text size="small" weight="semibold">{o.nextStep}</Text>
                <Spacer />
                <Text size="small" tone="tertiary">{o.file}</Text>
              </Row>
            </Stack>
          </CardBody>
        </Card>
      ))}

      <Text tone="tertiary" size="small">
        Auto-sync: AI/.cursor/hooks/sync_pipeline_canvas.mjs · Workflow: AI/job_search_workflow.md
      </Text>
    </Stack>
  );
}
