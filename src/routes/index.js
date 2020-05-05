const express = require('express');
const app = express();

app.use(require('./user/user'))
app.use(require('./user/login'))
app.use(require('./user/emailSuscription'))
app.use(require('./user/resetPassword'))
app.use(require('./category/category'))
app.use(require('./product/product'))
app.use(require('./product/getByCategory'))
app.use(require('./contact/contact'))
app.use(require('./config/setConfig'))

module.exports = app