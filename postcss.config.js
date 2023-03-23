// module.exports = {
//   plugins: ["tailwindcss", "postcss-nesting", "autoprefixer"],
// };

// just for testing!
// module.exports = {
//   plugins: [require("tailwindcss"), require("autoprefixer")],
// };

module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
