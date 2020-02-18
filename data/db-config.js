const knex = require('knex');

const config = {
    client: 'sqlite3',
    connection: {
        filename: './data/cars.db3'
    },
    useNullAsDefault: true
};

const db = knex(config);

module.exports = db;