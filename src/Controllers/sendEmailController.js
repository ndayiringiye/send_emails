const nodemailer = require("nodemailer");
const Email = require("../models/emailModel.js");

const sendEmail = async (req, res) => {
  const { title, from, to, subject, html } = req.body;

  if (!title || !from || !to || !subject || !html) {
    return res.status(400).json({
      success: false,
      message: "title, from, to, subject, and html are required",
    });
  }

  try {
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const emailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    };

    transport.sendMail(emailOptions, async (error, info) => {
      if (error) {
        return res.status(500).json({ success: false, error });
      }

      await Email.create({ title, from, to, subject, html });

      res.status(200).json({
        success: true,
        message: "Email sent successfully",
        info,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Sending email failed",
      error,
    });
  }
};

module.exports = { sendEmail };
