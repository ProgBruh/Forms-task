const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);
const password = bcrypt.hashSync('admin', salt);

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('users').insert([
        {
          id: 1,
          firstName: 'admin',
          lastName: 'admin',
          phone: '+79999999999',
          username: 'admin',
          email: 'admin@gmail.com',
          password,
        },
      ]),
    );
};
