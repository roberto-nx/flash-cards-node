const Sequelize = require('sequelize');

const dbName = process.env.DB_NAME; // passar os dados do .env para as constantes
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const sequelize = new Sequelize('dbName', 'dbUser', 'dbPassword', {dialect: 'mysql', host: 'dbHost'});

module.exports = sequelize;