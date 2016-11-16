require('babel-register'); //eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev-db.sqlite3',
    },
    seeds: {
      directory: './src/database/seeds',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },
  production: {
    client: 'sqlite3',
    connection: {
      filename: './prod-db.sqlite3',
    },
    seeds: {
      directory: './src/database/seeds',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },
};
