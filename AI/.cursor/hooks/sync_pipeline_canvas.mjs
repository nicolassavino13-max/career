#!/usr/bin/env node
/**
 * Regenerate applications-tracker.canvas.tsx from applications_tracker.md + opportunity files.
 * Cursor afterFileEdit hook — see .cursor/hooks.json (calls AI/.cursor/hooks/)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../../..');
const TRACKER = path.join(ROOT, 'Career/applications_tracker.md');
const APPS_DIR = path.join(ROOT, 'Career/Applications');
const PATH_FILE = path.join(ROOT, 'AI/.cursor/pipeline_canvas_path.txt');

const DIMENSION_MAP = [
  ['fintech', /fintech|payments|crypto/i],
  ['global', /global optionality/i],
  ['role', /role fit/i],
  ['brand', /brand quality/i],
  ['comp', /compensation potential/i],
  ['operator', /operator exposure/i],
  ['lifestyle', /lifestyle/i],
];

const TRIGGER = [
  /Career[/\\]applications_tracker\.md$/i,
  /Career[/\\]Applications[/\\](?!templates[/\\]).+\.md$/i,
];

function shouldRun(filePath) {
  if (!filePath) return false;
  const norm = filePath.replace(/\\/g, '/');
  return TRIGGER.some((re) => re.test(norm));
}

function readHookPath() {
  try {
    if (process.stdin.isTTY) return null;
    const raw = fs.readFileSync(0, 'utf8');
    if (!raw.trim()) return null;
    const data = JSON.parse(raw);
    for (const key of ['file_path', 'path', 'file', 'filePath', 'edited_file']) {
      if (data[key]) return String(data[key]);
    }
    const ti = data.tool_input || data.input;
    if (ti && typeof ti === 'object') {
      for (const key of ['file_path', 'path', 'file']) {
        if (ti[key]) return String(ti[key]);
      }
    }
  } catch {
    /* empty stdin or invalid json */
  }
  return null;
}

function canvasOutputPaths() {
  const paths = [];
  if (fs.existsSync(PATH_FILE)) {
    const p = fs.readFileSync(PATH_FILE, 'utf8').trim();
    paths.push(path.isAbsolute(p) ? p : path.resolve(ROOT, p));
  } else {
    paths.push(path.join(ROOT, 'AI/canvases/applications-tracker.canvas.tsx'));
  }
  const cursorPath = path.join(
    process.env.USERPROFILE || process.env.HOME || '',
    '.cursor/projects/c-Users-nicol-OneDrive-rea-de-Trabalho-NicOS/canvases/applications-tracker.canvas.tsx'
  );
  if (!paths.includes(cursorPath)) paths.push(cursorPath);
  return paths;
}

