/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paper colors
        'paper-base': '#F0D7AB',
        'paper-light': '#FBE8C2',
        'paper-muted': '#CFB68B',
        'paper-shadow': '#AC9165',
        // Ink colors
        'ink-dark': '#251F18',
        'ink-brown': '#664F2C',
        'ink-soft': '#918171',
        // Burgundy colors
        burgundy: {
          DEFAULT: '#5B0F0F',
          deep: '#3E0808',
          soft: '#7A1B16',
        },
        // Gold colors
        gold: {
          antique: '#C9A35A',
          dark: '#8C6737',
          light: '#E3C98B',
        },
        // Moss green
        moss: {
          DEFAULT: '#1F3B2E',
          light: '#2F5140',
        },
        // Border colors
        'border-brown': '#51341D',
        'shadow-warm': 'rgba(72, 45, 20, 0.22)',
      },
      fontFamily: {
        display: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        body: ['Merriweather', 'Lora', 'serif'],
      },
      boxShadow: {
        'vintage': '0 4px 16px rgba(72, 45, 20, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'vintage-hover': '0 8px 24px rgba(72, 45, 20, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'vintage-inset': 'inset 0 2px 8px rgba(72, 45, 20, 0.18)',
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
