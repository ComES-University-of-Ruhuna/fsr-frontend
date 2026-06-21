/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          400: '#C8252E',
          500: '#A30B0B',
          600: '#8B0000',
          700: '#6B0000',
          900: '#3A0303',
        },
        gold: {
          300: '#F1D680',
          400: '#E6C158',
          500: '#C9A227',
          600: '#A88416',
          700: '#7E6310',
        },
        charcoal: {
          700: '#1E1E22',
          800: '#17171A',
          900: '#0F0F11',
          950: '#08080A',
        },
      },
      fontFamily: {
        display: ['"Anton"', 'Impact', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 50px -10px rgba(201, 162, 39, 0.45)',
        ember: '0 0 60px -15px rgba(163, 11, 11, 0.6)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(15,15,17,0) 0%, #0F0F11 90%), repeating-linear-gradient(0deg, rgba(201,162,39,0.06) 0 1px, transparent 1px 60px), repeating-linear-gradient(90deg, rgba(201,162,39,0.06) 0 1px, transparent 1px 60px)',
        'ember-radial':
          'radial-gradient(circle at 20% 20%, rgba(163,11,11,0.35), transparent 55%), radial-gradient(circle at 80% 70%, rgba(201,162,39,0.18), transparent 55%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
