import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#0E3B2E',
          emerald: '#1D6F56',
          gold: '#D4AF37',
          sand: '#F6F0DB'
        }
      },
      boxShadow: {
        glow: '0 10px 30px rgba(212, 175, 55, 0.2)'
      }
    }
  },
  plugins: []
};

export default config;
