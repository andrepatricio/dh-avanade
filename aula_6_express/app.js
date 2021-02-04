const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let alunos = [];

app.get('/alunos', (req, res) => {
    res.status(200).json(alunos);
});

const validateMatricula = (req, res, next) => {
    if(alunos.find(aluno => aluno.matricula == req.body.matricula)){
        res.status(400).json({"Erro": "Matricula já existe"});
        return;
    }
    next();
}

app.post('/alunos', (req, res) => {
    alunos.push(...req.body);
    res.status(201).json({ status: "ok"});
});

app.delete('/alunos/:matricula', (req, res) => {
    alunos = alunos.filter(aluno => aluno.matricula != req.params.matricula)
    res.status(200).send();
});

app.put('/alunos/:matricula', (req, res) => {
    const aluno = req.body;
    let i = alunos.findIndex(elem => elem.matricula == aluno.matricula)
    if(i < 0){
        res.status(400).send();
        return;
    }
    alunos[i] = aluno;
    res.status(200).json(aluno);    
});

app.use((req, res, next)=> {
    res.status(404).send("Não sei o que é isso que vc está procurando!!")
});

app.listen(PORT, ()=>{
    console.log(`Rodando na porta: ${PORT}`);
});
