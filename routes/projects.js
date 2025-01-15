const express = require("express");
const router = express.Router();
const con = require("../db"); // Import the database connection

// Route to get user data for about page
router.get("/", function (req, res) {
  con.query(
    `
    SELECT * FROM projects WHERE user_id = 1`,
    function (error, result) {
      if (error) throw error;
      res.render("projects", { projects: result });
    }
  );
});

module.exports = router;
