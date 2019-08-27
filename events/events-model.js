const knex = require('knex')
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

module.exports = {
  findEvents,
  findEventsID,
  // findEventsUser,
  createEvent,
  modifyEvent,
}

function findEvents() {
  return db('events')
    .select('*')
}


//// this is going to require a vendor join as well based upon vendor ids
function findEventsID(id) {
  return db('events')
    .join('lists','lists.event_id', '=', 'events.id')
    .where({ id })
    .first()
    .select('*')
}

// function findEventsUser(userID) {
//   return db('events')
//     .where()
// }
////// Where user is included in list
/// event_users includes id

function createEvent(newEvent) {
  return db('events')
    .insert(newEvent, 'id')
    .then(ids => {
      const [id] = ids;
      return findEventsID(id)
        .select('*')
    })
}