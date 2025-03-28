/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx}"],
  theme: {
    extend: {     
      fontFamily: {
        sans: ['"Space Grotesk"', "Roboto", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "custom-purple": "#8c48ff",
        "custom-orange": "#ff5f3d",
        "custom-blue": "#1664df",
        "custom-hover-purple": "#7a3ede",
        "custom-hover-orange": "#e65232",
        "primary-blue":"#6418BF",
        "primary-light-purple":"#EDE8FF",
        "dropdown-border":"#BABABA",
        "dropdown-filler-colour":"#E8DBF9",
        "primary-purple":"#E8DBF9",
        "dropdown-cross-icon":"#8244C0",
        "title-colour":"#371556",
        "card-gray": "#f5f5f5",
        "selected-card-border-colour":"#8244C0",
      },
      backgroundImage: {
        "card-gray": "#f5f5f5",
        "gradient-45": "linear-gradient(45deg, #8c48ff, #ff5f3d)",
        "gradient-hover": "linear-gradient(45deg, #7a3ede, #e65232)",
        "gradient-tooltip":
          "linear-gradient(90deg, rgba(121,29,91,1) 43%, rgba(20,32,140,1) 100%, rgba(28,19,178,1) 100%)",
        "custom-gradient":
          "linear-gradient(135deg, rgba(140, 72, 255, 0.2), rgba(22, 100, 223, 0.2))",
        "custom-gradient-light":
          "linear-gradient(145deg, rgba(140, 72, 255, 0.1), rgba(22, 100, 223, 0.1), rgba(255, 95, 61, 0.1))",
        "custom-gradient-ultra-light":
          "linear-gradient(135deg, rgba(140, 72, 255, 0.05), rgba(22, 100, 223, 0.05))",
          'custom-sidebar-gradient-ultra-light': 'linear-gradient(145deg, rgba(140, 72, 255, 0.07), rgba(22, 100, 223, 0.07), rgba(255, 95, 61, 0.07))',
          'spread-gradient': 'linear-gradient(to right, #8c48ff 20%, #b764ff 40%, #ff5f3d 80%)',
      },
    },
  },
  corePlugins: {
    preflight: false,  // Disables Tailwind's default base styles
  },
  plugins: [],
};
