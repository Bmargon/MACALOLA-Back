const express = require('express');
const app = express();
const User = require('../../models/userModel')
const jwt = require('jsonwebtoken');
const {recoveryPasswordEmail} = require('../../controllers/emailSender')
const bcrypt = require('bcrypt');

app.post('/password', (req, res) => {
  let email = req.body.email

  User.findOne({email}, (err, userDB) => {
    if (err) {
      return res.status(500).json({
        success: false,
        err,
        message: 'Ha ocurrido un error intentar recuperar tu contraseña, intentelo de nuevo mas tarde'
      })
    }
    if (!userDB) {
      return res.status(404).json({
        success: false,
        err,
        message: 'El email no existe'
      })
    }

    let token = jwt.sign({email: email}, process.env.AUTHORIZATION, {expiresIn: '30m'})

    recoveryPasswordEmail(userDB.email, token)

    res.status(200).json({
      success: true,
      token,
    })

  })
})


app.put('/password', (req, res) => {

  let token = req.query.token
  let password = req.body.password

  jwt.verify(token, process.env.AUTHORIZATION, (err, decode) => {
    if (err) {
      return res.status(500).json({
        success: false,
        err,
        message: 'Error, el tiempo para la petición ha expirado'
      })
    }

    User.findOne({email: decode.email}, (err, userDB) => {
      if (err) {
        return res.status(500).json({
          success: false,
          err,
          message: 'Usuario no encontrado'
        })
      }

      userDB.password = bcrypt.hashSync(password, 4)
      userDB.active = true
      userDB.tries = 5
      userDB.save()

      res.status(200).json({
        success: true,
        message: 'Contraseña cambiada correctamente'
      })

    })
  })
})
module.exports = app