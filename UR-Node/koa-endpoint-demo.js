var koa = require('koa');
var app = koa();

app.use(function* () {
  this.body = 'Hello from Koa';
});

app.listen(3001);
