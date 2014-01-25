'use strict';

/**
 * Module dependencies
 */

var rootView = require('./view_root.js').render;
var itemCollection = require('./resource_item').collection;

/**
 * Exports
 */

exports.collection = itemCollection;

/**
 * Exports
 */

var Router = exports.router = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    rootView();
  }
});