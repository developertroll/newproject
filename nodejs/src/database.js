const mysql = require('mysql2/promise');

exports.pool = mysql.createPool({
    host: 'www.successschedule.shop',
    user: 'dbuser',
    port: '3306',
    password: 'dbuser',
    database: 'myToDoDB',
});