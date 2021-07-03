const Router = require('koa-router');

const router = new Router();

const auth = require('./auth');

router.use(auth);

module.exports = router;
