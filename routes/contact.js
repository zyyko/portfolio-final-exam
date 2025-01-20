const express = require("express");
const router = express.Router();
const con = require("../db"); // Import the database connection
const nodemailer = require("nodemailer");

// Route to get user data for about page
router.get("/", function (req, res) {
  res.render("contact");
});

router.post("/", async function (req, res) {
  const { email, name, message } = req.body;

  if (!email || !name || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pfe.laravel@gmail.com",
        pass: "cjpjdzyekbjwgphw",
      },
    });

    const mailOptions = {
      from: email,
      to: "zyko.taouaf@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Your message has been sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
});

module.exports = router;
