const { Router } = require('express');
const todoRender = require('../models/todo-render');
const router = Router();

router.get('/', async (req, res) => {
    const todos = await todoRender.find({});

    res.render('index', {
        title: 'ToDo List',
        isIndex: true,
        todos
    })
});

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Создать ToDo',
        isCreate: true
    })
});

module.exports = router;
