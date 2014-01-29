'use strict';

/**
 * Module dependencies
 */

var menuComponent = require('../menu/handler').component;
var svgComponent = require('./chart/handler').component;
var itemComponent = require('./item/handler').component;

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
        itemComponent()
      )
    );
  }
});
