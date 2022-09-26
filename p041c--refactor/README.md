# Refactor

- Clean up: consolidate related configurations of  to one file. `webpack-plugin-serve` into file `webpack-part--dev-server.js`.

- Clean up: move tailwindcss configuration into webpack folder.

- Relocate to group related:
  - `webpack-part--cssloader--postcss.js --> webpack-part--cssloader--postcss/index.js`
  - `tailwind.config.js --> webpack-part--cssloader--postcss/tailwind.config.js`

- Don't remove unused css during development.

- rename: webpack-part--dev-server.js --> webpack-part--dev-server--webpack-plugin-serve.js

- npm scripts rename:
  - dev:w --> dev:wp
  - build:w --> build:wp
