import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx,json}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        navy: 'rgb(var(--navy) / <alpha-value>)',
        gold: 'rgb(var(--gold) / <alpha-value>)',
        blue: {
          50: 'rgb(var(--blue-50) / <alpha-value>)',
          100: 'rgb(var(--blue-100) / <alpha-value>)',
        },
        pearl: 'rgb(var(--pearl) / <alpha-value>)',
      },
      boxShadow: {
        soft: '0 4px 24px 0 rgb(0 0 0 / 0.06)',
        glow: '0 8px 30px 0 rgb(var(--navy) / 0.15)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      transitionTimingFunction: {
        elegant: 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
