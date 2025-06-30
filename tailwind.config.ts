import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        textBase: 'var(--color-text-base)',
        accentYellow: 'var(--color-accent-yellow)',
        accentYellowHover: 'var(--color-accent-yellow-hover)',
        background: 'var(--background)',
        divider: 'var(--color-divider)',
     // accent: '#38bdf8',
       accent: '#00B894',     // Green-ish accent
      dark: '#111827',       // Almost black
      light: '#F9FAFB',  
      darkMode: "class",
      },
      borderRadius: {
        btn: 'var(--radius-button)',
      },
      fontSize: {
        h1: 'var(--text-h1-size)',
        h2: 'var(--text-h2-size)',
        h3: 'var(--text-h3-size)',
        body: 'var(--text-body-size)',
      },
    },
  },
  plugins: [],
};

export default config;
