const testimonials = [
  {
    quote: 'Imperion consistently delivers premium-grade coffee with transparent sourcing standards.',
    author: 'Procurement Lead, EU Roastery Group'
  },
  {
    quote: 'Their logistics coordination helped us reduce cold-chain losses by over 20%.',
    author: 'Operations Director, Gulf Fresh Imports'
  }
];

export function Testimonials() {
  return (
    <section className="space-y-5">
      <h2 className="text-3xl font-semibold text-brand-green">What Partners Say</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote key={item.author} className="rounded-xl border border-brand-gold/40 bg-brand-sand p-5">
            <p className="italic text-slate-700">“{item.quote}”</p>
            <footer className="mt-3 font-medium text-brand-green">— {item.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
