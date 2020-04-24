if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('escuchando en puerto 3000');
})
console.log(process.env);