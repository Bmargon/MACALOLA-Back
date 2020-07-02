const mongoose = require('mongoose');
const Schema = mongoose.Schema

const roles = ['ADMIN', 'ASSIST', 'USER']
const genres = ['MALE', 'FEMALE', 'OTHER']

const User = Schema({
    name: {type: String, require: true},
    username: {type: String},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    bdate: {type: String},
    genre: {type: String, enum: genres},
    adressInvoicing: {type: Object},
    adressShipping: {type: Object},
    orders: {type: Array},
    tlf: {type: String},
    returns: {type: Array},
    subscribe: {type: Boolean, default: false},
    role: {type: String, enum: roles, default: 'USER'},
    invoices: {type: Array},
    wishList: {type: Array},
    active: {type: Boolean, default: true},
    tries: {type: Number, default: 5},
    stripeID: {type: String},
})

module.exports = mongoose.model('User', User)