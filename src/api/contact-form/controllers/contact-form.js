
const nodemailer = require('nodemailer');

module.exports = {
  sendForm: async (ctx) => {
    try {
      const {
        name,
        surname,
        email,
        message,
      } = ctx.request.body.data;



      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_TOKEN,
        },
        debug: true,
      }, {
        logger: true
      });



      let emailText =
        `Full Name: ${name} ${surname}\n` +
        `Email: ${email}\n` +
        `${message}`;

      const emailMessage = {
        from: 'invastcoinform@gmail.com',
        to: `selminlekovic@gmail.com`,
        subject: "Contact form from Invast Coin Website",
        text: emailText,
      };

      await transporter.sendMail(emailMessage);
      ctx.send({ message: `Email sent successfully!` });
    } catch (error) {
      console.error(error)
      ctx.send({ error: 'Failed to send email', details: error.message });
    }
  },
  async sendResult(ctx) {
    try {
      const data = ctx.request.body; // FIXED: Extract request body correctly

      console.log("Received Data:",  ctx.request);


      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_TOKEN,
        },
        secure: true, // FIXED: Ensure secure connection for Gmail
        debug: true,
      });

      const emailMessage = {
        from: "selmin@origin3agency.com",
        to: "selminlekovic@gmail.com",
        subject: "Insurance Calculation Result",
        text: `
          First Name: ${data.first_name}
          Last Name: ${data.last_name}
          Birthday: ${data.birthday}
          Email: ${data.email}
          Gender: ${data.sex}
          Insurance Period: ${data.insurance} years
          Insurance Price: ${data.insurance_price} EUR
          Monthly Premium: ${data.monthly_premium} EUR
        `,
      };

      await transporter.sendMail(emailMessage);

      ctx.send({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Email sending failed:", error);
      ctx.send({ error: "Failed to send email", details: error.message });
    }
  },
};
