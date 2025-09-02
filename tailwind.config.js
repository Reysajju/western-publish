/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          accent: '#38BDF8',
        },
        secondary: {
          DEFAULT: '#334155',
          light: '#475569',
          dark: '#0F172A',
        },
        accent: {
          blue: '#38BDF8',
          purple: '#8B5CF6',
          teal: '#2DD4BF',
        },
        neutral: {
          white: '#F8FAFC',
          light: '#E2E8F0',
          medium: '#94A3B8',
          dark: '#1E293B',
          darkest: '#0F172A',
        },
      },
      backgroundColor: {
        'dark': '#0F172A',
        'dark-light': '#1E293B',
      }
    },
  },
  plugins: [],
};
