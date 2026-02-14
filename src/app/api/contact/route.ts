import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const webhook = process.env.CRM_WEBHOOK_URL;

  if (webhook) {
    await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
  }

  return NextResponse.json({ ok: true });
}
