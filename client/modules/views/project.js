'use strict';

/**
 * Module dependencies
 */

var menuComponent = require('./menu');

/**
 * Render
 */

module.exports = function(target) {
  React.renderComponent(template(), document.getElementById('root'));
};

/**
 * Template
 */

var template = React.createClass({

  render: function() {
    return (
      React.DOM.div( null,
        menuComponent()
      )
    );
  }
});