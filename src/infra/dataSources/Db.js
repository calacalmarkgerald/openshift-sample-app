
module.exports = {
  name: 'db',
  connector : 'sql',
  config: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    dialect: 'postgres',
    isSync: 'true',

  }
};
