const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'be5qjkaewposxbbxvdn6-mysql.services.clever-cloud.com',
  user     : 'unqov54fxzzng2ox',
  password : '5sInn8QUo7gnbCit2yji',
  database : 'be5qjkaewposxbbxvdn6'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;