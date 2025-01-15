// app.js
const express = require("express");
const path = require("path");
const mysql = require("mysql");

//routes
const homeRoute = require("./routes/home");
const aboutmeRoute = require("./routes/about");
const servicesRoute = require("./routes/services");
const expEdcRoute = require("./routes/edc.exp");
const certificatsRoute = require("./routes/certificats");
const projectsRoute = require("./routes/projects");
const skillsRoute = require("./routes/skills");
const hobbiesRoute = require("./routes/hobbies");
const contactRoute = require("./routes/contact");
const resumeRoute = require("./routes/resume");
const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoute);
app.use("/about", aboutmeRoute);
app.use("/services", servicesRoute);
app.use("/education_experience", expEdcRoute);
app.use("/certificats", certificatsRoute);
app.use("/projects", projectsRoute);
app.use("/skills", skillsRoute);
app.use("/hobbies", hobbiesRoute);
app.use("/contact", contactRoute);
app.use("/resume", resumeRoute);

app.use("/test", (req, res) => {
  res.render("index");
});

// Start the server
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
