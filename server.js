if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

app.use(function (req, res, next) {
    /*var err = new Error('Not Found');
     err.status = 404;
     next(err);*/
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    // Pass to next layer of middleware
    next();
  });
// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// ROUTES
app.use(require('./src/routes/index'))
// FRONTEND
app.use(express.static(__dirname + '/public/'))
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
// DB CONEXION
mongoose.connect(process.env.MONGO_URI , {useNewUrlParser: true, useUnifiedTopology: true});
// PORT
app.listen(process.env.PORT, () => {
    console.log('escuchando en puerto 3000');
})
