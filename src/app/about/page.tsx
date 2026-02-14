import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-4xl font-bold text-brand-green">About Us</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Our mission is to scale African agribusiness through transparent trade systems, value-addition manufacturing, and efficient global logistics.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-brand-sand p-5"><strong>Mission:</strong> Advance inclusive trade and quality exports.</div>
          <div className="rounded-xl bg-brand-sand p-5"><strong>Vision:</strong> Become a leading multi-sector African export powerhouse.</div>
          <div className="rounded-xl bg-brand-sand p-5"><strong>Values:</strong> Integrity, Sustainability, Innovation, Partnership.</div>
        </div>
      </section>

      <section className="grid gap-6 rounded-xl border border-brand-gold/30 p-6 md:grid-cols-[220px_1fr]">
        <Image src="/portrait.jpg" alt="Founder and Managing Director" width={220} height={260} className="rounded-lg object-cover" />
        <div>
          <h2 className="text-2xl font-semibold text-brand-green">Founder & Managing Director</h2>
          <p className="mt-3 text-slate-700">
            A visionary trade strategist with over a decade in commodity exports, agro-processing investments, and cross-border operations. Leadership style centers on data-informed execution, ethical sourcing, and long-term stakeholder value.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-brand-green">Certifications & Compliance</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['ISO 22000', 'HACCP', 'GlobalG.A.P.', 'Rainforest Alliance Ready'].map((badge) => (
            <div key={badge} className="rounded-lg border border-brand-gold/40 p-4 text-center font-medium">
              {badge}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
