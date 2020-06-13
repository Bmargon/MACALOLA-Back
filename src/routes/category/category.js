const express = require('express');
const app = express();
const Category = require('../../models/categoryModel')
const  {authorizationAdmin} = require('../../middlewares/auth')

app.post('/category', authorizationAdmin, (req, res) => {
  
  let body = req.body

  let category = new Category({
    name: body.name.toUpperCase(),
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
  
  Category.find({}, (err, categoryDB) => {
    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Error al obtener las categorias'
      })
    }
    if (!categoryDB) {
      return res.status(404).json({
        success: false,
        err,
        message: 'No existen categorias'
      })
    }
    res.status(201).json({
      success: true,
      categoryDB,
      message: 'Categoria encontradas correctamente'
    })
    
  })
})
// app.put('/category/:id', authorizationAdmin, (req, res) => {
  
//   let id = req.params.id
//   let body = req.body

//   Category.findByIdAndUpdate(id, body, {new: true}, (err, categoryDB) => {
//     if (err) {
//       return res.status(502).json({
//         success: false,
//         err,
//         message: 'Error al actualizar las categorias'
//       })
//     }
//     res.status(201).json({
//       success: true,
//       categoryDB,
//       message: 'Categoria actualizada correctamente'
//     })
//   })
// })
app.delete('/category/:id', authorizationAdmin, (req, res) => {
  
  let id = req.params.id

  Category.findByIdAndRemove(id, (err, categoryDB) => {
    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Error al borrar ls categoria'
      })
    }
    res.status(201).json({
      success: true,
      message: 'Categoria borrada correctamente'
    })
  })
})

module.exports = app