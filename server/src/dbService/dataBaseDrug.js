const mysql = require('mysql2');
require('dotenv').config();
 const connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

module.exports = connection;

