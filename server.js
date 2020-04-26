if (process.env.NODE_ENV !== 'production') require('dotenv').config()

//const sslRedirect = require('heroku-ssl-redirect')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
//app.use(sslRedirect())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// ROUTES
app.use(require('./src/routes/index'))
// parse application/x-www-form-urlencoded
// parse application/json
// FRONTEND
app.use(express.static(__dirname + '/public/'))
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
// DB CONEXION
mongoose.connect(process.env.MONGODB_URI , {useNewUrlParser: true, useUnifiedTopology: true});
// PORT
app.listen(process.env.PORT, () => {
    console.log('escuchando en puerto 3000');
})
