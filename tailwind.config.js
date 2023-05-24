/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#20232b",
          accent: "#2b2e3b",
          text:"#404951"
        },
        highlight: {
          primary: "#02cb90",
          accent: "#12dba0",
          text: "#abffe3"
        },
        text: {
          primary: "#ffffff"
        }
      }
    },
  },
  plugins: [],
}

