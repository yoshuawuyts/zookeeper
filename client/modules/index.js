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
    '': 'home',
    ':task': 'project'
  },
  home: function() { projectView();},
  project: function(){ taskView();}
});

var router = new Router();

/**
 * Options
 */

Backbone.history.start({
  pushState: true
});