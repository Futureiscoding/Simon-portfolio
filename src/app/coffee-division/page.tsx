'use client';

import { motion } from 'framer-motion';

const stages = ['Farm Sourcing', 'Cherry Processing', 'Roasting & QC', 'Export Logistics', 'Global Distribution'];

export default function CoffeeDivisionPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-xl bg-brand-sand p-8">
        <h1 className="text-4xl font-bold text-brand-green">Coffee Division</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          From premium Kenyan highland sourcing to export-ready roasting profiles, our coffee division anchors Imperion’s global brand.
        </p>
      </section>
      <section>
        <h2 className="mb-5 text-2xl font-semibold text-brand-green">Interactive Supply Chain</h2>
        <div className="grid gap-4 md:grid-cols-5">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-lg border border-brand-gold/40 bg-white p-4 text-center shadow-sm"
            >
              <div className="mb-2 text-xs font-bold text-brand-gold">0{idx + 1}</div>
              <div className="font-medium text-brand-green">{stage}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
