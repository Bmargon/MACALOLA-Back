const mongoose = require('mongoose');
const Schema = mongoose.Schema

const roles = ['ADMIN', 'ASSIST', 'USER'];

const User = Schema({
    name: {type: String, require: true},
    username: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    adress: {type: Object},
    orders: {type: Array},
    tlf: {type: String},
    subscribe: {type: Boolean, default: false},
    role: {type: String, enum: roles, default: 'USER'},
    invoices: {type: Array},
    active: {type: Boolean, default: false}
})

module.exports = mongoose.model('User', User)