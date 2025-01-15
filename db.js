const mysql = require("mysql");

// Create and export the database connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cv",
});

con.connect(function (error) {
  if (error) {
    console.error("Error connecting to the database:", error);
  } else {
    console.log("Connected to the database!");
  }
});

module.exports = con;
