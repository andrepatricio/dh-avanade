const express = require("express");
const app = express();
const alunos = require('./alunos/alunos.routes');
const cursos = require('./cursos/cursos.routes');
require('./turmas/turmas.model');
const Sequelize = require("sequelize");
const db = require('./db');

( 
    async ()=> {
        await db.sync();
    }
)()


const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/alunos', alunos);
app.use('/cursos', cursos);

app.use((req, res, next)=> {
    res.status(404).send("Não sei o que é isso que vc está procurando!!")
});

app.listen(PORT, ()=>{
    console.log(`Rodando na porta: ${PORT}`);
});
