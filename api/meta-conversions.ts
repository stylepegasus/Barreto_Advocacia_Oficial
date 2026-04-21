import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

const PIXEL_ID = process.env.META_PIXEL_ID || '1256595062560956';
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const ALLOWED_EVENTS = new Set(['Lead', 'PageView', 'ViewContent']);
const ALLOWED_ORIGIN_HOSTS = new Set([
  'advocaciabarreto.com',
  'www.advocaciabarreto.com',
]);

function sha256(value?: string | null) {
  if (!value) return undefined;
  return crypto
    .createHash('sha256')
    .update(value.trim().toLowerCase())
    .digest('hex');
}

function readString(value: unknown, maxLength = 300) {
  if (typeof value !== 'string') return undefined;
  const normalized = value.trim();
  if (!normalized) return undefined;
  return normalized.slice(0, maxLength);
}

function isAllowedOrigin(origin?: string) {
  if (!origin) return true;

  try {
    const url = new URL(origin);
    const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
    const isProduction = ALLOWED_ORIGIN_HOSTS.has(url.hostname);
    const isVercelPreview = url.hostname.endsWith('.vercel.app');
    return isLocal || ((url.protocol === 'https:') && (isProduction || isVercelPreview));
  } catch {
    return false;
  }
}

function getEventSourceUrl(candidate?: string, referer?: string) {
  const fallback = readString(referer, 500);
  const source = readString(candidate, 500) || fallback;
  if (!source) return '';

  try {
    const url = new URL(source);
    const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
    if (url.protocol !== 'https:' && !isLocal) return '';
    if (
      !isLocal &&
      !ALLOWED_ORIGIN_HOSTS.has(url.hostname) &&
      !url.hostname.endsWith('.vercel.app')
    ) {
      return '';
    }
    url.hash = '';
    return url.toString();
  } catch {
    return '';
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const origin = Array.isArray(req.headers.origin) ? req.headers.origin[0] : req.headers.origin;
  if (!isAllowedOrigin(origin)) {
    return res.status(403).json({ error: 'Origin not allowed' });
  }

  if (!ACCESS_TOKEN) {
    return res.status(500).json({ error: 'Missing META_CAPI_ACCESS_TOKEN' });
  }

  try {
    const {
      event_name,
      event_id,
      email,
      phone,
      event_source_url,
      fbp,
      fbc,
    } = req.body || {};

    const eventName = readString(event_name, 50);
    if (!eventName || !ALLOWED_EVENTS.has(eventName)) {
      return res.status(400).json({ error: 'Invalid event_name' });
    }

    const event_time = Math.floor(Date.now() / 1000);
    const eventId = readString(event_id, 120);
    const emailValue = readString(email, 320);
    const phoneValue = readString(phone, 40);

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time,
          event_id: eventId,
          action_source: 'website',
          event_source_url: getEventSourceUrl(
            event_source_url,
            Array.isArray(req.headers.referer) ? req.headers.referer[0] : req.headers.referer,
          ),
          user_data: {
            em: emailValue ? [sha256(emailValue)] : undefined,
            ph: phoneValue ? [sha256(phoneValue)] : undefined,
            client_user_agent: req.headers['user-agent'],
            fbp: readString(fbp, 200),
            fbc: readString(fbc, 200),
          },
        },
      ],
    };

    const url = `https://graph.facebook.com/v20.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

    const fbRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const fbJson = await fbRes.json();
    return res.status(fbRes.status).json(fbJson);
  } catch (error: any) {
    console.error('[Meta Conversions] Unexpected error', error);
    return res.status(500).json({ error: 'Unexpected error' });
  }
}
