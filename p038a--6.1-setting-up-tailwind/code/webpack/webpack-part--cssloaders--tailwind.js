const tailwindcss = require('tailwindcss')

tailwind = () => ({
  loader: "postcss-loader",
  options: {
    postcssOptions: { plugins: [tailwindcss] }
  }
});

module.exports = tailwind;
