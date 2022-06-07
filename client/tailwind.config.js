module.exports = {
  content: ['./ src/**/ * /.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'gray': '#696D7D',
      'green': '#6F9283',
      'artichoke': '#8D9F87',
      'sage': '#CDC6A5',
      'beige': '#F0DCCA',
    },
    extend: {},
    fontFamily: {
      'display': ['Monoton', 'cursive'],
      'header': ['Comfortaa', 'cursive'],
      'body': ['Roboto Flex', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}