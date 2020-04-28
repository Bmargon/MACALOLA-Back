const stripe = require('stripe')('sk_test_CR4G4g8akNZEGTOLhrizLhD500wCDzUOPt');

const addStripeCostumer = async (user) => {


  try {
    return user =  await stripe.customers.create({
      name: user.name, // full name
      email: user.email,
      phone: user.tlf,
      // shipping: {
      //   name: user.name ,
      //   phone: user.tlf,
      //   address: {
      //     line1: user.adressInvoicing.line1,
      //     line2: user.adressInvoicing.line2,
      //     city: user.adressInvoicing.city,
      //     country: user.adressInvoicing.country,
      //     postal_code: user.adressInvoicing.postal_code,
      //     state: user.adressInvoicing.state
      //   },
      // },
    })
  } catch (error) {
    return new Error('No se pudo crear stripe user', error);
  }
}

module.exports = {
  addStripeCostumer
}