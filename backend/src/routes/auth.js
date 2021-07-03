const Router = require('koa-router');

const router = new Router();

const { authController } = require('../controllers');

router
  .post('/sign_in', authController.signIn)
  .post('/sign_up', authController.signUp);

module.exports = router.routes();
