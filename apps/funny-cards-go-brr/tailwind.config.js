const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  daisyui: {
    themes: ["customTheme"],
  },
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}",
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        offWhite: "#ddd",
      },
    },
  },
  // plugins: [require("daisyui")],
};
