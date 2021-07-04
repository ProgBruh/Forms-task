const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const router = require('./routes');

const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
(() => {
  app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
  });
})();
