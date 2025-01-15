const express = require("express");
const router = express.Router();
const con = require("../db");


// Combined route
router.get('/', (req, res) => {
    // Run all queries in parallel using Promise.all
    Promise.all([
      new Promise((resolve, reject) => {
        con.query(
          `SELECT 
            e.name AS education_name, 
            e.date AS education_date, 
            e.description AS education_description
           FROM education e
           WHERE e.user_id = 1;`,
          (error, education) => {
            if (error) return reject(error);
            resolve(education);
          }
        );
      }),
      new Promise((resolve, reject) => {
        con.query(
          `SELECT 
            ex.name AS experience_name, 
            ex.date AS experience_date, 
            ex.description AS experience_description
           FROM experiences ex
           WHERE ex.user_id = 1;`,
          (error, experience) => {
            if (error) return reject(error);
            resolve(experience);
          }
        );
      }),
      new Promise((resolve, reject) => {
        con.query(
          `SELECT * FROM projects WHERE user_id = 1`,
          (error, projects) => {
            if (error) return reject(error);
            resolve(projects);
          }
        );
      }),
      new Promise((resolve, reject) => {
        con.query("SELECT * FROM skills WHERE user_id = 1", (error, results) => {
          if (error) return reject(error);
  
          const technicalSkills = results.slice(0, 4);
          const professionalSkills = results.slice(4, 8);
          resolve({ technicalSkills, professionalSkills });
        });
      }),
      new Promise((resolve, reject) => {
        con.query(
          `SELECT * FROM certificates WHERE user_id = 1`,
          (error, certificates) => {
            if (error) return reject(error);
            resolve(certificates);
          }
        );
      })
    ])
    .then(([education, experience, projects, skills, certificates]) => {
      // After all queries are resolved, render the page with the data
      res.render("resume", {
        education,
        experience,
        projects,
        skills: skills,  // Assuming skills is an object with technical and professional arrays
        certificates
      });
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      res.status(500).send("Internal Server Error");
    });
  });
  

module.exports = router;