function parseTrackerRows(text) {
  const rows = [];
  let inSummary = false;
  for (const line of text.split(/\r?\n/)) {
    if (line.trim() === '## Pipeline Summary') {
      inSummary = true;
      continue;
    }
    if (inSummary && line.trim().startsWith('---')) break;
    if (!inSummary || !line.startsWith('|') || line.includes('---') || line.includes('Rank |')) continue;
    const parts = line.slice(1, -1).split('|').map((p) => p.trim());
    if (parts.length < 8) continue;
    rows.push({
      rank: parts[0],
      company: parts[1],
      role: parts[2],
      score: parts[3],
      status: parts[4],
      next_step: parts[5],
      due: parts[6],
      file: parts[7].replace(/`/g, '').trim(),
    });
  }
  return rows;
}

function parseRankNote(text) {
  const m = text.match(/\*\*Rank ≠ score:\*\*\s*(.+)/);
  return m ? m[1].trim() : '';
}

function parseLastLogDate(text) {
  const dates = [...text.matchAll(/^\|\s*(\d{4}-\d{2}-\d{2})\s*\|/gm)].map((m) => m[1]);
  return dates.length ? dates[dates.length - 1] : new Date().toISOString().slice(0, 10);
}

function metaField(text, field) {
  const re = new RegExp(`^\\|\\s*${field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\|\\s*(.+?)\\s*\\|`, 'm');
  const m = text.match(re);
  return m ? m[1].trim() : '';
}

function scoringSection(text) {
  const start = text.search(/^#\s*Scoring\s*$/im);
  if (start < 0) return text;
  const rest = text.slice(start);
  const afterHeading = rest.indexOf('\n') + 1;
  const body = rest.slice(afterHeading);
  const nextHeading = body.search(/^#\s+\S/m);
  return nextHeading >= 0 ? rest.slice(0, afterHeading + nextHeading) : rest.slice(0, 6000);
}

function parseScores(text) {
  const chunk = scoringSection(text);
  const scores = Object.fromEntries(DIMENSION_MAP.map(([k]) => [k, 3]));
  for (const [key, pattern] of DIMENSION_MAP) {
    // (?:pattern) required — bare fintech|payments|crypto matches lone "payments" → NaN → null in JSON
    const re = new RegExp(
      `^\\|\\s*(?:[^|]*(?:${pattern.source})[^|]*)\\|\\s*\\d+%\\s*\\|\\s*(\\d)\\s*\\|`,
      'im'
    );
    const m = chunk.match(re);
    const n = m ? parseInt(m[1], 10) : NaN;
    if (!Number.isNaN(n)) scores[key] = n;
  }
  return scores;
}

function firstBulletAfter(text, heading) {
  const idx = text.indexOf(heading);
  if (idx < 0) return '';
  const chunk = text.slice(idx, idx + 800);
  for (const line of chunk.split(/\r?\n/).slice(1)) {
    const t = line.trim();
    if (t.startsWith('- ')) return t.slice(2).trim().slice(0, 200);
    if (t.startsWith('## ')) break;
  }
  return '';
}

function statusTone(status) {
  const s = status.toLowerCase();
  if (/paused|removed|rejected|withdrawn/.test(s)) return 'deleted';
  if (/awaiting/.test(s)) return 'warning';
  if (/applied|interview/.test(s)) return 'info';
  if (/offer/.test(s)) return 'success';
  return 'neutral';
}

function priorityTone(rank) {
  if (rank === '1') return 'success';
  if (rank === '2') return 'info';
  return 'neutral';
}

function buildOpportunity(row) {
  const appPath = path.join(APPS_DIR, row.file);
  const body = fs.existsSync(appPath) ? fs.readFileSync(appPath, 'utf8') : '';
  const location = metaField(body, 'Location') || '—';
  let setup = /hybrid/i.test(body) || /hybrid/i.test(location) ? 'Hybrid' : '—';
  if (/remote/i.test(body.slice(0, 3000))) setup = 'Remote / flexible';
  const band = metaField(body, 'Score band');
  const recommendation = metaField(body, 'Final recommendation') || band || '—';
  return {
    company: row.company,
    role: row.role,
    location: location.split('(')[0].trim(),
    setup,
    function: metaField(body, 'Function') || '—',
    source: metaField(body, 'Source') || '—',
    status: row.status,
    statusTone: statusTone(row.status),
    nextStep: row.next_step,
    score: row.score,
    priority: row.rank,
    priorityTone: priorityTone(row.rank),
    compensation: (metaField(body, 'Compensation') || 'Not disclosed').slice(0, 120),
    longTermFit: (band || recommendation).slice(0, 120),
    file: row.file,
    keyStrengths: firstBulletAfter(body, '## Strongest proof points') || recommendation.slice(0, 180) || '—',
    keyRisk: firstBulletAfter(body, '## Gaps / risks') || firstBulletAfter(body, '### Gaps / risks') || 'See opportunity file',
    scores: parseScores(body),
  };
}

function jsxText(s) {
  return '`' + s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';
}

function renderCanvas(opportunities, lastUpdated, week, rankNote) {
  const oppsJson = JSON.stringify(opportunities, null, 2);
  const applied = opportunities.filter((o) => /applied/i.test(o.status)).length;
  const waiting = opportunities.filter((o) => /awaiting|preparing/i.test(o.status)).length;
  const topScore = opportunities[0]?.score ?? '—';
  const topCompany = opportunities[0]?.company ?? '—';
  const rowTones = opportunities.map((o) => {
    if (o.statusTone === 'warning') return "'warning'";
    if (o.statusTone === 'deleted') return "'deleted'";
    return 'undefined';
  });

  return `import {
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

const LAST_UPDATED = '${lastUpdated}';
const SOURCE = 'Career/applications_tracker.md';

const opportunities = ${oppsJson} as Opportunity[];

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
        <Stat value="${topScore}" label="Top score (${topCompany})" tone="success" />
        <Stat value={String(${applied})} label="Applied" tone="info" />
        <Stat value={String(${waiting})} label="Awaiting / preparing" tone="warning" />
      </Grid>

      <Callout tone="info" title="This week">
        <Text size="small">{${jsxText(week)}}</Text>
      </Callout>

      <Callout tone="warning" title="Rank ≠ score">
        <Text size="small">{${jsxText(rankNote)}}</Text>
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
        rowTone={[${rowTones.join(', ')}]}
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
`;
}

function sync() {
  if (!fs.existsSync(TRACKER)) {
    console.error('applications_tracker.md not found');
    process.exit(1);
  }
  const text = fs.readFileSync(TRACKER, 'utf8');
  const rows = parseTrackerRows(text);
  if (!rows.length) {
    console.error('no pipeline rows');
    process.exit(1);
  }
  const opportunities = rows.map(buildOpportunity);
  const lastUpdated = parseLastLogDate(text);
  const week = rows.map((r) => `${r.company}: ${r.next_step}`).join('. ') + '.';
  const rankNote = parseRankNote(text) || 'Ranks reflect process momentum and posting status, not score alone.';
  const content = renderCanvas(opportunities, lastUpdated, week.slice(0, 900), rankNote.slice(0, 500));
  for (const out of canvasOutputPaths()) {
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, content, 'utf8');
    console.error(`synced canvas -> ${out}`);
  }
}

const force = process.argv.includes('--force');

if (force) {
  sync();
} else {
  const edited = readHookPath();
  if (edited !== null && shouldRun(edited)) {
    sync();
  }
}
