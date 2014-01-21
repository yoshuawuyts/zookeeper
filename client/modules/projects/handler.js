'use strict';

/**
 * Module dependencies
 */

var CourseView = require('./view_home.js').CourseView;

/**
 * AppRouter prototype.
 */

var Router = Backbone.Router.extend({
  routes: {
    ':project': 'project'
  },

  project: function(){}
});

/**
 * Create new 'Router'
 */

var router = exports.router = new Router();