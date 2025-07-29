import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes:
      {
        navbarAppear:
        {
          '0%':
          {
            opacity: '0%',
            transform: 'translateY(-100%)'
          },
          '100%':
          {
            opacity: '0%',
            transform: 'translateY(0%)'
          }
        }
      },
      animation:
      {
        navbarAppear: 'navbarAppear 2s ease-out forwards'
      }
    },
  },
  plugins: [],
};

export default config;