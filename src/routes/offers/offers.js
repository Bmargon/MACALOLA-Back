const express = require('express');
const app = express();
const Product = require('../../models/productModel')


app.get('/offers', (req, res) => {

  let from = parseInt(req.query.from) || 0
  let totalPerPage = parseInt(req.query.total) || 20

  Product.find({promotionOn: true}, 'name promotionOn referenceNumberCommon totalStock accesory category img salePrice')
  .skip(from)
  .limit(totalPerPage)
  .exec((err, productsDB) => {
  
    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Ha ocurrido un error crear al contar las ofertas'
      })
    }
    if (!productsDB) {
      return res.status(502).json({
        success: false,
        err,
        message: 'No hay ofertas dispnibles'
      })
    }
    
    Product.count({}, (err, total) => {
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
module.exports = app