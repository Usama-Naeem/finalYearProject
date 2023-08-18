const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial-gradient":
          "radial-gradient(circle farthest-corner at 0.2% 0.5%, rgba(68, 36, 164, 1) 3.7%, rgba(84, 212, 228, 1) 92.7%)",
      },
    },
  },
  plugins: [],
});
