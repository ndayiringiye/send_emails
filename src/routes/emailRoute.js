const express = require("express");
const router = express.Router();
const sendEmail = require("../controllers/sendEmailController");

router.post("/api/send", sendEmail);

module.exports = router;
