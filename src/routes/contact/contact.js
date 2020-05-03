const express = require('express');
const app = express();
const {contactRequest} = require('../../controllers/emailSender')
app.post('/contact', async (req, res) => {

  let body = req.body
  
  try {
    let response = await contactRequest (body)
    return res.status(200).json({
      success: true,
      response,
      message: 'Solicitud enviada correctamente!'
    })
  } catch (error) {
    return res.status(502).json({
      success: false,
      error,
      message: 'Ha ocurrido un error al enviarnos el email'
    })
    
  }

})
module.exports = app