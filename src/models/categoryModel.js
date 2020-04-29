const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Category = Schema({
  name: {type: String, require: true, unique: true},
  referenceNumber: {type: Number}
})

module.exports = mongoose.model('Category', Category)