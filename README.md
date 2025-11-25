## Landing Page

neh pues le puse infinity pero le podemos cambiar nombre vdd

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev


yarn lint
# Runs ESlint validations for code formatting validation (identation, quotes usage).

yarn lint:fix
# Autofixes the identation/quoting errors from lint based on prettier rules AND runs ESlint validations.

yarn lint:fix
# Autoformats all files based on prettier rules.


```

Current rules

| Rule                   | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| `singleQuote: true`    | Replaces all import `"` for `'`.                           |
| `semi: true`           | Usage of semicolons `{}`.                                  |
| `trailingComma: 'es5'` | Adds `,` at the end of the last property within an object. |
| `printWidth: 80`       | Max line length.                                           |

==Note==
For manually formatting, please install
[ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Added workflow
