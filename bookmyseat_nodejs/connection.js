const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'Saikumar@2415',
    database: 'BookMySeat'
})

module.exports = client