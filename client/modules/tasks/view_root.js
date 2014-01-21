'use strict';

/**
 * Module dependencies
 */

var testComponent = require('./view_chart').testComponent;
var svgComponent = require('./view_chart').svgComponent;

/**
 * Exports
 */

var render = exports.render = function() {
  React.renderComponent(template({}), document.getElementById('root'));
};

/**
 * Template
 */

var template = React.createClass({

  render: function() {
    return (
      React.DOM.div(
        null,
        svgComponent(),
        testComponent({username: 'yoshuawuyts'})
      )
    );
  }
});