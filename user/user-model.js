const knex = require('knex')
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

module.exports = {
  findUserId,
  create,
  findUser,
  find
}

function findUserId(id) {
  return db('users')
    .where({ id })
    .first()
}

function create(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findUserId(id)
        .select('id', 'username', 'role')
    })
}

function findUser(filter) {
  return db('users')
    .where(filter)
}

function find() {
  return db('users')
    .select('id', 'username', 'role_id')
}