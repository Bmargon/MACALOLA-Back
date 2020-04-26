const express = require('express');
const app = express();
const User = require('../../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {

  let body = req.body

  User.findOne({email: body.email}, (err, userDB) => {
  
    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Ha ocurrido un error al intentar entrar'
      })
    }

    if (!userDB) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Este usuario no está registrado'
      })
    }

    if (!userDB.active) {
      return res.status(406).json({
        success: false,
        err,
        message: 'Por motivos de seguridad su usuario ha sido desactivado'
      })
    }

    if (!bcrypt.compareSync(body.password, userDB.password)) {
      
      if (userDB.tries === 0 ){
        userDB.active = false
        userDB.save()
        return res.status(406).json({
          success: false,
          message: 'Por motivos de seguridad su usuario ha sido desactivado'
        })
      }
      userDB.tries -= 1;
      userDB.save()

      return res.status(502).json({
        success: false,
        message: 'Los campos son incorrectos'
      })
    }

    let token = jwt.sign({user: userDB}, process.env.AUTHORIZATION, {expiresIn: '2h'})

    res.status(200).json({
      success: true,
      token,
      message: 'Acceso ok'
    })
  })
})

module.exports = app