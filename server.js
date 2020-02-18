const express = require('express');

const carsRouter = require('./routers/cars-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Hello!</h1>')
});

server.use('/cars', carsRouter);

module.exports = server;