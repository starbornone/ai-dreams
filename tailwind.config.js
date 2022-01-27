const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        gray: colors.warmGray,
        indigo: colors.indigo,
        pink: colors.pink,
        sky: colors.sky,
        rose: colors.rose,
        violet: colors.violet,
      },
      fontFamily: {
        sans: [
          "Merriweather Sans",
          "Montserrat",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        body: [
          "Merriweather Sans",
          "Montserrat",
          ...defaultTheme.fontFamily.serif,
        ],
        heading: ["Merriweather", ...defaultTheme.fontFamily.serif],
        messages: ["Space Mono", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              borderBottom: "2px solid",
              borderColor: theme("colors.gray.200"),
              color: theme("colors.gray.600"),
              fontWeight: "600",
              textDecoration: "none",
              "&:hover": {
                borderColor: theme("colors.red.600"),
                color: theme("colors.red.700"),
              },
            },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
            blockquote: {
              borderLeft: "3px solid",
              borderColor: theme("colors.red.600"),
              color: theme("colors.gray.500"),
              fontFamily: "Merriweather",
              fontStyle: "italic",
              lineHeight: "2em",
              margin: "1.1em -2em",
              padding: "1em 2em",
              position: "relative",
            },
            "blockquote:before": {
              content: '"\\201C"',
              position: "absolute",
              left: "-0.1em",
              top: "0.15em",
              color: theme("colors.gray.200"),
              fontFamily: "Space Mono",
              fontStyle: "normal",
              lineHeight: "1em",
              textAlign: "center",
              width: "1em",
              fontSize: "6em",
              zIndex: "-10",
            },
            "blockquote:after": {
              content: '"\\201D"',
              position: "absolute",
              bottom: "-0.25em",
              right: "0.1em",
              color: theme("colors.gray.200"),
              fontFamily: "Space Mono",
              fontStyle: "normal",
              lineHeight: "1em",
              textAlign: "center",
              width: "1em",
              fontSize: "6em",
              zIndex: "-10",
            },
            "blockquote p": {
              zIndex: "10",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
