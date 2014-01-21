'use strict';

/**
 * Module dependencies
 */

var rootView = require('./view_home.js').rootView;

/**
 * AppRouter prototype.
 */

var Router = Backbone.Router.extend({
  routes: {
   
  },

  project: function(){
    console.log('I CHANGED ROUTES');
    rootView();
  }
});

/**
 * Create new 'Router'
 */

var router = exports.router = new Router();