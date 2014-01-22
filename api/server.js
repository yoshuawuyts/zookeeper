/**
 * Module dependencies
 */

var koa = require('koa');

/**
 * Initialize variables
 */

var app = koa();
var port = NODE_ENV.port || 1337;

/**
 * Server/

 
 */

koa.use(function *(){
  this.body('hello world');
});

app.listen(port);