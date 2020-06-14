const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



const welcomeEmial = (to, name) => {
  
  let template = 'd-ff8a8d93b72047ea948d2904cc79dbaf'
  const email = {
    to,
    from: 'macalola@macalola.com',
    subject: 'Bienvenida a Macalola!',
    templateId: template,
    dynamic_template_data: {
      name,
      link: 'www.macalola.com',
    }
  }
  sgMail.send(email);
}

const recoveryPasswordEmail = (to, token) => {
  
  let template = 'd-22407b1db24645769e2a57a539a638ca'
  const email = {
    to,
    from: 'macalola@macalola.com',
    subject: 'Recovery Password',
    templateId: template,
    dynamic_template_data: {
      link: 'www.macalola.com/recovery?token=' + token,
    }
  }

  sgMail.send(email);
}
const bloackedAccountEmail = (to) => {

  const template = 'd-b359d1aac966470a959411a2e7110d89'

  const email = {
    to,
    from: 'macalola@macalola.com',
    subject: 'Cuenta bloqueada - Macalola',
    templateId: template,

    dynamic_template_data: {
      link: 'www.google.es',
    }
  }

  sgMail.send(email);
}
const contactRequest = (body) => {

  const email = {
    to: 'at.cliente@macalola.com',
    from: 'macalola@macalola.com',
    subject: 'Solicitud de ATT',
    html: `
      <p>El siguiente mensaje ha sido enviado por ${body.name} ${body.surname} con la siguiente consulta:</p>
      <hr>
      ${body.message}
      <hr>
      <p>
      Email para su respuesta: ${body.email}
      </p>
    `
  }

  return sgMail.send(email);
}


module.exports = {
  welcomeEmial,
  recoveryPasswordEmail,
  bloackedAccountEmail,
  contactRequest
}