import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: {
          coral: '#fb7185',
          blush: '#ffe4e6',
          rose: '#f43f5e',
          orange: '#f97316',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
        darkBg: {
          primary: '#0b1318',
          secondary: '#131f24',
          card: '#1a2930',
          border: '#2a3c46',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(20, 184, 166, 0.1)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(20, 184, 166, 0.35)',
      }
    },
  },
  plugins: [],
} satisfies Config
