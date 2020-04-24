if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// ROUTES
app.use(require('./src/routes/index'))
// PORT
app.listen(process.env.PORT, () => {
    console.log('escuchando en puerto 3000');
})
