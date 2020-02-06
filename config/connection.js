const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: '192.168.99.100',
    port: 3306,
    user: 'root',
    password: 'docker',
    database: 'burgers_db'
  });
}

connection.connect((err) => {
  if (err) return console.error(`error connecting: ${err.stack}`);
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;