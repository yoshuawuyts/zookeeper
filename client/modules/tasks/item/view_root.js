'use strict';

/**
 * Module dependencies
 */

var collection = require('../resource_item').collection;
var editButton = require('./view_editButton').component;
var deleteButton = require('./view_deleteButton').component;

/*
 * Template
 */

var items = exports.component = React.createClass({
  
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