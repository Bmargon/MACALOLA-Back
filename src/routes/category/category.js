const express = require('express');
const app = express();
const Category = require('../../models/categoryModel')
const  {authorizationAdmin} = require('../../middlewares/auth')

app.post('/category', authorizationAdmin, (req, res) => {
  
  let body = req.body

  let category = new Category({
    name: body.name,
    referenceNumber: body.referenceNumber,
  })

  category.save((err, categoryDB) => {
    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Ha ocurrido un error crear la categoria'
      })
    }
    res.status(201).json({
      success: true,
      categoryDB,
      message: 'Categoria creada correctamente'
    })
  })

})

app.get('/category', (req, res) => {

})

module.exports = app