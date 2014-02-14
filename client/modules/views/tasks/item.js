'use strict';

/**
 * Module dependencies
 */

var collection = require('../../resources/item').collection;
var editButton = require('./buttons/editButton');
var deleteButton = require('./buttons/deleteButton');

/*
 * Template
 */

module.exports = React.createClass({
  
  displayName: 'items',

  render: function() {

    // Create a new item for each entry
    // in the item model

    var rows = [];
    collection.forEach(function(item) {
      rows.push(
        React.DOM.div({
          className: 'item',
          children: [
            React.DOM.div(null, item.attributes.id),
            React.DOM.div(null, item.attributes.name),
            React.DOM.div(null, item.attributes.text),
            editButton(),
            deleteButton()
          ]
        })
      );
    });

    // Return all items to be rendered
    return (React.DOM.div(null, rows));
  }
});