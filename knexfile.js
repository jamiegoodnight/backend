const localPg = {
  host: "localhost",
  database: "corpdata",
  user: "dev",
  password: "pass"
};

const productionDBConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  production: {
    client: "pg",
    connection: productionDBConnection,
    migrations: {
      directory: __dirname + "/data/migrations"
    },
    seeds: {
      directory: __dirname + "/data/seeds"
    }
  },
  development: {
    client: "postgres",
    connection: {
      host: "localhost",
      database: "corporateevent",
      user: "postgres",
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  testing: {
    client: "postgres",
    connection: {
      host: "localhost",
      database: "corporateeventtest",
      user: "postgres",
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
