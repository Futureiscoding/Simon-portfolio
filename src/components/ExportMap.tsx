'use client';

import { motion } from 'framer-motion';
import { exportDestinations } from '@/data/siteData';

export function ExportMap() {
  return (
    <section className="rounded-xl bg-brand-green p-8 text-white">
      <h3 className="mb-4 text-2xl font-semibold">Global Export Destinations</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {exportDestinations.map((city, i) => (
          <motion.div
            key={city}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded bg-white/10 p-3"
          >
            {city}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
