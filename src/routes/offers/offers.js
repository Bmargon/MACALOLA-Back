const express = require('express');
const app = express();
const Product = require('../../models/productModel')


app.get('/offers', (req, res) => {
  Product.find({promotionOn: true}, 'name promotionOn referenceNumberCommon totalStock accesory category img salePrice').exec((err, productDB) => {

  
    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Ha ocurrido un error crear al contar las ofertas'
      })
    }
    if (!productDB) {
      return res.status(502).json({
        success: false,
        err,
        message: 'No hay ofertas dispnibles'
      })
    }
    res.status(200).json({
      success: true,
      productDB
    })
    
  })
})
module.exports = app