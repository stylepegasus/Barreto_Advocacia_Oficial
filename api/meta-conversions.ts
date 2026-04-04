import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

const PIXEL_ID = process.env.META_PIXEL_ID || '1256595062560956';
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;

function sha256(value?: string | null) {
  if (!value) return undefined;
  return crypto
    .createHash('sha256')
    .update(value.trim().toLowerCase())
    .digest('hex');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
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

    if (!event_name) {
      return res.status(400).json({ error: 'event_name is required' });
    }

    const event_time = Math.floor(Date.now() / 1000);

    const payload = {
      data: [
        {
          event_name,
          event_time,
          event_id,
          action_source: 'website',
          event_source_url: event_source_url || req.headers.referer || '',
          user_data: {
            em: email ? [sha256(email)] : undefined,
            ph: phone ? [sha256(phone)] : undefined,
            client_user_agent: req.headers['user-agent'],
            fbp,
            fbc,
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
    return res.status(500).json({ error: 'Unexpected error', details: String(error) });
  }
}
