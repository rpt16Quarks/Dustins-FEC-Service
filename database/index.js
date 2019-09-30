var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3002,
  user: 'root',
  password: '',
  database: 'fec'
});

module.exports = {connection};