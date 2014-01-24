'use strict';

/**
 * Module dependencies
 */

var taskText = require('./view_taskText').component;
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
    TASKS.forEach(function(task) {
      rows.push(
        React.DOM.div({
          className: 'item'
        },
          React.DOM.div(null, task.key),
          React.DOM.div(null, task.name),
          React.DOM.div(null, task.text),
          editButton(),
          deleteButton()
        )
      );
    });

    // Return all items to be rendered
    return (React.DOM.div(null, rows));
  }
});

var TASKS = [
  {key: '1', name: 'Sporting Goods', text: 'Lorem Ipsum', completed: false},
  {key: '2', name: 'hercule sporty', text: 'Dolor sit a', completed: false}
];