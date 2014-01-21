'use strict';

/**
 * Module dependencies
 */

var rootView = require('./view_root.js').render;
var CourseView = require('./view_tasks.js').CourseView;

/**
 * AppRouter prototype.
 */

var Router = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    rootView()
  }
});

/**
 * Create new 'Router'
 */

var router = exports.router = new Router();