module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js", // <-- add this line
  ],
  theme: {
    extend: {
      colors: {
        airbnb: "#ff385c",
        "airbnb-dark": "#d50027",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // <-- add this line
  ],
};
