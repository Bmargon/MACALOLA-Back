const express = require('express');
const app = express();
const Product = require('../../models/productModel')
const Category = require('../../models/categoryModel')
const mongoose = require('mongoose')
var ObjectId = mongoose.Types.ObjectId

app.get('/bycategory/:cat', async (req, res) => {

  let from = parseInt(req.query.from) || 0
  let totalPerPage = parseInt(req.query.total) || 20
  Category.find({name: req.params.cat.toUpperCase()}, (err, categoryDB) => {


    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Ha ocurrido un error crear al obtener la categoria'
      })
    }
    if (!categoryDB) {
      return res.status(404).json({
        success: false,
        err,
        message: 'No existe esta categoria'
      })
    }
    if (categoryDB.length === 0) {
      return res.status(404).json({
        success: false,
        err,
        message: 'No existe esta categoria'
      })
    }
    var query = { category: new ObjectId(categoryDB[0]._id)}
    
    Product.find( query, 'name salePrice promotionOn referenceNumberCommon totalStock img accesory')
    .skip(from)
    .limit(totalPerPage)
    .exec((err, productsDB) => {
      if (err) {
        return res.status(502).json({
          success: false,
          err,
          message: 'Ha ocurrido un error al obtener los productos por categoria'
        })
      }
      if (!productsDB) {
        return res.status(404).json({
          success: false,
          err,
          message: 'No existen productos en esta categoria'
        })
      }
      if (productsDB.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'No hay productos'
        })
      }
      // get the total of item
      Product.find(query).count((err, total) => {
        if (err) {
          return res.status(404).json({
            success: false,
            message: 'No hay productos'
          })
        }

        return res.status(200).json({
          success: true,
          productsDB,
          total,
          message: 'Productos encontrados:'
        })
      })
    })

  })

})

module.exports = app