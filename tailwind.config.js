module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        gtmaru: ['GT Maru'],
        newkansas: ['New Kansas']
      },
      colors: {
        socialorange: '#F8A55D',
        socialpink: '#F1819E'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ]
}
