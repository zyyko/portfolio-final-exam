const express = require("express");
const router = express.Router();
const con = require("../db"); // Import the database connection

// Route to get user data for about page
router.get("/", function (req, res) {
  con.query(
    "SELECT text, image FROM aboutme INNER JOIN users ON aboutme.user_id = users.id WHERE users.id = 1",
    function (error, result) {
      if (error) throw error;

      res.render("about", {
        text: result[0].text,
        image: result[0].image,
      });
    }
  );
});

module.exports = router;
