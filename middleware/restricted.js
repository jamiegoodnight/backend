const bcrypt = require('bcryptjs')

const Users = require('../user/user-model.js')

module.exports = restricted

function restricted(request, response, next) {

  if (request.session && request.session.email) {
    next();
  } else {
    response.status(401).json({ message: 'No unauthorized access to this part of site' })
  }
}