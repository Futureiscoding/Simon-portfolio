import Link from 'next/link';
import { PortfolioCard } from '@/components/PortfolioCard';
import { ExportMap } from '@/components/ExportMap';
import { Testimonials } from '@/components/Testimonials';
import { portfolioItems } from '@/data/siteData';

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="rounded-2xl bg-gradient-to-r from-brand-green to-brand-emerald p-10 text-white">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-brand-gold">Global Vision. African Excellence.</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          Building resilient trade ecosystems with coffee at the core of our global growth strategy.
        </h1>
        <p className="mt-5 max-w-2xl text-white/90">
          Imperion Global Holdings Limited drives sustainable exports, processing innovation, and supply chain performance across high-growth sectors.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/coffee-division" className="rounded-full bg-brand-gold px-5 py-3 font-medium text-brand-green">
            Explore Coffee Division
          </Link>
          <Link href="/portfolios/agricultural-exports" className="rounded-full border border-white px-5 py-3">
            View Portfolios
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-semibold text-brand-green">Business Portfolios</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.slug} title={item.title} description={item.description} href={`/portfolios/${item.slug}`} />
          ))}
        </div>
      </section>

      <ExportMap />
      <Testimonials />
    </div>
  );
}
