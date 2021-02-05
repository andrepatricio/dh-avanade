const Sequelize = require("sequelize");
const db = require('../db');

const Cursos = db.define('cursos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    codigo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Cursos;