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
        'fira-code': ['var(--fira-code-font)'],
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
    },
  },
  plugins: [],
};
