module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        text: {
          100: "#e2e2e2",
          200: "#c9c9c9",
          300: "#afafaf",
          400: "#969696",
          500: "#7c7c7c",
          600: "#626262",
          700: "#494949",
          800: "#2f2f2f",
          900: "#161616",
        },
        gray: {
          100: "#f7f7f8",
          200: "#d3d4d4",
          300: "#a8a9a9",
          400: "#585d5f",
          500: "#252728",
          600: "#212324",
          700: "#1a1b1c",
          800: "#131414",
          900: "#0b0c0c",
        },
        aqua: {
          50: "#e5ffff",
          100: "#ccffff",
          200: "#99ffff",
          300: "#66ffff",
          400: "#33ffff",
          500: "#00ffff",
          600: "#00cccc",
          700: "#009999",
          800: "#006666",
          900: "#003333",
        },
        yellow: {
          100: "#fffde6",
          200: "#fff9bd",
          300: "#fff79f",
          400: "#fef26c",
          500: "#feed34",
          600: "#e9d601",
          700: "#c6b501",
          800: "#9d9001",
          900: "#605800",
        },
        orange: {
          100: "#fffbf5",
          200: "#feecd2",
          300: "#fedba9",
          400: "#feca81",
          500: "#fdb44e",
          600: "#fc9608",
          700: "#de8202",
          800: "#b66b02",
          900: "#834d01",
        },
        pink: {
          100: "#fffafc",
          200: "#fedce7",
          300: "#feb9d0",
          400: "#fd8cb2",
          500: "#fb3c7c",
          600: "#fa0557",
          700: "#eb0551",
          800: "#d20449",
          900: "#b4043e",
        },
        purple: {
          100: "#faf2fd",
          200: "#d99df1",
          300: "#ba4ce6",
          400: "#8b1ab7",
          500: "#4a0e62",
          600: "#400c55",
          700: "#360a47",
          800: "#2c083a",
          900: "#22062d",
        },
        green: {
          100: "#f2fdf7",
          200: "#baf3d4",
          300: "#86e9b4",
          400: "#4edf92",
          500: "#24c770",
          600: "#1da05a",
          700: "#167944",
          800: "#0f522e",
          900: "#082b18",
        },
      },
      fontFamily: {
        sans: ["Lexend"],
      },
    },
  },
  plugins: [],
};
