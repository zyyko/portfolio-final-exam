const express = require("express");
const router = express.Router();
const con = require("../db"); // Import the database connection

// Route to get user data for home page
router.get("/", function (req, res) {
  con.query("SELECT * FROM users WHERE id = 1", function (error, result) {
    if (error) throw error;

    res.render("home", {
      firstname: result[0].firstname,
      lastname: result[0].lastname,
      home_text: result[0].home_text,
      image: result[0].image,
    });
  });
});

module.exports = router;
