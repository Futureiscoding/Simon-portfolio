'use client';

import { useMemo, useState } from 'react';
import { newsPosts } from '@/data/siteData';

export default function NewsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(newsPosts.map((post) => post.category))];

  const filtered = useMemo(
    () =>
      newsPosts.filter((post) => {
        const matchCategory = category === 'All' || post.category === category;
        const matchSearch = `${post.title} ${post.excerpt}`.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
      }),
    [search, category]
  );

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-brand-green">News & Insights</h1>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search articles..."
          className="w-full rounded-md border border-slate-300 px-4 py-2"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-md border border-slate-300 px-4 py-2">
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((post) => (
          <article key={post.id} className="rounded-xl border border-brand-gold/30 p-5">
            <div className="text-xs uppercase tracking-wide text-brand-gold">{post.category}</div>
            <h2 className="mt-2 text-xl font-semibold text-brand-green">{post.title}</h2>
            <p className="mt-2 text-slate-700">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
