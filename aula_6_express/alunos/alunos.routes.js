const router = require('express').Router();
const Alunos = require('./alunos.model');


router.get('/', async (req, res) => {
    const alunos = await Alunos.findAll();
    res.status(200).json(alunos);
})

router.post('/', async (req, res) => {
    await Alunos.create(req.body);
    res.status(201).json({ status: "ok"});
});

router.delete('/:matricula', (req, res) => {
    alunos = alunos.filter(aluno => aluno.matricula != req.params.matricula)
    res.status(200).send();
});

router.put('/:matricula', (req, res) => {
    const aluno = req.body;
    let i = alunos.findIndex(elem => elem.matricula == aluno.matricula)
    if(i < 0){
        res.status(400).send();
        return;
    }
    alunos[i] = aluno;
    res.status(200).json(aluno);    
});

module.exports = router