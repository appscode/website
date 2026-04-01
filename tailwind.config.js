/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './content/**/*.html',
  ],
  // Disable preflight to avoid conflicts with existing custom CSS base styles
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: '#00a651',
      },
    },
  },
  plugins: [],
};
