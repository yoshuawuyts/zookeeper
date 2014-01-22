'use strict';

/**
 * Module dependencies
 */

var rootView = require('./view_root.js').render;

/**
 * AppRouter prototype.
 */

var Router = exports.router = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    console.log('IM HOME BABY');
    rootView();
  }
});