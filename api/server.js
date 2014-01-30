'use strict';

/**
* Module dependencies
*/

var responseTime = require('koa-response-time');
var ratelimit = require('koa-ratelimit');
var tasks = require('./tasks/handler');
var compress = require('koa-compress');
var logger = require('koa-logger');
var router = require('koa-router');
var serve = require('koa-static');
var mount = require('koa-mount');
var route = require('koa-route');
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

// database

var db = exports.db = [];

// middleware

if ('test' != env) app.use(logger());
app.use(responseTime());
app.use(compress());

// routing

var router2 = new router;
router2.get('/', function *() {
  app.use(serve('.'));
});

app.use(mount('/', router2.middleware()));

// listen

app.listen(port);
console.log('listening on port ' + port);