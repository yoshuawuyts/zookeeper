'use strict';

/**
 * Module dependencies
 */

var linkComponent = require('./item/linkComponent');
var Items = require('../../resources/item').collection;
var deleteButton = require('./item/deleteButton');
var editButton = require('./item/editButton');
var items =  new Items();

/*
 * Template
 */

module.exports = React.createClass({
  
  displayName: 'items',

  getDefaultProps: function () {
    this.props.items = items;
    items.add([
      {id: 1, name: 'hello', text: 'world'},
      {id: 2, name: 'you', text: 'world'},
      {id: 3, name: 'boats are awesome', text: 'world'}
    ]);
  },

  render: function() {

    // Create a new item for each entry
    // in the item model
    var rows = [];
    this.props.items.forEach(function(item) {
      rows.push(
        React.DOM.div({ className: 'item'},
          React.DOM.div(null, item.attributes.id),

          linkComponent({name: item.attributes.name}),

          React.DOM.div(null, item.attributes.text),
          editButton(),
          deleteButton()
        )
      );
    });

    // Return all items to be rendered
    return (React.DOM.div(null, rows));
  }
});