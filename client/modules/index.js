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
    '12': 'task'
  },
  home: function() { projectView(); console.log('home')},
  project: function(){ taskView(); console.log('project')}
});

var router = new Router();

/**
 * Options
 */

Backbone.history.start({
  pushState: true
});