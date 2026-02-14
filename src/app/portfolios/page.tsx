import { portfolioItems } from '@/data/siteData';
import { PortfolioCard } from '@/components/PortfolioCard';

export default function PortfoliosPage() {
  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold text-brand-green">Business Portfolios</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.slug} title={item.title} description={item.description} href={`/portfolios/${item.slug}`} />
        ))}
      </div>
    </div>
  );
}
