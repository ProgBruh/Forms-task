const Koa = require('koa');
const BodyParser = require('koa-bodyparser');

const router = require('./routes');

const app = new Koa();

app.use(BodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
(() => {
  app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
  });
})();
