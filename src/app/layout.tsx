import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnalyticsScripts } from '@/components/Analytics';

export const metadata: Metadata = {
  title: 'Imperion Global Holdings Limited',
  description:
    'Imperion Global Holdings Limited is an African agribusiness and global logistics solutions company specializing in Kenya coffee exports and value-added commodities.',
  keywords: ['Kenya coffee exports', 'African agribusiness', 'global logistics solutions']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsScripts />
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
