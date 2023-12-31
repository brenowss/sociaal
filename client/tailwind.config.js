/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const flattenColorPalette =
  require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        moon: '3px -3px 0 0px #D9FBFF inset, rgba(255, 255, 255, 0.1) 5px -7px 0 -5px, rgba(255, 255, 255, 0.1) 10px 7px 0 -5.3px, rgba(255, 255, 255, 0.1) 17px -3px 0 -5.3px, rgba(255, 255, 255, 0.1) 14px 2px 0 -4.1px, rgba(255, 255, 255, 0.1) 16px 6px 0 -5.3px, rgba(255, 255, 255, 0.1) 22px -3px 0 -5.3px, rgba(255, 255, 255, 0.1) -8px -1px 0 -5px, rgba(255, 255, 255, 0.1) 26px -10px 0 -4.5px',
        sun: '1px 1px 0 2px #FBBF24 inset, 0 -10px 0 -5px #FBBF24, 7px -7px 0 -5px #FBBF24, 10px 0 0 -5px #FBBF24, 7px 7px 0 -5px #FBBF24, 0 10px 0 -5px #FBBF24, -7px 7px 0 -5px #FBBF24, -10px 0 0 -5px #FBBF24, -7px -7px 0 -5px #FBBF24',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease',
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
