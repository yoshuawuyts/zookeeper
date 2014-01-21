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
    '': 'home',
    '/12': 'project'
  },

  home: function() {
    console.log('IM HOME BABY')
    rootView();
  },

  project: function() {
    console.log('ROUTE SWITCHEROO');
  }
});

/**
 * Create & expose 'router'
 */


var router = exports.router = new Router();
console.log(router);
