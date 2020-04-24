if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express');
const app = express();
const serveStatic = require("serve-static")
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// DB CONEXION
mongoose.connect(process.env.DB , {useNewUrlParser: true, useUnifiedTopology: true});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// FRONTEND
app.get(/.*/)
app.use(serveStatic(path.resolve(__dirname, 'public/index.html')));
// ROUTES
app.use(require('./src/routes/index'))
// PORT
app.listen(process.env.PORT, () => {
    console.log('escuchando en puerto 3000');
})
