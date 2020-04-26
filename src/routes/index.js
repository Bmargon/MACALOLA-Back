const express = require('express');
const app = express();

app.use(require('./user/user'))
app.use(require('./user/login'))
app.use(require('./user/emailSuscription'))

module.exports = app