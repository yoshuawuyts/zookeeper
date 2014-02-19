'use strict';

/**
 * Module dependencies
 */

var linkComponent = require('./item/linkComponent');
var deleteButton = require('./item/deleteButton');
var editButton = require('./item/editButton');

/*
 * Template
 */
module.exports = React.createClass({

  
  displayName: 'items',

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