// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust the paths to where your files are located
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px', // Add a custom breakpoint for 375px
      },
    },
  },
  plugins: [],
}
