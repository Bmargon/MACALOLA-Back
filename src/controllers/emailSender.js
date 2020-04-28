const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



const welcomeEmial = (to) => {
  
  let template = ``
  const email = {
    to,
    from: 'macalola@macalola.com',
    subject: 'Sending with SendGrid is Fun',
    html: template
  }

}

const recoveryPasswordEmail = (to, token) => {
  
  let template = `
      <div>
      <h1>Macalola</h1>
      <br>
      <h2>Recuperación de contraseñas</h2>
      <br>
      <p>Tenemos registrada una solicitud para el reseteo de contraseña, haga click en el siguiente enlace</p>
      <p>
        <a href="localhost:3000/recovery?token=${token}">localhost:3000/recovery?token=${token}</a>
      </p>
      <br>
    </div>
  `
  const email = {
    to,
    from: 'macalola@macalola.com',
    subject: 'Recovery Password',
    html: template
  }

  sgMail.send(email);
}
const bloackedAccountEmail = (to) => {
  
  const email = {
    to,
    from: 'macalola@macalola.com',
    subject: 'Recovery Password',
    templateId: '1f70949f-969f-4dc0-999c-d03497f6d5e8',

    dynamic_template_data: {
      link: 'google.es',
    }
  }

  sgMail.send(email);
}


module.exports = {
  welcomeEmial,
  recoveryPasswordEmail,
  bloackedAccountEmail
}