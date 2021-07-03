const bcrypt = require('bcrypt');
const { userService } = require('../services');

const signIn = async (ctx) => {
  try {
    const { email, password } = ctx.request.body;
    const user = await userService.getUserByEmail(email);
    if (!user) {
      ctx.status = 400;
      return (ctx.body = 'Invalid email');
    }
    if (!password || !bcrypt.compareSync(password, user.password)) {
      ctx.status = 400;
      return (ctx.body = 'Invalid password');
    }
    delete user.password;
    ctx.body = user;
    ctx.status = 200;
  } catch {
    ctx.status = 500;
  }
};

const signUp = async (ctx) => {
  try {
    const data = ctx.request.body;
    await userService.createUser(data);
    ctx.status = 201;
  } catch {
    ctx.status = 500;
  }
};

module.exports = {
  signIn,
  signUp,
};
