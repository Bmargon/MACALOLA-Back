const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Product = Schema({
  provider: {type: String, require: true},
  buyDate: {type: String, require: true},
  season: {type: String, require: true},
  name: {type: String, require: true},
  purchasePrice: {type: Number, require: true},
  salePrice: {type: Number, require: true},
  salePrice: {type: Number, require: true},
  percentage: {type: Number},
  promotionOn: {type: Boolean, default: false},
  referenceNumberCommon: {type: String, require: true, unique: true},
  description: {type: String, require: true},
  stock: {type: Array},
  totalStock: {type: Number},
  accesory: {type: Boolean},
  img: {type: String, require: true},
  category: { type: Schema.Types.ObjectId, ref: 'Category'}
})

module.exports = mongoose.model('Product', Product)