'use strict';

/**
 * Module dependencies
 */

require('./tasks/handler');
require('./projects/handler');

/**
 * Options
 */

Backbone.history.start({
  pushState: true
});