const express = require('express');

const HttpStatus = require('http-status-codes');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();

const app = express();
const v1 = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1', v1);

v1.put('/people/:id', async (req, res) => {
    const id = req.params.id;
    const people = req.body;
    try {
        const result = await peopleService.updatePeople(id, people);
        if (!result) res.sendStatus(HttpStatus.NOT_FOUND);
        else res.sendStatus(HttpStatus.OK);
    } catch (error) {
        console.log(error);
    }
})

v1.get('/people', async (req, res) => {
    const filters = req.query;
    try {
        const peoples = await peopleService.getPeople(filters);
        res.send(peoples);
    } catch (error) {
        res.sendStatus(HttpStatus.NOT_FOUND);
    }
})

module.exports = app;
