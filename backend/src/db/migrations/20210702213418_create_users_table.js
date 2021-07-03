exports.up = function (knex) {
  return knex.schema.createTable('users', (t) => {
    t.increments();
    t.string('firstName').notNull();
    t.string('lastName').notNull();
    t.string('phone').notNull().unique();
    t.string('username').notNull().unique();
    t.string('email').notNull().unique();
    t.string('password').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
