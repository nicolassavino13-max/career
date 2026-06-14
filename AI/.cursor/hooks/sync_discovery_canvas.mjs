#!/usr/bin/env node
/**
 * Regenerate opportunities-tracker.canvas.tsx from
 * Career/opportunities_tracker.md
 * Cursor afterFileEdit hook — see .cursor/hooks.json (calls AI/.cursor/hooks/)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../../..');
const SOURCE = path.join(ROOT, 'Career/opportunities_tracker.md');
const PATH_FILE = path.join(ROOT, 'AI/.cursor/discovery_canvas_path.txt');

const TRIGGER = [/Career[/\\]opportunities_tracker\.md$/i];

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
    /* empty stdin */
  }
  return null;
}

const CURSOR_CANVAS = path.join(
  process.env.USERPROFILE || process.env.HOME || '',
  '.cursor/projects/c-Users-nicol-OneDrive-rea-de-Trabalho-NicOS/canvases/opportunities-tracker.canvas.tsx'
);

function canvasOutputPaths() {
  const paths = [];
  if (fs.existsSync(PATH_FILE)) {
    const p = fs.readFileSync(PATH_FILE, 'utf8').trim();
    paths.push(path.isAbsolute(p) ? p : path.resolve(ROOT, p));
  } else {
    paths.push(path.join(ROOT, 'AI/canvases/opportunities-tracker.canvas.tsx'));
  }
  if (!paths.includes(CURSOR_CANVAS)) paths.push(CURSOR_CANVAS);
  return paths;
}

function parseScanDate(text) {
  const m = text.match(/\*\*Last scan:\*\*\s*(\d{4}-\d{2}-\d{2})/);
  return m ? m[1] : new Date().toISOString().slice(0, 10);
}

function parseCandidates(text) {
  const rows = [];
  let inTable = false;
  for (const line of text.split(/\r?\n/)) {
    if (line.trim() === '# Candidate Table') {
      inTable = true;
      continue;
    }
    if (inTable && line.trim().startsWith('# ')) break;
    if (!inTable || !line.startsWith('|') || line.includes('---') || line.includes('Date found |')) continue;
    const parts = line.slice(1, -1).split('|').map((p) => p.trim());
    if (parts.length < 12) continue;
    const [, company, role] = parts;
    if (!company || role === '—' || !role) continue;
    rows.push({
      dateFound: parts[0],
      company: parts[1],
      role: parts[2],
      seniority: parts[3],
      location: parts[4],
      source: parts[5],
      link: parts[6],
      linkStatus: parts[7],
      fit: parts[8],
      decision: parts[9].replace(/\*\*/g, ''),
      reason: parts[10],
      next: parts[11],
    });
  }
  return rows;
}

function parseLatestWeekNotes(text) {
  const weekRe = /^## Week of (\d{4}-\d{2}-\d{2})/gm;
  const matches = [...text.matchAll(weekRe)];
  if (!matches.length) return { top3: [], stale: '', scanMethod: '' };
  const start = matches[0].index;
  const end = matches.length > 1 ? matches[1].index : text.length;
  const block = text.slice(start, end);

  const top3 = [];
  const topSection = block.match(/\*\*Top 3[^*]*\*\*\s*\n([\s\S]*?)(?:\n\*\*|$)/);
  if (topSection) {
    for (const line of topSection[1].split('\n')) {
      const t = line.trim();
      if (/^\d+\./.test(t)) top3.push(t.replace(/^\d+\.\s*/, '').slice(0, 200));
    }
  }

  const staleSection = block.match(/\*\*Stale[^*]*\*\*\s*\n([\s\S]*?)(?:\n\*\*|$)/);
  const stale = staleSection
    ? staleSection[1]
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.startsWith('-'))
        .slice(0, 6)
        .join(' ')
        .slice(0, 500)
    : '';

  const methodM = block.match(/\*\*Scan method:\*\*\s*(.+)/);
  return {
    top3,
    stale,
    scanMethod: methodM ? methodM[1].trim().slice(0, 300) : '',
  };
}

