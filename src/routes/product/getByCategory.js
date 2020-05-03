const express = require('express');
const app = express();
const Product = require('../../models/productModel')

app.get('/product/:cat', (req, res) => {

  let cat = req.params.cat
  let from = req.query.from
  Product.find({category: cat}, 'name salePrice promotionOn referenceNumberCommon totalStock img')
  .limit(20)
  .skip(from)
  .exec((err, productsDB) => {
    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Ha ocurrido un error crear al obtener los productos por categoria'
      })
    }
    if (!productsDB) {
      return res.status(404).json({
        success: false,
        err,
        message: 'No existen productos en esta categoria'
      })
    }
    return res.status(200).json({
      success: true,
      productsDB,
      message: 'Productos encontrados:'
    })
  })
})

module.exports = app