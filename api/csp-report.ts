import type { VercelRequest, VercelResponse } from '@vercel/node';

const MAX_REPORT_SIZE = 10_000;
const REPORT_FIELDS = [
  'blocked-uri',
  'column-number',
  'disposition',
  'document-uri',
  'effective-directive',
  'line-number',
  'original-policy',
  'referrer',
  'script-sample',
  'source-file',
  'status-code',
  'violated-directive',
];

function trimValue(value: unknown) {
  if (typeof value === 'string') return value.slice(0, 500);
  if (typeof value === 'number') return value;
  return undefined;
}

function sanitizeReport(input: unknown) {
  const report = typeof input === 'object' && input !== null && 'csp-report' in input
    ? (input as Record<string, unknown>)['csp-report']
    : input;

  if (Array.isArray(report)) {
    return report.slice(0, 10).map(sanitizeReport);
  }

  if (typeof report !== 'object' || report === null) {
    return {};
  }

  return REPORT_FIELDS.reduce<Record<string, unknown>>((acc, field) => {
    const value = trimValue((report as Record<string, unknown>)[field]);
    if (value !== undefined) acc[field] = value;
    return acc;
  }, {});
}

function parseBody(body: unknown) {
  if (typeof body !== 'string') return body;
  if (body.length > MAX_REPORT_SIZE) return {};

  try {
    return JSON.parse(body);
  } catch {
    return {};
  }
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const contentLength = Number(req.headers['content-length'] || 0);
  if (contentLength > MAX_REPORT_SIZE) {
    return res.status(413).json({ error: 'Report too large' });
  }

  const report = sanitizeReport(parseBody(req.body));
  console.warn('[CSP Report-Only]', JSON.stringify(report));

  return res.status(204).end();
}
