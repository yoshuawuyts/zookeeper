'use strict';

/**
 * Module dependencies
 */

var ProjectCollection = require('./resources/project').collection;
var TaskCollection = require('./resources/task').collection;
var projectView = require('./views/projects');
var taskView = require('./views/tasks');

/**
 * Router
 */

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    ':task': 'task'
  },
  home: function() {projectView(new ProjectCollection());},
  task: function() {taskView(new TaskCollection());}
});

var router = new Router();

/**
 * Options
 */

localforage.setDriver('asyncStorage');

Backbone.history.start({
  pushState: true
});