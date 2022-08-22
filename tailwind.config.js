/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'xss':'320px',
      'xsm': '413px',
      'xsl': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/img/header-cover.jpg')",
      }
    },
  },
  plugins: [

  ],
}
