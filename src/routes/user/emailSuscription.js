const express = require('express')
const app = express()
const {addToSuscriptionList, reactivateToSuscriptionList, unsuscribeFromSuscriptionList} = require('../../controllers/emailMarketing')

// SUSCRIBE
app.post('/suscription', async (req, res) => {

  let email = req.body.email
  try {
    let addEmail = await addToSuscriptionList(email)
    return res.status(200).json({
      success: true,
      addEmail,
      message: 'Usuario añadido a la lista de suscripcion'
    })
  } catch (error) {

    if (error.title === 'Member Exists') {

      try {

        let response = await reactivateToSuscriptionList(email)
        return res.status(200).json({
          success: true,
          response,
          message: 'Usuario añadido a la lista de suscripcion de nuevo'
        })
      } catch (error) {
        return res.status(500).json({
          success: false,
          error,
          message: 'No se podido reactivar usuario'
        })
      }
    }

    return res.status(500).json({
      success: false,
      error,
      message: 'No se podido añadir usuario'
    })
  }

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