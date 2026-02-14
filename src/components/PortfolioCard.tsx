'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  href: string;
};

export function PortfolioCard({ title, description, href }: Props) {
  return (
    <motion.div whileHover={{ y: -8 }} className="rounded-xl border border-brand-gold/40 bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-xl font-semibold text-brand-green">{title}</h3>
      <p className="mb-4 text-slate-600">{description}</p>
      <Link href={href} className="text-brand-emerald underline">
        Explore portfolio
      </Link>
    </motion.div>
  );
}
