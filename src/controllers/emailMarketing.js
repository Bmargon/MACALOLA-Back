const Mailchimp = require('mailchimp-api-v3')
const mailchimp = new Mailchimp(process.env.CHIMP);
var md5 = require('md5');

const url = '/lists/811c613026/members'

let addToSuscriptionList = (email) => {
  
 
  return mailchimp.post(url, {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      'CTA': 'NEWCLIENT',
      'FNAME': '',
      'LNAME': '',
      'BIRTHDAY': '',
    }
  })

}

let reactivateToSuscriptionList = (email) => {

  let hash = md5(email)
  url2 = url +'/'+ hash
  return mailchimp.put(url2, {
    email_address: email,
    status: 'subscribed',
    }
  )
}

let unsuscribeFromSuscriptionList = (email) => {

  let hash = md5(email)
  url2 = url +'/'+ hash

  mailchimp.put(url2, {
    email_address: email,
    status: 'unsubscribed',
    }
  )

}


module.exports = {
  addToSuscriptionList,
  reactivateToSuscriptionList,
  unsuscribeFromSuscriptionList
}