const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1905',
    database: 'movies-controll'
})

module.exports = Connection;
