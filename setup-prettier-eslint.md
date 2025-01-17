# Install eslint

the link [Source Article](https://senoritadeveloper.medium.com/setting-up-eslint-and-prettier-in-angular-with-vs-code-and-webstorm-4be8d558caea)

```bash
ng add @angular-eslint/schematics
```

# Install Prettier

```bash
npm install prettier --save-dev
```

create files `.prettierignore` and `.prettierrc`

Linters usually contain not only code quality rules, but also stylistic rules which may conflict with Prettier. To turn off rules that conflict or are unnecessary with Prettier, you can install:

```bash
npm install eslint-config-prettier --save-dev
```

To run Prettier as an ESLint rule and report differences as individual ESLint issues, you should install the following dependency:

```bash
npm install eslint-plugin-prettier --save-dev
```

For flat configuration (our current eslint.config.js file), this plugin ships with an “eslint-plugin-prettier/recommended” config that sets up both “eslint-plugin-prettier” and “eslint-config-prettier” in one go.

Import “eslint-plugin-prettier/recommended” and add “eslintPluginPrettierRecommended” as the last item in the configuration array in your “eslint.config.js” file so that “eslint-config-prettier” has the opportunity to override other configs:

THEN SETUP YOUR IDE FOR AUTO LINTING [Source Article](https://senoritadeveloper.medium.com/setting-up-eslint-and-prettier-in-angular-with-vs-code-and-webstorm-4be8d558caea) SETUP AT THE VERY END

```bash
npm run format
```

and then

```bash
npm run lint
```

```bash
npm run lintfix
```

# Add compodoc

```bash
npm install @compodoc/compodoc --save-dev
```

add script in package.json

`
scripts:{
...,
"e2e": "ng e2e",
"compodoc": "npx compodoc -p tsconfig.compodoc.json -s"
}`

add file
`tsconfig.doc.json`

fill it
`
{"include": ["src/**/*.ts"],
"exclude": ["src/**/*.spec.ts" , "src/test.ts"]}
`

run compodoc

```bash
npm run compodoc
```

add `/documentation` in `.gitignore` file

# GraphQl code generator

```bash
npm install @apollo/client graphql apollo-angular
```

```bash

```

```bash

```

```bash

```

```bash

```

```bash
npm i @angular/cli
```

```bash
ng new done-admin-app --routing --style scss
```
