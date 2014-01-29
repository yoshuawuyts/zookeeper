'use strict';

/**
 * Module dependencies
 */

// var route = require('../server').route;
// var cwd = require('../server').cwd;
var router = require('koa-router');
var serve = require('koa-static');
var mount = require('koa-mount');
var koa = require('koa');
var route = new router();
var app = exports.app = require('../server');

/**
 * Expose route
 */

module.exports = route.middleware();

// get
route.get('/', function *() {
  app.use(serve('.'));
});

// delete
route.delete('/:taskId/delete', function *() {
  this.body = 'hello world'
});

// update
route.patch('/:taskId/update', function *() {
  this.body = 'hello world'
});

// create
route.post('/:taskId/new', function *() {
  this.body = 'Hello world'
});