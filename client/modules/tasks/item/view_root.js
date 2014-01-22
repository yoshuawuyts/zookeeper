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

var taskItem = exports.component = React.createClass({
  
  displayName: 'taskItem',

  render: function() {
    return (
      React.DOM.div({
        className: 'taskItem row',
        children: [
          taskText(),
          editButton(),
          deleteButton()
        ]
      })
    );
  }
});