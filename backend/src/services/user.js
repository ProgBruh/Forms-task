const bcrypt = require('bcrypt');
const db = require('../db');

const createUser = (data) => {
  const { password } = data;
  const salt = bcrypt.genSaltSync(10);
  const newPassword = bcrypt.hashSync(password, salt);
  const userData = Object.assign(data, { password: newPassword });
  return db('users').insert(userData);
};

const getUserByEmail = (email) =>
  db.select('*').from('users').where('email', '=', email).first();

module.exports = {
  createUser,
  getUserByEmail,
};
