type Props = {
  title: string;
  summary: string;
  offerings: string[];
};

export function PortfolioPageTemplate({ title, summary, offerings }: Props) {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-brand-green">{title}</h1>
      <p className="max-w-3xl text-slate-700">{summary}</p>
      <div className="grid gap-4 md:grid-cols-2">
        {offerings.map((item) => (
          <div key={item} className="rounded-lg border border-brand-gold/30 p-4">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
