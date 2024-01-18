const express = require("express");
const routes = express.Router();
const programmingLanguages = require("../services/programmingLanguages");

// GET Programming Languages
routes.get('/', async function(req, res, next) {
    try {
        res.json(await programmingLanguages.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting programming languages ${err.message}`);
        next(err);
    }
})

// POST programming language
routes.post('/', async function(req, res, next) {
    try {
        res.json(await programmingLanguages.create(req.body));
    } catch (err) {
        console.error(`Error while creating programming language`);
        next(err);
    }
})

// PUT programming language
routes.put('/:id', async function(req, res, next) {
    try {
        res.json(await programmingLanguages.update(req.params.id, req.body));
    } catch (err) {
        console.error('Error while updating programming language ', err.message);
        next(err);
    }
})

routes.delete('/:id', async function(req, res, next) {
    try {
        res.json(await programmingLanguages.remove(req.params.id));
    } catch (err) {
        console.error('Error while deleting programming language');
        next(err);
    }
})

module.exports = routes;
