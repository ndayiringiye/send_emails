const express = require("express");
const router = express.Router();
const sendEmail = require("../Controllers/sendEmailController.js"); 

router.post("/api/send", sendEmail);

module.exports = router;
