'use strict';

/**
 * Module dependencies
 */

require('./tasks/handler');
require('./projects/handler');

/**
 * Options
 */

// Remove '/#/' from routes
Backbone.history.start({
  pushState: true
});