//import sequelize 
var Sequelize = require('sequelize');

//import connection db
var sequelize = require('../database');
var Products = sequelize.define('Products',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      address: Sequelize.STRING,
      phone: Sequelize.BIGINT
    });
    
    module.exports = Products;