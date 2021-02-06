const { DataTypes } = require('sequelize');
const db = require('../db') ;
const Alunos = require('../alunos/alunos.model');
const Cursos = require('../cursos/cursos.model');

const Turmas = db.define('turmas', {
    alunosId: {
        type: DataTypes.INTEGER,
        references: {
            model: Alunos,
            key: 'id'
        }
    },
    cursoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Cursos,
            key: 'id'
        }
    },
    semestre: {
        type: DataTypes.INTEGER
    },
    ano: {
        type: DataTypes.CHAR(4)
    }
})

Alunos.belongsToMany(Cursos, { through: Turmas });
Cursos.belongsToMany(Alunos, { through: Turmas });

