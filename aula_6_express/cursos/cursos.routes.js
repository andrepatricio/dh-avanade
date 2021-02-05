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

module.exports = router;