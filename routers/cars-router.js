const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

router.post('/', (req, res) => {
    db('cars')
        .insert(req.body)
        .then(cars => {
            res.status(201).json(cars)
        })
        .catch(error => {
            console.log(error);
        })
})

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            console.log(error);
        })
})

module.exports = router;