module.exports = {
  development: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      database: 'corporateevent',
      user:     "postgres",
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },
  testing: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      database: 'corporateeventtest',
      user:     "postgres",
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

};


//production
// migrations directory: __dirname + '/data/migrations'