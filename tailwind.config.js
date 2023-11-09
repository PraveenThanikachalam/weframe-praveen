/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'nudge-card-gradient':
          'linear-gradient(262deg, rgba(31, 188, 203, 0.08) 0%, rgba(28, 178, 175, 0.04) 100%), #020C0D',
      },
      fontFamily: {
        'title-font': ['var(--oceanwide-font)'],
      },
      colors: {
        'accent-blue': '#1FBCCB',
        'gray-300': '#999',
      },
      borderColor: {
        'button-border':
          'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.00) 0%, rgba(7, 17, 18, 0.17) 100%)',
      },
      boxShadow: {
        'button-glow': '0px 1px 8px 0px rgba(255, 255, 255, 0.48)',
      },
      keyframes: {
        'slide-horizontal': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slidehorizontal: 'slide-horizontal 30s linear infinite',
      },
    },
  },
  plugins: [],
};
