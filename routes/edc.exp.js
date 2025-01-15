const express = require("express");
const router = express.Router();
const con = require("../db"); // Import the database connection

// Route to get user data for about page
router.get("/", function (req, res) {
  con.query(
    `SELECT 
          e.name AS education_name, 
          e.date AS education_date, 
          e.description AS education_description
       FROM education e
       WHERE e.user_id = 1;`,
    function (error, education) {
      if (error) throw error;

      con.query(
        `SELECT 
              ex.name AS experience_name, 
              ex.date AS experience_date, 
              ex.description AS experience_description
           FROM experiences ex
           WHERE ex.user_id = 1;`,
        function (error, experience) {
          if (error) throw error;

          res.render("edu_exp", {
            education,
            experience,
          });
        }
      );
    }
  );
});

module.exports = router;
