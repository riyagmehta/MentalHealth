// const express = require("express");
// const router = express.Router();
require("dotenv").config();

var nodemailer = require("nodemailer");

const mailer = (email, otp ) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "mail.eauction@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  var mailOptions = {
    from: "mail.eauction@gmail.com",
    to: email,
    subject: "Sucessfully Registration Mail",
    html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Mental Health</a>
    </div>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Us.</p>
    <p>Hope you are doing well with your mental health</p>
    <p>😊 Be happy have a smile at your pretty face 😊</p> 
    <p style="font-size:0.9em;">Regards,<br />Health Care</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>HealthCare Team</p>
      <p>DDU IT Faculty of Technology</p>
      <p>Nadiad</p></div>
  </div>
</div>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = mailer;
