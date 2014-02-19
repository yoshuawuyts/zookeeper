'use strict';

/**
 * Module dependencies
 */

var Items = require('../resources/item').collection;
var chartComponent = require('./tasks/chart');
var itemComponent = require('./tasks/item');
var menuComponent = require('./menu');
var items =  new Items();

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

  getDefaultProps: function () {
    this.props.items = items;
    items.add([
      {id: 1, name: 'hello', text: 'world'},
      {id: 2, name: 'you', text: 'world'},
      {id: 3, name: 'boats are awesome', text: 'world'}
    ]);
  },

  render: function() {
    return (
      React.DOM.div( null,
        menuComponent(),
        React.DOM.h1(null, 'Task view'),
        itemComponent({items: this.props.items})
      )
    );
  }
});