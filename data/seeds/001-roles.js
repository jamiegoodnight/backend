
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {role_name: 'Adminstrator'},
        {role_name: 'Manager'},
        {role_name: 'User'}
      ]);
    });
};
