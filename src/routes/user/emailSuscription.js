const express = require('express')
const app = express()
const {addToSuscriptionList, reactivateToSuscriptionList, unsuscribeFromSuscriptionList} = require('../../controllers/emailMarketing')

// SUSCRIBE
app.post('/suscription', (req, res) => {

  addToSuscriptionList(req.body.email).then( (data) => {
    if (data.title == 'Member Exists') {
      reactivateToSuscriptionList(req.body.email).then((data) => {
        return res.status(200).json({
          success: true,
          data,
          message: 'Usuario añadido a la lista de suscripcion de nuevo correctamente'
        })
      }).catch((err) => {
        return res.status(406).json({
          success: false,
          err,
          message: 'No se pudo reactivar la suscripcion'
        })
      })
    }
    
    else {
      if(data.status = 400) {
        return res.status(400).json({
          success: false,
          message: data.detail
        })
      }
      return res.status(200).json({
        success: true,
        data,
        message: 'Añadido a la lista de suscripcion ok'
      })
    }

  })

})
// UNSUSCRIBE
app.put('/suscription', (req, res) => {

  unsuscribeFromSuscriptionList(req.body.email).then( (data) => {
    
    return res.status(200).json({
      success: true,
      data,
      message: 'Usuario desuscrito correctamente'
    })

  }).catch((err) => {

    return res.status(406).json({
      success: false,
      err,
      message: 'No se pudo desuscribir al usuario'
    })

  })

})

module.exports = app