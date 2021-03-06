'use strict';

/**
 * Module dependencies
 */

var responseTime = require('koa-response-time');
var ratelimit = require('koa-ratelimit');
var compress = require('koa-compress');
var logger = require('koa-logger');
var Router = require('koa-router');
var send = require('koa-send');
var serve = require('koa-static');
var mount = require('koa-mount');
var koa = require('koa');
var app = koa();

/**
 * Expose app
 */

module.exports = app;

/**
 * Environment.
 */

var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 1337;

// middleware

if (env != 'test') app.use(logger());
app.use(responseTime());
app.use(compress());

// static files
var router = new Router();
router.get('/', function *() {
  yield send(this, 'index.html', {
    root: __dirname + '/../build'
  });
});

router.get('/api', function *() {
  yield send(this, 'index.html', {
    root: __dirname + '/../build'
  });
});

router.get('/*', function *() {
  yield send(this, this.path, {
    root: __dirname + '/../build'
  });
});

app.use(mount('', router.middleware()));

// router

// listen

app.listen(port);
console.log("Port: " + port);
console.log("Environment: " + env);