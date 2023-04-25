module.exports = {
  content: [
    "../../packages/ui/components/**/*.{js, jsx, ts,tsx}",
    "./src/**/*.{js, jsx, ts,tsx}",
  ],
  colors: {
    "prime-dk": "",
    "prime-md": "",
    "prime-light": "",
    contrast: "",
    highlight: "",
    error: "",
    "place-grey": "",
    shadow: "",
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
