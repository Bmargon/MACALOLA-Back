const express = require('express');
const app = express();

app.use(require('./admin/admin'))

module.exports = app