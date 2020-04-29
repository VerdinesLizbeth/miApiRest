const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'remotemysql.com',
  user: '9cd2Uz8FW4',
  password: 'fsZO8haSH0',
  database: '9cd2Uz8FW4',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;