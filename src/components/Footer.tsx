export function Footer() {
  return (
    <footer className="mt-16 bg-brand-green px-6 py-10 text-sm text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Imperion Global Holdings Limited. All rights reserved.</p>
        <a href="/investor-deck.pdf" className="rounded border border-brand-gold px-4 py-2 text-brand-gold" download>
          Download Investor Deck
        </a>
      </div>
    </footer>
  );
}
