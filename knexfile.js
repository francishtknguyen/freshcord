// const knex = require("./config/knex");
// module.exports = knex;

require("dotenv").config();

const pg = require("pg");

const { development, production, testing } = require("./config/index");

if (production.db) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}

const sharedConfig = {
  client: "pg",
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: development.db,
  },
  testing: {
    ...sharedConfig,
    connection: testing.db,
  },
  production: {
    ...sharedConfig,
    connection: production.db,
    pool: { min: 2, max: 10 },
  },
};

// const knexConfig = {
//   development: {
//     client: "pg",
//     migrations: { directory: "./data/migrations" },
//     connection: development.db,
//   },
//   testing: {
//     client: "pg",
//     migrations: { directory: "./data/migrations" },
//     connection: testing.db,
//   },
//   production: {
//     client: "pg",
//     migrations: { directory: "./data/migrations" },
//     connection: production.db,
//   },
// };

// module.exports = knex(knexConfig[environment]);
