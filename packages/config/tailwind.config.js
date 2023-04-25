module.exports = {
  content: ['../../packages/ui/**/*.{js, jsx, ts,tsx}', './src/**/*.{js, jsx, ts,tsx}'],
  theme: {
    colors: {
      first: '#002C41',
      second: '#A2B6B5',
      third: '#E6C0A3',
      fourth: '#E8B70F',
      contrast: '#F9F7F2',
      error: '#ff3333',
      greyout: '666666',
      shadow: '#E6C0A3',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
