const express = require('express');
const app = express();
const fs = require('fs')
const { authorizationAdmin } = require('../../middlewares/auth')
app.put('/set-config', authorizationAdmin, (req, res) => {

  let body = req.body
  const file = fs.readFileSync( __dirname + '/../../config/globalConfig.json')
  let configFileSaved = JSON.parse(file)
   
  
  let configFile = {
    sendPrice: body.sendPrice || configFileSaved.sendPrice,
    tlfContant: body.tlfContant || configFileSaved.sendPrice,
    emailOnDisplay: body.emailOnDisplay || configFileSaved.sendPrice,
    moneyBack: body.moneyBack || configFileSaved.moneyBack,
    adress: body.emailOnDisplay || configFileSaved.sendPrice,
    carousel: body.carousel || configFileSaved.carousel,
    template: body.template || configFileSaved.template,
    social: body.social || configFileSaved.social,
  }

  // let configFile = JSON.parse(fs.readFileSync( __dirname + '/../../config/globalConfig.json'))

    fs.writeFileSync( __dirname + '/../../config/globalConfig.json', JSON.stringify(configFile) )

    res.status(200).json({
      success: true,
      message: 'Configuración actualiza con exito'
    })
  
})

app.get('/set-config', (req, res) => {
  let configFile = JSON.parse(fs.readFileSync( __dirname + '/../../config/globalConfig.json'))

  res.status(200).json({
    success: true,
    data: configFile
  })
})
module.exports = app