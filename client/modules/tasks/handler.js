'use strict';

/**
 * Module dependencies
 */

var CourseView = require('./views.js').CourseView;

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
  },
  project: function() {
    // var projectView = new ProjectView({});
  }
});

/**
 * Create new 'Router'
 */

var router = exports.router = new Router();