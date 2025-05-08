const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { title, from, to, subject, html } = req.body;

  if (!title || !from || !subject || !html || !to) {
    return res.status(400).json({
      success: false,
      message: "All fields (title, from, to, subject, html) are required",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Email sending failed",
      error,
    });
  }
};

module.exports = sendEmail;
