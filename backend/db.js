const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'brunno33',
  database: 'aluguel_jogos'
});
module.exports = pool.promise();
