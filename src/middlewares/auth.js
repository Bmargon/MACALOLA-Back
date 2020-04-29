const jwt = require('jsonwebtoken');

// TOKEN VERIFICATION
const authorization =  (req, res, next) => {
  let token = req.get('token')
  
  jwt.verify(token, process.env.AUTHORIZATION, (err, decoded) => {

    if (err) {
      return res.status(406).json({
        success: false,
        err,
        message: 'Error, token no valido'
      })
    }
    
    req.usuario = decoded.user
    next()
  })
}
// TOKEN VERIFICATION ADMIN

const authorizationAdmin =  (req, res, next) => {

  let token = req.get('token')

  jwt.verify(token, process.env.AUTHORIZATION, (err, decoded) => {

    if (err) {
      return res.status(406).json({
        success: false,
        err,
        message: 'Error, token no valido'
      })
    }
    console.log('decode', decoded);
    if (decoded.user.role !== 'ADMIN') {
      return res.status(401).json({
        success: false,
        err,
        message: 'Usuario no autorizado'
      })
      
    }
    
    next()
  })
}


module.exports = {
  authorization,
  authorizationAdmin
}