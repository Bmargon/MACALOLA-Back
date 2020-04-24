if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express');
const app = express();
// ROUTES
app.use(require('./src/routes/index'))
