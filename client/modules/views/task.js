'use strict';

/**
 * Module dependencies
 */

var menuComponent = require('./menu');
var chartComponent = require('./tasks/chart');
var itemComponent = require('./tasks/item');

/**
 * Exports
 */

module.exports = function() {
  React.renderComponent(template({}), document.getElementById('root')); 
};

/**
 * Template
 */

var template = React.createClass({

  render: function() {
    return (
      React.DOM.div( null,
        menuComponent(),
        chartComponent(),
        itemComponent()
      )
    );
  }
});