const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Order = Schema({
  total: { type: Number, required: true},
  shipping: { type: Object},
  products: { type: Array},
  freeShipping: { type: Boolean, default: false},
  purchaseDate: { type: String},
  pending: {type: Boolean, default: true},
  user: {type: Schema.Types.ObjectId, ref: 'User', require: true },
  product: { type: Array }
})

module.exports = mongoose.model('Order', Order)