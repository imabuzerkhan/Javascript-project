/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./gallery.html",
    "./contact.html",
    "./resume.html",
  ],
  theme: {
    extend: {
      screens: {
    'xs': {'min':'340px' , "max":"566px"}
      },
    },
  },
  plugins: [],
}

