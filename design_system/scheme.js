/** @type {import('tailwindcss').Config} */
import palette from "./palette.js"

const colors = {
    transparent: 'transparent',
    current: 'currentColor',
    black: "#111111",
    white: "#fbfbfb",
    primary: {
        DEFAULT: palette.magenta,
        dark: palette.magenta[800],
        darker: palette.magenta[900],
        light: palette.magenta[600],
        lighter: palette.magenta[500],
    },
    accent: {
        DEFAULT: palette.white,
    },
    secondary: {
        DEFAULT: palette.magenta,
        dark: palette.magenta[800],
        darker: palette.magenta[900],
        light: palette.magenta[600],
        lighter: palette.magenta[500],
    }
}

const light = {
    surface: {
        DEFAULT: palette.grey['100'],
    },
    content: {
        DEFAULT: palette.magenta
    }
}

const dark = {
    surface: {
        DEFAULT: palette.grey['900'],
    }
}

module.exports = {
    colors, light, dark
};