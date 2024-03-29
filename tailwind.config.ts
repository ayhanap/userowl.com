import headlessuiPlugin from '@headlessui/tailwindcss';
import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import typographyStyles from './typography';

const neutralExt = {
  900: 'lch(7.5% 26 304 / <alpha-value>)',
  800: 'lch(16% 23.9 304 / <alpha-value>)',
  700: 'lch(22% 22 304 / <alpha-value>)',
  600: 'lch(27% 20.1 304 / <alpha-value>)',
  500: 'lch(35.5% 18.4 304 / <alpha-value>)',
  400: 'lch(39.2% 16.8 304 / <alpha-value>)',
  300: 'lch(43.5% 15.2 304 / <alpha-value>)',
  200: 'lch(47.5% 13.1 304 / <alpha-value>)',
  100: 'lch(55.5% 12.3 304 / <alpha-value>)',
  90: 'lch(60.5% 10.3 304 / <alpha-value>)',
  80: 'lch(67% 9 304 / <alpha-value>)',
  70: 'lch(70.4% 7.8 304 / <alpha-value>)',
  60: 'lch(75.2% 6.5 304 / <alpha-value>)',
  50: 'lch(80% 5.3 304 / <alpha-value>)',
  40: 'lch(85% 2.7 304 / <alpha-value>)',
  30: 'lch(91.5% 2.1 304 / <alpha-value>)',
  20: 'lch(95.8% 1.1 304 / <alpha-value>)',
  10: 'lch(97.9% 0.6 304 / <alpha-value>)',
  0: 'lch(100% 0 304 / <alpha-value>)',
};

const neutralChroma = {
  900: 'lch(7.5% 44.5 304 / <alpha-value>)',
  800: 'lch(16% 39.9 304 / <alpha-value>)',
  700: 'lch(22% 35.3 304 / <alpha-value>)',
  600: 'lch(27% 31.3 304 / <alpha-value>)',
  500: 'lch(35.5% 28 304 / <alpha-value>)',
  400: 'lch(39.2% 23.4 304 / <alpha-value>)',
  300: 'lch(43.5% 18.8 304 / <alpha-value>)',
  200: 'lch(47.5% 17.5 304 / <alpha-value>)',
  100: 'lch(55.5% 13.5 304 / <alpha-value>)',
  90: 'lch(60.5% 10.3 304 / <alpha-value>)',
  80: 'lch(67% 9 304 / <alpha-value>)',
  70: 'lch(70.4% 7.8 304 / <alpha-value>)',
  60: 'lch(75.2% 6.5 304 / <alpha-value>)',
  50: 'lch(80% 5.3 304 / <alpha-value>)',
  40: 'lch(85% 2.7 304 / <alpha-value>)',
  30: 'lch(91.5% 2.1 304 / <alpha-value>)',
  20: 'lch(95.8% 1.1 304 / <alpha-value>)',
  10: 'lch(97.9% 0.6 304 / <alpha-value>)',
  0: 'lch(100% 0 304 / <alpha-value>)',
};

const purpleExt = {
  900: 'lch(19.6% 51.8 304 / <alpha-value>)',
  800: 'lch(22.6% 61 304 / <alpha-value>)',
  700: 'lch(25.7% 70.9 304 / <alpha-value>)',
  600: 'lch(27.3% 78.2 304 / <alpha-value>)',
  500: 'lch(33.3% 88.1 304 / <alpha-value>)',
  400: 'lch(39% 100 304 / <alpha-value>)',
  300: 'lch(49% 95.9 304 / <alpha-value>)',
  200: 'lch(54.9% 82.8 304 / <alpha-value>)',
  100: 'lch(61.1% 72.9 304 / <alpha-value>)',
  90: 'lch(68.9% 47.2 304 / <alpha-value>)',
  80: 'lch(74.2% 38.5 304 / <alpha-value>)',
  70: 'lch(84.4% 28 304 / <alpha-value>)',
  60: 'lch(86.9% 24.1 304 / <alpha-value>)',
  50: 'lch(91.7% 14.9 304 / <alpha-value>)',
  40: 'lch(92.9% 13.5 304 / <alpha-value>)',
  30: 'lch(94.9% 10.2 304 / <alpha-value>)',
  20: 'lch(96.2% 6.9 304 / <alpha-value>)',
  10: 'lch(97.9% 5.1 304 / <alpha-value>)',
  0: 'lch(100% 0 304 / <alpha-value>)',
};

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        purple: {
          50: purpleExt[30],
          100: purpleExt[50],
          200: purpleExt[70],
          300: purpleExt[80],
          400: purpleExt[100],
          500: purpleExt[300],
          600: purpleExt[400],
          700: purpleExt[500],
          800: purpleExt[600],
          900: purpleExt[700],
        },
        neutral_chroma: {
          50: neutralChroma[50],
          100: neutralChroma[100],
          200: neutralChroma[200],
          300: neutralChroma[300],
          400: neutralChroma[400],
          500: neutralChroma[500],
          600: neutralChroma[600],
          700: neutralChroma[700],
          800: neutralChroma[800],
          900: neutralChroma[900],
        },
        purple_ext: purpleExt,
        neutral_ext: neutralExt,
        gray: {
          50: neutralExt[10],
          100: neutralExt[20],
          200: neutralExt[30],
          300: neutralExt[40],
          400: neutralExt[80],
          500: neutralExt[200],
          600: neutralExt[500],
          700: neutralExt[600],
          800: neutralExt[800],
          900: neutralExt[900],
        },
        slate: {
          50: neutralExt[10],
          100: neutralExt[20],
          200: neutralExt[30],
          300: neutralExt[40],
          400: neutralExt[80],
          500: neutralExt[200],
          600: neutralExt[500],
          700: neutralExt[600],
          800: neutralExt[800],
          900: neutralExt[900],
        },
        indigo: {
          50: purpleExt[30],
          100: purpleExt[50],
          200: purpleExt[70],
          300: purpleExt[80],
          400: purpleExt[100],
          500: purpleExt[300],
          600: purpleExt[400],
          700: purpleExt[500],
          800: purpleExt[600],
          900: purpleExt[700],
        },
        blue: {
          50: purpleExt[30],
          100: purpleExt[50],
          200: purpleExt[70],
          300: purpleExt[80],
          400: purpleExt[100],
          500: purpleExt[300],
          600: purpleExt[400],
          700: purpleExt[500],
          800: purpleExt[600],
          900: purpleExt[700],
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: [['var(--font-inter)'], { fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"' }],
        mono: [...defaultTheme.fontFamily.mono],
        // display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      },
      typography: typographyStyles,
    },
  },
  plugins: [formsPlugin, headlessuiPlugin, typographyPlugin],
} satisfies Config;
