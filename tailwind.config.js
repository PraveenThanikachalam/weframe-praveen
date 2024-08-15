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
        'flare-horizontal': {
          '0%': { transform: 'translate(-50%, -25%) rotate(-45deg)' },
          '50%': { transform: 'translate(0%, -25%) rotate(-45deg)' },
          '100%': { transform: 'translate(50%, -25%) rotate(-45deg)' },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        fadeInDown: {
          '0%': {
            opacity: 0,
            // transform: 'translateY(-30px)',
          },
          '50%':{
            opacity:0.5
          },
          '100%': {
            opacity: 1,
            // transform: 'translateY(0)',
          },
        },
      },
      animation: {
        slidehorizontal: 'slide-horizontal 30s linear infinite',
        flare: 'flare-horizontal 3s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-down': 'fadeInDown 0.4s ease-out ',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.gradient-text': {
          background: 'linear-gradient(92deg, #5cd2dd 0.28%, #99ebf2 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
        '.border-gradient': {
          border: '2px solid',
          backgroundImage: 'linear-gradient(to right, #333, #ddd)',
          backgroundClip: 'padding-box',
          borderImageSlice: '1',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

//
