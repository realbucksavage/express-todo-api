var express = require('express');
var router = express.Router();

const Store = require('../store');

const store = new Store();

router.get('/', (req, res, next) => {
    res.json(store.getAll());
});

router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    const todo = store.getByKey(id);

    if (!todo) {
        res.status(404);
        return next(id);
    }

    res.json(todo);
});

router.post('/', (req, res, next) => {
    const {title, completed} = req.body;
    let newTodo = store.saveObject({title, completed});

    res.status(201).json(newTodo);
});

router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    const todo = store.getByKey(id);

    if (!todo) {
        res.status(404);
        return next(id);
    }

    const {title, completed} = req.body;
    const newTodo = {...todo, title, completed};

    store.updateObject(id, newTodo);

    res.json(newTodo);
});

router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    if (!store.getByKey(id)) {
        res.status(404);
        return next(id);
    }

    store.deleteObject(id);

    res.status(204);
});

module.exports = router;
