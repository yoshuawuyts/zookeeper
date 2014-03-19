'use strict';

/**
 * Module dependencies
 */

var inputComponent = require('./tasks/input');
var itemComponent = require('./tasks/item');
var menuComponent = require('./menu');

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

  componentHasMounted: function() {
    this.props.itemCollection.sync();
  },

  render: function() {
    return (
      React.DOM.div( null,
        menuComponent(),
        inputComponent({itemCollection: this.props.itemCollection}),
        React.DOM.h1(null, 'Task view'),
        itemComponent({itemCollection: this.props.itemCollection})
      )
    );
  }
});