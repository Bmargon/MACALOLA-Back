// if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// DB CONEXION
mongoose.connect(process.env.DB , {useNewUrlParser: true, useUnifiedTopology: true});
// app.use(require('./src/routes/index'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// FRONTEND
app.use(express.static(__dirname + '/public/'))
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
// ROUTES
// PORT
app.listen(process.env.PORT || 3000, () => {
    console.log('escuchando en puerto 3000');
})
