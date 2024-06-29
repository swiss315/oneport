/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#00861E',
        'custom-grey': '#969696',
        'custom-light-blue': '#D0F5FF'
      },
      borderColor: {
        'custom-grey': '#0000001A',
        'custom-green': '#139C33'
      },
      backgroundColor: {
        'custom-green': '#98FF9B40',
        'custom-blue': '#1F2937',
        'custom-deepblue': '#374151',
        'custom-light-blue': '#D0F5FF',
        'custom-button-green': '#007003',
        'custom-white': '#FAFAFA',
        'custom-grey': '#E5E7EB',
        'custom-dark-green': '#004300',
        },
      height: {
        '85vh': '85vh'
      }
    },
  },
  plugins: [],
}

