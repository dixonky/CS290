var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_dixonky',
  password        : '6749',
  database        : 'cs290_dixonky'
});

module.exports.pool = pool;
