import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql', // URL вашого сервера GraphQL
  documents: ['src/**/*.graphql'], // Файли з GraphQL-запитами
  generates: {
    'src/app/graphql/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
    },
  },
};

export default config;
