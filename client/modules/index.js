'use strict';

/**
 * Module dependencies
 */

var projectView = require('./views/project');
var taskView = require('./views/task');

/**
 * Router
 */

var Router = Backbone.Router.extend({
  routes: {
    '': 'project',
    ':task': 'task'
  },
  home: function() { projectView(); console.log('project');},
  project: function(){ taskView(); console.log('task');}
});

var router = new Router();

/**
 * Options
 */

Backbone.history.start({
  pushState: true
});