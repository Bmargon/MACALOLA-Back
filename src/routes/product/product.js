const express = require('express');
const app = express();
const Product = require('../../models/productModel')
const {authorizationAdmin} = require('../../middlewares/auth')

app.post('/login', authorizationAdmin, (req, res) => {

  let body = req.body

  let productModel = new Product({
    provider: body.provider,
    buyDate: body.buyDate,
    season: body.season,
    name: body.name,
    purchasePrice: body.purchasePrice,
    salePrice: body.salePrice,
    percentage: body.percentage,
    promotionOn: body.promotionOn,
    referenceNumberCommon: body.referenceNumberCommon,
    description: body.description,
    stock: body.stock,
    totalStock: body.totalStock,
    accesory: body.accesory,
    img: body.img,
    category: body.category,
  })

  productModel.save((err , productDB) => {
      
    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Ha ocurrido un error al crear el producto'
      })
    }

  })
})

module.exports = app