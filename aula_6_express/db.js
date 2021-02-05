const Sequelize = require("sequelize");
const conn = new Sequelize("mysql://dh_avanade:dh_avanade@localhost:3306/dh_avanade");

module.exports = conn;