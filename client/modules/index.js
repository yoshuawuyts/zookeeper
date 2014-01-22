'use strict';

/**
 * Module dependencies
 */

var Tasks = require('./tasks/handler').router;
var Projects = require('./projects/handler').router;

/**
 * Init routers
 */

var tasks = new Tasks();
var projects = new Projects();

/**
 * Options
 */

Backbone.history.start({
  pushState: true
});