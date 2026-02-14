# Imperion Global Holdings Limited Website

A professional corporate website built with **Next.js + React + TailwindCSS + TypeScript**.

## Features
- SEO-optimized pages targeting:
  - Kenya coffee exports
  - African agribusiness
  - global logistics solutions
- Interactive business portfolio cards and dropdown navigation
- Dedicated Coffee Division with supply chain infographic
- News & Insights with search + category filters
- Contact form API endpoint for CRM webhook integration
- WhatsApp Business quick-connect button
- Downloadable investor deck PDF
- Google Analytics + Google Ads tracking stubs

## Run locally
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm run start
```

## Deployment
- **Vercel:** import this repository and deploy directly.
- **Netlify:** use Next.js runtime and build command `npm run build`.

Set the following environment variables in production:
- `CRM_WEBHOOK_URL` (optional for contact form integration)
