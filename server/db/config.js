const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  dialect: 'postgres',
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: Number(process.env.PG_POST),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};
