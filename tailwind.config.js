// tailwind.config.js
module.exports = {
  content: ['{pages,app}/**/*.{js,ts,jsx,tsx}'],
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
  plugins: []
}
