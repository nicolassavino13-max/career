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

const LAST_UPDATED = '2026-05-29';
const SOURCE = 'Career/applications_tracker.md';

const opportunities = [
  {
    "company": "Revolut",
    "role": "S&O Manager — Revenue",
    "location": "Primary: UAE / Dubai",
    "setup": "Remote / flexible",
    "function": "Strategy & Operations / Revenue Strategy / Global Strategy",
    "source": "**Inbound recruiter outreach from Revolut** — Primary source. JD page is supplementary.",
    "status": "Interviewing (screen · 2026-06-02)",
    "statusTone": "info",
    "nextStep": "Prep screen call; confirm timezone in invite",
    "score": "4.85",
    "priority": "1",
    "priorityTone": "success",
    "compensation": "USD 10k+ net/month confirmed for UAE. Meets long-term target. Full relocation and visa sponsorship confirmed for Nicolas",
    "longTermFit": "Must pursue aggressively",
    "file": "revolut_strategy_operations_manager_dubai_2026-05-25.md",
    "keyStrengths": "Must pursue aggressively — all major variables confirmed positive",
    "keyRisk": "See opportunity file",
    "scores": {
      "fintech": 5,
      "global": 5,
      "role": 5,
      "brand": 5,
      "comp": 5,
      "operator": 5,
      "lifestyle": 4
    }
  },
  {
    "company": "Mercado Pago",
    "role": "Gerente de Negócios Cripto",
    "location": "São Paulo, Brazil",
    "setup": "Hybrid",
    "function": "Business Development / vertical P&L owner — crypto, stablecoin (Meli dolar), token offerings",
    "source": "LinkedIn — applied direct (cold); separate from ML Corp Dev referral track",
    "status": "Applied (direct · awaiting ATS)",
    "statusTone": "warning",
    "nextStep": "Wait ATS; follow up Ivan ~06-03; find 1–2 crypto contacts",
    "score": "4.40",
    "priority": "2",
    "priorityTone": "info",
    "compensation": "Not disclosed. São Paulo BRL role. Must validate vs BRL 30k+ net floor.",
    "longTermFit": "Strong opportunity; prioritize",
    "file": "mercadopago_gerente_negocios_cripto_saopaulo_2026-05-27.md",
    "keyStrengths": "Stablecoin cross-border payments consortium: regulatory path, operating model, market entry (LatAm).",
    "keyRisk": "No in-house crypto product launch or P&L ownership yet — McKinsey exposure only.",
    "scores": {
      "fintech": 5,
      "global": 4,
      "role": 4,
      "brand": 5,
      "comp": 3,
      "operator": 5,
      "lifestyle": 3
    }
  },
  {
    "company": "Mercado Livre",
    "role": "Estratégia & Corp Dev",
    "location": "São Paulo, Brazil",
    "setup": "Hybrid",
    "function": "Strategy & Corporate Development — Ads & Marketing vertical",
    "source": "LinkedIn — applied with internal referral from a friend who is a Manager at Mercado Livre",
    "status": "Applied (referral · awaiting ATS)",
    "statusTone": "warning",
    "nextStep": "Hold; rebalance to Crypto if ML HR contacts first",
    "score": "4.10",
    "priority": "3",
    "priorityTone": "neutral",
    "compensation": "Not disclosed. São Paulo BRL role. Must validate.",
    "longTermFit": "Strong opportunity; prioritize",
    "file": "mercadolivre_strategy_corp_dev_saopaulo_2026-05-25.md",
    "keyStrengths": "Strong opportunity; prioritize — referral submitted, strong role fit, good brand, compensation TBD",
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
    "company": "BTG Pactual",
    "role": "Operations Transformation (inbound)",
    "location": "São Paulo",
    "setup": "Hybrid",
    "function": "Operations / transformation (likely BizOps, process excellence, digital ops — TBD)",
    "source": "WhatsApp inbound — Ana Clara (HR BTG); referral: João Torneli",
    "status": "Interviewing (HR screen · 2026-06-01)",
    "statusTone": "info",
    "nextStep": "Prep HR call; debrief João; qualify scope + seniority",
    "score": "3.70",
    "priority": "4",
    "priorityTone": "neutral",
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
    "company": "Visa",
    "role": "Sr Manager, Product Strategy & Planning",
    "location": "Dubai, United Arab Emirates",
    "setup": "Remote / flexible",
    "function": "Product Strategy & Planning — CEMEA Products",
    "source": "Discovery scan → Remote DXB aggregator; **verified live on Visa Workday 2026-05-27**",
    "status": "Mapped (not applied · posting live)",
    "statusTone": "info",
    "nextStep": "**Apply** on Workday REF082130W",
    "score": "4.55",
    "priority": "5",
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
    "company": "BBVA",
    "role": "Strategy & Ops Manager — CIB MENA",
    "location": "Abu Dhabi, United Arab Emirates",
    "setup": "Hybrid",
    "function": "Strategy & Operations — Corporate & Investment Banking (CIB) regional setup",
    "source": "LinkedIn — user mapped and applied direct (PROMOTE inbound)",
    "status": "Applied (direct · awaiting response)",
    "statusTone": "warning",
    "nextStep": "Review Benjamin for warm path; hold prep until screen",
    "score": "3.90",
    "priority": "6",
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
    "company": "Adyen",
    "role": "Senior Alliances Partner Manager",
    "location": "São Paulo, Brazil — Morumbi office. Office-first: 3 days on site. No remote option.",
    "setup": "Remote / flexible",
    "function": "Strategic Partnerships / Alliances / Commercial",
    "source": "Greenhouse. Internal contact outreach sent 2026-05-26 — conversation before applying to secure referral.",
    "status": "Mapped (awaiting referral)",
    "statusTone": "warning",
    "nextStep": "Wait for contact reply; schedule call before apply",
    "score": "4.45",
    "priority": "7",
    "priorityTone": "neutral",
    "compensation": "Not disclosed. São Paulo BRL role. Likely includes variable/commercial component. Must validate.",
    "longTermFit": "Strong opportunity; prioritize (score) — conditional (action)",
    "file": "adyen_senior_alliances_partner_manager_saopaulo_2026-05-25.md",
    "keyStrengths": "Conditional — pursue only if Revolut and Mercado Livre do not materialize. Valuable commercial skills acquisition with Adyen brand, but not aligned with long-term strategy/Corp Dev",
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
        <Stat value="4.85" label="Top score (Revolut)" tone="success" />
        <Stat value={String(4)} label="Applied" tone="info" />
        <Stat value={String(4)} label="Awaiting / preparing" tone="warning" />
      </Grid>

      <Callout tone="info" title="This week">
        <Text size="small">{`Revolut: Prep screen call; confirm timezone in invite. Mercado Pago: Wait ATS; follow up Ivan ~06-03; find 1–2 crypto contacts. Mercado Livre: Hold; rebalance to Crypto if ML HR contacts first. BTG Pactual: Prep HR call; debrief João; qualify scope + seniority. Visa: **Apply** on Workday REF082130W. BBVA: Review Benjamin for warm path; hold prep until screen. Adyen: Wait for contact reply; schedule call before apply.`}</Text>
      </Callout>

      <Callout tone="warning" title="Rank ≠ score">
        <Text size="small">{`MP Crypto **4.40** rank 2. ML Corp Dev **4.10** rank 3. BTG **3.70** rank 4. BBVA **3.90** rank 6 (applied, but below Visa/Adyen on fintech narrative). Checkout **4.75** and Nubank **4.35** are on watchlist only (archived postings).`}</Text>
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
        rowTone={[undefined, 'warning', 'warning', undefined, undefined, 'warning', 'warning']}
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
