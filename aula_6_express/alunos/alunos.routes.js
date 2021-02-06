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

router.delete('/:matricula', async (req, res) => {
    let { matricula } = req.params;

    await Alunos.destroy({ where: {matricula: matricula} });

    res.status(200).send();
});

router.put('/:matricula', async (req, res) => {
    let { nome, email } = req.body;
    let { matricula } = req.params;
    let aluno = await Alunos.findOne({ where: { matricula:  matricula} });
    aluno.nome = nome || aluno.nome;
    aluno.email = email || aluno.email;

    aluno.save()
    res.status(200).json(aluno);    
});

router.patch('/:matricula/email', async (req, res)=> {
    let { matricula } = req.params;
    let { email } = req.body;
    let aluno = await Alunos.update({email: email}, { where: {matricula: matricula}});
    
    res.status(200).json(aluno);
});

module.exports = router