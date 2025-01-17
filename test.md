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

# PrimengTest

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
