'use strict';

/**
 * Module dependencies
 */

var menuComponent = require('../menu/handler.js').component;

/**
 * Exports
 * @exportProps: render
 * @method: render
 * @params: {target}
 */

var render = exports.render = function(target) {
  React.renderComponent(template({}), document.getElementById(target));
};

/**
 * Template
 */

var template = React.createClass({

  render: function() {
    return (
      React.DOM.div(
        null,
        menuComponent()
      )
    );
  }
});