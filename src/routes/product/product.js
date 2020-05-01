const express = require('express');
const app = express();
const Product = require('../../models/productModel')
const {authorizationAdmin} = require('../../middlewares/auth')
const multer = require('multer')
const path = require('path')
const cloudinary = require('cloudinary')
const fs = require('fs-extra')

cloudinary.config({
  cloud_name: 'macalola',
  api_key: '652734158727429',
  api_secret:  process.env.CLOUDINARY
})

const storage = multer.diskStorage({
  destination: path.join(__dirname, '/uploads'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname))
  }
})

app.post('/product', [authorizationAdmin, multer({storage}).single('img')], async (req, res) => {

  let body = req.body
  
  const result = await cloudinary.v2.uploader.upload(req.file.path)

  let productModel = new Product({
    provider: body.provider,
    buyDate: body.buyDate,
    season: body.season,
    name: body.name,
    purchasePrice: body.purchasePrice,
    salePrice: body.salePrice,
    percentage: body.percentage,
    promotionOn:  body.promotionOn,
    referenceNumberCommon: body.referenceNumberCommon,
    description: body.description,
    stock: body.stock,
    totalStock: body.totalStock,
    accesory: body.accesory,
    img: result.url,
    cloudinary_id: result.public_id,
    category: body.category,
  })

  await fs.unlink(req.file.path)

  await productModel.save((err , productDB) => {
      
    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Ha ocurrido un error al crear el producto'
      })
    }
    return res.status(200).json({
      success: true,
      productDB,
      message: 'Producto creado correctamente'
    })

  })
})

module.exports = app