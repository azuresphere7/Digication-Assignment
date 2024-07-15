import ConfigInterface from './ConfigInterface';

const config: ConfigInterface = {
  env: 'development',
  database: {
    type: 'sqlite' as const,
    cache: false,
    database: `${__dirname}/../database.sqlite`,
    dropSchema: false,
    entities: ['src/entities/*.ts'],
    logger: 'advanced-console' as const,
    synchronize: true,
  },
  graphQLPath: '/graphql',
  resolvers: [`${__dirname}/../resolvers/**/*.ts`],
};

export default config;
