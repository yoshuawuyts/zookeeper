'use strict';

/**
 * Module dependencies
 */

var CourseView = require('./view_tasks.js').CourseView;

/**
 * AppRouter prototype.
 */

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    ':project': 'project'
  },

  home: function() {
    var courseView = new CourseView({});
  }
});

/**
 * Create new 'Router'
 */

var router = exports.router = new Router();