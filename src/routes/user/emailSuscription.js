const express = require('express')
const app = express()
const {addToSuscriptionList, reactivateToSuscriptionList} = require('../../controllers/emailMarketing')

app.post('/suscription', (req, res) => {

  addToSuscriptionList(req.body.email).then( (data) => {

    if (data.status == 400) {
      reactivateToSuscriptionList(req.body.email).then((data) => {
        res.status(200).json({
          success: true,
          data,
          message: 'Usuario añadido a la lista de suscripcion de nuevo correctamente'
        })
      }).catch((err) => {
        res.status(406).json({
          success: false,
          err,
          message: 'No se pudo reactivar la suscripcion'
        })
      })
    }
    
    else {
      res.status(200).json({
        success: true,
        data,
        message: 'Añadido a la lista de suscripcion ok'
      })
    }

  }).catch((err) => {

    res.status(406).json({
      success: false,
      err,
      message: 'No se pudo añadir a la lista correctamente'
    })

  })

})

module.exports = app