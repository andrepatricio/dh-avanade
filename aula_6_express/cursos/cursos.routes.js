const router = require('express').Router();
const Cursos = require('./cursos.model');

router.get('/', async (req, res) => {
    const cursos = await Cursos.findAll();
    res.status(200).json(cursos);
});

router.post('/', async (req, res) => {
    await Cursos.create(req.body)
    res.status(201).send("OK");
});

router.delete('/:codigo', async (req, res) => {
    let { codigo } = req.params;
    Cursos.destroy({ where: { codigo: codigo} });
    res.status(200).send("OK");
});

router.put('/:id', async (req, res) => {
    let { nome, codigo } = req.body;
    let curso = await Cursos.findByPk(req.params.id);
    curso.nome = nome || curso.nome;
    curso.codigo = codigo || curso.codigo;

    await curso.save();
});

module.exports = router;