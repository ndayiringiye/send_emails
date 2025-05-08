const Email = require("../models/emailModel.js");
const nodemailer = require("nodemailer");

const sendEmail = async (req ,res) =>{
    const{title, from, to, subject, html} =req.body;
    try {
        if(title || from || subject || html || to) return res.status(500).json({success : false, message :"title, from, subject, and html must be required"})
            const Transport = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: "475",
                auth:{
                    email :process.env.EMAIL_USER,
                    Pass: process.env.EMAIL_PASSWORD
                },
                tls:{
                    rejectUnauthorized : false
                }
            
            })
            const emailOptions = {
                from: process.env.EMAIL_USER,
                to,
                subject,
                html: text,
            };
       Transport.sendEmail(emailOptions, function(error, info){
            if(error){
                console.log(error)
            }else{
                console.log(info)
            }
            });
            res.status(200).json({
                success : true,
                from: process.env.EMAIL_USER,
                to,
                subject,
                html: text,
                message : "email sent successfully"
            })
    } catch (error) {
        res.status(500).json({success :false, message : "sending email failure", error})
    }
};
exports.module = {sendEmail}