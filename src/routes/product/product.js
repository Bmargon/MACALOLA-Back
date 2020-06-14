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
  destination: path.join(__dirname, '../../uploads'),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname))
  }
})

app.get('/product',authorizationAdmin, async (req, res) => {

  let from = req.query.from || 0

  Product.find({}, 'name promotionOn referenceNumberCommon totalStock accesory category img')
  .skip(from)
  .limit(19)
  .populate('category', 'name')
  .exec((err, productDB) => {
    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Ha ocurrido un error crear al obtener los productos'
      })
    }
    if (!productDB) {
      return res.status(404).json({
        success: false,
        err,
        message: 'No se han encontrado productos'
      })
    }

    Product.count({}, (err, total) => {
      if (err) {
        return res.status(502).json({
          success: false,
          err,
          message: 'Ha ocurrido un error crear al contar el total de productos'
        })
      }

        return res.status(200).json({
          total,
          success: true,
          productDB,
          message: 'Productos encontrados'
        })
      })

    })

})

app.get('/product/:ref', async (req, res) => {

  let ref = req.params.ref

  Product.find({referenceNumberCommon: ref}, (err, productDB) => {
    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Ha ocurrido un error crear al obtener el producto'
      })
    }
    if (!productDB) {
      return res.status(404).json({
        success: false,
        err,
        message: 'El producto no existe'
      })

    }

    return res.status(200).json({
      success: true,
      productDB,
      message: 'Producto'
    })

  })

})
// Delete
app.delete('/product/:ref', authorizationAdmin, async (req, res) => {

  let ref = req.params.ref


  Product.findOne({referenceNumberCommon: ref}, async (err, productDB) => {

    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Ha ocurrido un error crear al borrar el producto'
      })
    }
    
    await cloudinary.v2.uploader.destroy(productDB.cloudinary_id)
    
    Product.findByIdAndRemove(productDB._id, (err, productDB) => {
      if (err) {
        return res.status(502).json({
          success: false,
          err,
          message: 'Ha ocurrido un error crear al borrar el producto'
        })
      }
      return res.status(200).json({
        success: true,
        productDB,
        message: 'Producto borrado'
      })
    })

  })
})
// POST 

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
    stock: JSON.parse(body.stock),
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
    return res.status(201).json({
      success: true,
      productDB,
      message: 'Producto creado correctamente'
    })

  })
})


// PUT

app.put('/product/:ref',  [authorizationAdmin, multer({storage}).single('img')] , async (req, res) => {

  let ref = req.params.ref
  let body = req.body
  
  Product.findOne({referenceNumberCommon: ref}, async (err, productDB) => {
    if (req.file) {
      let result
      await cloudinary.v2.uploader.destroy(productDB.cloudinary_id)
      result = await cloudinary.v2.uploader.upload(req.file.path)
      productDB.img = result.url
      productDB.cloudinary_id = result.public_id
      await fs.unlink(req.file.path)
    }

    productDB.provider = body.provider
    productDB.buyDate = body.buyDate
    productDB.season = body.season,
    productDB.name = body.name
    productDB.purchasePrice = body.purchasePrice
    productDB.salePrice = body.salePrice
    productDB.percentage = body.percentage
    productDB.promotionOn =  body.promotionOn
    productDB.description = body.description
    productDB.stock = JSON.parse(body.stock)
    productDB.totalStock = body.totalStock
    productDB.accesory = body.accesory
    productDB.category = body.category

    if (err) {
      return res.status(502).json({
        success: false,
        err,
        message: 'Ha ocurrido un error al actualizar el producto 1'
      })
    }

    await productDB.save((err, product) => {
      if (err) {
        return res.status(502).json({
          success: false,
          err,
          message: 'Ha ocurrido un error al actualizar el producto 2'
        })
      }
      if (!product) {
        return res.status(502).json({
          success: false,
          err,
          message: 'Ha ocurrido un error al actualizar el producto 3'
        })
      }
      return res.status(200).json({
        success: false,
        message: 'producto actualizado ok'
      })
    })

  })
})
module.exports = app