var jwt = require('jsonwebtoken');

// TOKEN VERIFICATION
const authorization =  (req, res, next) => {
  let token = req.get(token)
  
  jwt.verify(token, process.env.AUTHORIZATION, (err, decoded) => {

    if (err) {
      return res.status(406).json({
        success: false,
        err,
        message: 'Error, token no valido'
      })
    }
    
    req.usuario = decode.user
    next()
  })
}


module.exports = {
  authorization
}