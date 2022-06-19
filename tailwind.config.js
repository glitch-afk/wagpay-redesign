/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primaryDark: '#101010',
        secondaryDark: '#191919',
        wagpayPurple: '#615CCD',
        primaryLight: '#F5F5F7',
        secondaryLight: '#E8E8E8',
        tertiaryLight: '#A3A3A3',
        primaryGray: '#D8D8D8',
        secondaryGray: '#4B4B4B',
        tertiaryGray: '#1F1F1F',
        quaternaryGray: '#3A3A3A',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
  ],
};
