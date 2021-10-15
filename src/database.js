const  Sequelize = require('sequelize');

const database = new Sequelize(
    'javacrudct', //  database
    'root', // user 
    '', // password 
  {
    host: 'localhost',
    dialect: 'mysql' // mariadb / sqlite / postgres
  }
)

database.sync();


module.exports = database;