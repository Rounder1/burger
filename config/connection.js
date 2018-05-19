var mysql = require("mysql");

// Set up MySQL connection.
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Class2018",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;