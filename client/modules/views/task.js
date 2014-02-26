'use strict';

/**
 * Module dependencies
 */

var ItemCollection = require('../resources/item').collection;
var inputComponent = require('./tasks/input');
var itemComponent = require('./tasks/item');
var menuComponent = require('./menu');
var itemCollection =  new ItemCollection();

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
    this.props.itemCollection = itemCollection;
    itemCollection.create([
      {id: 1, name: 'hello', text: 'world'},
      {id: 2, name: 'you', text: 'world'},
      {id: 3, name: 'boats are awesome', text: 'world'}
    ]);
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