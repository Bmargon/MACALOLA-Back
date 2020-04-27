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
  
  let template = `
      <div>
      <h1>Macalola</h1>
      <br>
      <h2>Cuenta bloqueada</h2>
      <br>
      <p>Por motivos de seguridad su cuenta ha sido bloqueada, porfavor, restaurela a través de la página de inicio de sesión</p>
      <p>
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


module.exports = {
  welcomeEmial,
  recoveryPasswordEmail,
  bloackedAccountEmail
}