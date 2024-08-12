const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: "ishaansince2002@gmail.com",
    pass: "bqihgkrtftsncacr",
  },
});

// Function to send mail
exports.sendMail = (email, subject, text, html) => {
  
    // send mail with defined transport object
    transporter.sendMail({
      from: '<thanks@shop.email>', // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      html: html, // html body
    })
    .then(message=>{
      console.log("Message sent: %s", message);
    })
    .catch (error=>{
      console.error("Error sending email:", error);
    } )
};
