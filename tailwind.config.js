/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'selector',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./lib/**/*.{vue,js,ts,jsx,tsx}",
        "./dist/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                DEFAULT: '1rem',
            },
            fontFamily: {
                sans: ['TeleNeo Thin', 'sans-serif'],
                serif: ['TeleNeo Thin', 'serif'],
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                black: "#111111",
                white: "#fbfbfb",
                primary: {
                    DEFAULT: "#E20074",
                    shade: "#c00063",
                    light: "#9e0051",
                },
                accent: {
                    DEFAULT: "#fbfbfb",
                    shade: "#fbfbfb",
                    light: "#fbfbfb",
                },
                secondary: {
                    DEFAULT: "#868686",
                    1: "#868686",
                    2: "#8c00ff",
                },
                surface: {
                    DEFAULT: "#ffffff",
                    dark: "#000000"
                },
                content: {
                    DEFAULT: "#000000",
                    dark: "#ffffff",
                    meta: "hsla(0, 0%, 0%, 0.65)"
                }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}