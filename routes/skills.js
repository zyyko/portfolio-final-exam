const express = require("express");
const router = express.Router();
const con = require("../db"); // Import the database connection

// Route to get user data for about page
router.get("/", function (req, res) {
  con.query("SELECT * FROM skills WHERE user_id = 1", (err, results) => {
    if (err) throw err;

    const technicalSkills = results.slice(0, 4);
    const professionalSkills = results.slice(4, 8);
    console.log(technicalSkills, professionalSkills);

    res.render("skills", { technicalSkills, professionalSkills });
  });
});

module.exports = router;
