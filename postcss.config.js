module.exports = {
  plugins: ["tailwindcss", "postcss-preset-env"],
};

const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./src/**/*.tsx", "./src/**/*.ts"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "@tailwindcss/ui",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
