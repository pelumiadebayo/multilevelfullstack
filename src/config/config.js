module.exports = {
  development: {
    username: process.env.DEVUN,
    password: process.env.DEVPW,
    database: process.env.DEVDB,
    host: process.env.DEVHOST,
    port: process.env.DEVPORT,
    dialect: 'mysql',
  },
  test: {
    username: process.env.TESTUN,
    password: process.env.TESTPW,
    database: process.env.TESTDB,
    host: process.env.TESTHOST,
    dialect: 'mysql',
  },
  production: {
    username: process.env.PRODUN,
    password: process.env.PRODPW,
    database: process.env.PRODDB,
    host: process.env.PRODHOST,
    dialect: 'mysql',
  },
  logging: false,
};
