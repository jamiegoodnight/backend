const db = require("../data/dbConfig");

module.exports = {
  find,
  findRole
};

function find() {
  return db("roles").select("*");
}

function findRole(filter) {
  return db("roles").where(filter);
}
