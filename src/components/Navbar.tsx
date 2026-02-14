'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { portfolioItems } from '@/data/siteData';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gold/20 bg-brand-green/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Imperion Global Holdings
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/about">About</Link>
          <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button className="flex items-center gap-1">
              Portfolios <ChevronDown size={16} />
            </button>
            {open && (
              <div className="absolute left-0 top-8 w-80 rounded-md border border-brand-gold/30 bg-white p-3 text-sm text-slate-800 shadow-glow">
                {portfolioItems.map((item) => (
                  <Link key={item.slug} href={`/portfolios/${item.slug}`} className="block rounded px-3 py-2 hover:bg-brand-sand">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/coffee-division">Coffee Division</Link>
          <Link href="/news">News & Insights</Link>
          <Link href="/contact" className="rounded-full bg-brand-gold px-4 py-2 text-brand-green">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