function decisionTone(decision) {
  if (decision === 'Process now') return 'success';
  if (decision === 'Promoted') return 'info';
  if (decision === 'Already processed') return 'info';
  if (decision === 'Monitor') return 'warning';
  if (decision === 'Need more info') return 'neutral';
  return 'deleted';
}

function linkStatusTone(status) {
  if (status === 'Live') return 'success';
  if (status === 'Stale') return 'deleted';
  if (status === 'Aggregator') return 'warning';
  return 'neutral';
}

function jsxText(s) {
  return '`' + String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';
}

function renderCanvas(candidates, scanDate, notes) {
  const oppsJson = JSON.stringify(candidates, null, 2);
  const top3Json = JSON.stringify(notes.top3, null, 2);

  const processNow = candidates.filter((c) => c.decision === 'Process now');
  const promoteNext = candidates.filter(
    (c) => c.decision === 'Monitor' && (c.fit === 'Very high' || c.fit === 'High')
  ).slice(0, 5);
  const promoted = candidates.filter((c) => c.decision === 'Promoted');
  const inPipeline = candidates.filter(
    (c) => c.decision === 'Already processed' || c.decision === 'Promoted'
  );
  const monitor = candidates.filter((c) => c.decision === 'Monitor');
  const needInfo = candidates.filter((c) => c.decision === 'Need more info');

  const dubaiCount = candidates.filter((c) =>
    /dubai|uae|emirates/i.test(c.location)
  ).length;
  const spCount = candidates.filter((c) =>
    /são paulo|sao paulo|brazil|curitiba|osasco/i.test(c.location)
  ).length;
  const otherCount = Math.max(0, candidates.length - dubaiCount - spCount);

  const decisionLabels = [
    'Process now',
    'Promoted',
    'Already processed',
    'Monitor',
    'Need more info',
    'Ignore',
  ];
  const decisionCounts = decisionLabels.map((label) => ({
    label,
    value: candidates.filter((c) => c.decision === label).length,
  }));

  return `import {
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
const SCAN_DATE = '${scanDate}';

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

const candidates = ${oppsJson} as Candidate[];

const top3Notes = ${top3Json} as string[];

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

const decisionCounts = ${JSON.stringify(decisionCounts)};

const dubaiCount = ${dubaiCount};
const spCount = ${spCount};
const otherCount = ${otherCount};

const linkStatusTone = (s: string): 'success' | 'warning' | 'neutral' | 'deleted' => {
  if (s === 'Live') return 'success';
  if (s === 'Stale') return 'deleted';
  if (s === 'Aggregator') return 'warning';
  return 'neutral';
};

function shortRole(role: string) {
  return role.length > 42 ? \`\${role.slice(0, 40)}…\` : role;
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
                <Row key={\`\${c.company}-\${c.role}\`} gap={8} align="center" wrap>
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
                <Row key={\`\${c.company}-\${c.role}\`} gap={8} align="center" wrap>
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
        ${notes.stale ? `<Callout tone="warning" title="Stale / uncertain">${`<Text size="small">{${jsxText(notes.stale)}}</Text>`}</Callout>` : ''}
      </Stack>

      <Text tone="tertiary" size="small">
        Auto-sync: AI/.cursor/hooks/sync_discovery_canvas.mjs · Command: RUN_DISCOVERY
      </Text>
    </Stack>
  );
}
`;
}

function sync() {
  if (!fs.existsSync(SOURCE)) {
    console.error('opportunities_tracker.md not found');
    process.exit(1);
  }
  const text = fs.readFileSync(SOURCE, 'utf8');
  const candidates = parseCandidates(text);
  if (!candidates.length) {
    console.error('no candidate rows parsed');
    process.exit(1);
  }
  const scanDate = parseScanDate(text);
  const notes = parseLatestWeekNotes(text);
  const content = renderCanvas(candidates, scanDate, notes);
  for (const out of canvasOutputPaths()) {
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, content, 'utf8');
    console.error(`synced discovery canvas -> ${out} (${candidates.length} rows)`);
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
