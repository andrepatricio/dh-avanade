const Sequelize = require("sequelize");
const db = require('../db');

const Alunos = db.define('alunos', {
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
    matricula: {
        type: Sequelize.STRING(100),
        unique: true
    },
    email: {
        type: Sequelize.STRING(100),
        validate: {
            isEmail: true
        }
    }
});

module.exports = Alunos;