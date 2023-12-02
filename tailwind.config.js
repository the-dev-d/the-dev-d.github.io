/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                menu: "30% 70%",
                fill: "repeat(auto-fill, minmax(2rem, 1fr))",
                fit: "repeat(auto-fit, minmax(2rem, 1fr))"
            },
            gridTemplateRows: {
                menu: "min-content 1fr"
            },
            backgroundImage: {
                emrald: "url('/glow.webp')"
            },
            fontFamily: {
                archivo: "'Archivo Black', sans-serif"
            },
            colors: {
                background: {
                    primary: "#20232b",
                    accent: "#2b2e3b",
                    text: "#889198"
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
        }
    },
    plugins: []
};
