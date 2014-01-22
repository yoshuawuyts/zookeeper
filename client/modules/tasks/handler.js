'use strict';

/**
 * Module dependencies
 */

var rootView = require('./view_root.js').render;

/**
 * Exports
 * @exportProps: router
 */

var Router = exports.router = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    console.log('TASKS VIEW');
    rootView();
  }
});
