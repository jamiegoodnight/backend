const express = require('express')

const router = express.Router()
const Roles = require('./roles-model.js')

router.get('/', (request, response) => {
  Roles.find()
    .then(roles => {
      response.json(roles)
    })
    .catch(error => {
      console.log(error)
      response.send(error)
    })
})

module.exports = router