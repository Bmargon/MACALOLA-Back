const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let emailSender = (to) => {
  const template = ``

  const email = {
    to,
    from: 'macalola@macalola.com',
    subject: 'Sending with SendGrid is Fun',
    html: template
  }

}


module.exports = {

}