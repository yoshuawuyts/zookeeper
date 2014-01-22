'use strict';

/**
 * Module dependencies
 */

var rootView = require('./view_home.js').render;

/**
 * AppRouter prototype.
 */

var Router = exports.router = Backbone.Router.extend({
  routes: {
    '12': 'project'
  },

  project: function(){
    console.log('I CHANGED ROUTES');
    rootView();
  }
});