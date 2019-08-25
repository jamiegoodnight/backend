const knex = require('knex')
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

module.exports = {
  create,
  findBy,
  find
}

function create(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id)
        .select('id', 'username', 'role')
    })
}

function findBy(filter) {
  return db('users')
    .where(filter)
}

function find() {
  return db('users')
    .select('id', 'username', 'role')
}