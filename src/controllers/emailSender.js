const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


let template = ``

const emailSender = (to) => {

  const email = {
    to,
    from: 'macalola@macalola.com',
    subject: 'Sending with SendGrid is Fun',
    html: template
  }

}


module.exports = {
  emailSender
}