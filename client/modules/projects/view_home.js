'use strict';

/**
 * Module dependencies
 */

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
        null
      )
    );
  }
});