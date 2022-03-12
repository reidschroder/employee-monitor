const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username
        user: 'root',
        //============ADD PASSWORD FOR CONNECTION TO MONITOR DATABASE=============================
        password: 'MyNewPass',
        database: 'monitor'
    },
    console.log('Connected to the monitor database.')
);

module.exports = db;