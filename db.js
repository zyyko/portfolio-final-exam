const mysql = require("mysql");

// Create and export the database connection
const con = mysql.createConnection({
  host: "bar6udqr8df8ya71r0hd-mysql.services.clever-cloud.com",
  user: "uge55g2m6uac0i6v",
  password: "ZDo21clF4BlA7j4TWgt2",
  database: "bar6udqr8df8ya71r0hd",
});

con.connect(function (error) {
  if (error) {
    console.error("Error connecting to the database:", error);
  } else {
    console.log("Connected to the database!");
  }
});

module.exports = con;
