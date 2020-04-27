const stripe = require('stripe')('pk_test_gsB61je2EKScjohgCX99U8nn00kwyWqPp1');

const addStripeCostumer = async (user) => {


  try {
    return await stripe.customers.create({
      name: user.name + ' ' + user.username, // full name
      shipping: {
        name: user.name + ' ' + user.username,
        phone: user.tlf,
        address: {
          line1: user.adressInvoicing.line1,
          line2: user.adressInvoicing.line2,
          city: user.adressInvoicing.city,
          country: user.adressInvoicing.country,
          postal_code: user.adressInvoicing.postal_code,
          state: user.adressInvoicing.state
        },
      },
      address: {
        line1: user.adressInvoicing.line1,
        line2: user.adressInvoicing.line2,
        city: user.adressInvoicing.city,
        country: user.adressInvoicing.country,
        postal_code: user.adressInvoicing.postal_code,
        state: user.adressInvoicing.state
      },
      email: user.email,
      phone: user.tlf,
    })
  } catch (error) {
    return new Error('No se pudo crear stripe user', error);
  }
}

module.exports = {
  addStripeCostumer
}