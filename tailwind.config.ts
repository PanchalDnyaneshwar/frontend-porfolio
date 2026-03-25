import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Sora"', '"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#f7f4ee',
        surface: '#fcfaf6',
        card: '#fcfaf6',
        border: '#e5e7eb',
        muted: '#6b7280',
        primary: '#0f766e',
        secondary: '#1a4298',
        success: '#22C55E',
        danger: '#EF4444',
        warning: '#F59E0B',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0 18px 40px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(85, 117, 116, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(circle at top left, rgba(15,118,110,0.12), transparent 30%), radial-gradient(circle at top right, rgba(37,99,235,0.10), transparent 24%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [typography],
} satisfies Config;
