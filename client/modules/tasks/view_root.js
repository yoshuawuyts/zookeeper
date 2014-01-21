'use strict';

/**
 * Module dependencies
 */

var menuComponent = require('../view_menu').menuComponent;
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
        menuComponent(),
        svgComponent(),
        testComponent({username: 'yoshuawuyts'})
      )
    );
  }
});