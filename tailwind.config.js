/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigations/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {

    fontFamily: {
      'm_light': "Rubik_300Light",
      'base': "Rubik_400Regular",
      'm_medium': "Rubik_500Medium",
      'm_semibold': "Rubik_600SemiBold",
      'm_bold': "Rubik_700Bold",
      'm_extrabold': "Rubik_800ExtraBold",
      'm_black': "Rubik_900Black"
    },

    extend: {},
  },
  plugins: [],
}
