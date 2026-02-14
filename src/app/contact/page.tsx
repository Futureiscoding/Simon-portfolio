'use client';

import { FormEvent, useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    setStatus(res.ok ? 'Message sent successfully.' : 'Could not send message.');
    if (res.ok) event.currentTarget.reset();
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-brand-green">Contact & Partnerships</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-brand-gold/30 p-6">
          <input name="name" required placeholder="Full name" className="w-full rounded border px-3 py-2" />
          <input name="email" type="email" required placeholder="Email" className="w-full rounded border px-3 py-2" />
          <textarea name="message" required placeholder="How can we collaborate?" className="h-36 w-full rounded border px-3 py-2" />
          <button className="rounded-full bg-brand-green px-5 py-2 text-white">Submit Inquiry</button>
          {status && <p className="text-sm text-brand-emerald">{status}</p>}
        </form>

        <div className="space-y-4 rounded-xl bg-brand-sand p-6">
          <p><strong>Office:</strong> Nairobi, Kenya</p>
          <p><strong>Email:</strong> partnerships@imperionglobal.com</p>
          <a
            href="https://wa.me/254700000000?text=Hello%20Imperion%20Global%20Holdings"
            target="_blank"
            className="inline-block rounded-full bg-[#25D366] px-4 py-2 font-medium text-white"
            rel="noreferrer"
          >
            Chat via WhatsApp Business
          </a>
          <iframe
            title="office-map"
            src="https://maps.google.com/maps?q=Nairobi&t=&z=10&ie=UTF8&iwloc=&output=embed"
            className="h-64 w-full rounded-lg border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
