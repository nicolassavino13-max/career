import { Divider, Grid, H1, H2, Stack, Stat, Table, Text } from 'cursor/canvas';

const weeklyPlan = [
  {
    week: 'Week 1',
    objective: 'Build Cursor fluency around your own career files.',
    dailyPractice: [
      'Day 1: Ask Cursor to summarize career_goals.md, role_scorecard.md, target_companies.md, and CV into a one-page career brief.',
      'Day 2: Practice asking precise questions about fit: "Score this role against my scorecard" and "What concerns should I test?"',
      'Day 3: Create a reusable prompt for evaluating any job description against your role_scorecard.md.',
      'Day 4: Use Cursor to compare two roles side by side using your scoring logic.',
      'Day 5: Ask Cursor to rewrite one CV bullet for Revolut, Adyen, and Mercado Livre positioning.',
      'Day 6: Build a small prompt library for job evaluation, CV tailoring, referral messages, and recruiter replies.',
      'Day 7: Review what worked, delete weak prompts, and keep only the ones that create clear leverage.'
    ],
    asset: 'career_hunt_prompt_library.md',
    why: 'You stop using Cursor as a generic chatbot and start using it as a career operating system grounded in your own context.'
  },
  {
    week: 'Week 2',
    objective: 'Turn company and role research into structured decision-making.',
    dailyPractice: [
      'Day 8: Pick one target company and ask Cursor to generate a focused research brief structure.',
      'Day 9: Research Revolut manually, paste findings, and ask Cursor to organize them into role-fit implications.',
      'Day 10: Repeat for Adyen, focusing on payments infrastructure, partnerships, and commercial scope.',
      'Day 11: Repeat for Mercado Livre, focusing on platform economics, Corp Dev, ads, fintech adjacency, and global optionality.',
      'Day 12: Ask Cursor to identify what each company will likely care about in your profile.',
      'Day 13: Build a company evaluation template based on your target_companies.md and role_scorecard.md.',
      'Day 14: Use the template on one real opportunity and decide whether to pursue, deprioritize, or gather more data.'
    ],
    asset: 'company_research_template.md',
    why: 'You build a repeatable way to convert messy company research into career decisions, not just notes.'
  },
  {
    week: 'Week 3',
    objective: 'Use Cursor to produce sharper market-facing material.',
    dailyPractice: [
      'Day 15: Draft three positioning variants: fintech strategy operator, payments growth builder, and AI-native business operator.',
      'Day 16: Tailor your CV top bullets for Revolut Strategy & Ops / Revenue.',
      'Day 17: Tailor your CV top bullets for Adyen Strategic Partnerships / Alliances.',
      'Day 18: Tailor your CV top bullets for Mercado Livre Strategy & Corporate Development.',
      'Day 19: Draft one recruiter reply and one referral message for each of the three active targets.',
      'Day 20: Ask Cursor to critique your messages for clarity, seniority, and overclaiming.',
      'Day 21: Consolidate the best versions into reusable snippets.'
    ],
    asset: 'positioning_variants.md',
    why: 'You move from broad career intent to role-specific messaging that recruiters, referrers, and hiring managers can immediately understand.'
  },
  {
    week: 'Week 4',
    objective: 'Build the execution loop for applications, networking, and interviews.',
    dailyPractice: [
      'Day 22: Create a simple application tracker with company, role, score, contact, status, next action, and follow-up date.',
      'Day 23: Add current opportunities: Revolut, Adyen, and Mercado Livre.',
      'Day 24: Create a lightweight network map by category: IESE, McKinsey, fintech, payments, crypto, recruiters, warm intros.',
      'Day 25: Draft a story bank outline using your strongest experiences: wallet MVP, stablecoin consortium, acquirer transformation, SME analytics, Petrobras sale, crew leadership.',
      'Day 26: Turn two stories into interview-ready STAR format.',
      'Day 27: Ask Cursor to generate interview questions for one target role and answer them using your story bank.',
      'Day 28: Run a mock fit interview prompt focused on "Why fintech?", "Why this role?", and "Why now?".',
      'Day 29: Review your tracker and decide top 5 next actions for the following week.',
      'Day 30: Write a 30-day retrospective: what Cursor helped with, what still felt manual, and what workflow to automate next.'
    ],
    asset: 'career_hunt_execution_system.md',
    why: 'You finish the month with a working job-search system: pipeline, network, stories, messages, and a weekly operating rhythm.'
  }
];

const weeklyRows = weeklyPlan.map((item) => [
  item.week,
  item.objective,
  item.asset,
  item.why
]);

export default function CursorCareerLearningPlan() {
  return (
    <Stack gap={20}>
      <Stack gap={8}>
        <H1>30-Day Cursor Learning Plan</H1>
        <Text>
          A practical plan to use Cursor for strategy, fintech positioning, and job-search leverage without going deep into software engineering.
        </Text>
      </Stack>

      <Grid columns={4} gap={16}>
        <Stat value="30" label="Days" />
        <Stat value="4" label="Weekly objectives" />
        <Stat value="5" label="Career assets" />
        <Stat value="1" label="Main outcome: job-search operating system" />
      </Grid>

      <Divider />

      <H2>Plan At A Glance</H2>
      <Table
        headers={['Week', 'Objective', 'Asset to build', 'Why it matters']}
        rows={weeklyRows}
      />

      <Divider />

      {weeklyPlan.map((item) => (
        <Stack key={item.week} gap={10}>
          <H2>{item.week}</H2>
          <Text><strong>Objective:</strong> {item.objective}</Text>
          <Text><strong>Asset to build:</strong> {item.asset}</Text>
          <Text><strong>Why it matters for your career transition:</strong> {item.why}</Text>
          <Table
            headers={['Daily practice']}
            rows={item.dailyPractice.map((practice) => [practice])}
          />
        </Stack>
      ))}

      <Divider />

      <Stack gap={8}>
        <H2>Operating Rule</H2>
        <Text>
          Every Cursor session should produce one reusable artifact, one sharper career decision, or one message that moves a real opportunity forward.
        </Text>
      </Stack>
    </Stack>
  );
}
