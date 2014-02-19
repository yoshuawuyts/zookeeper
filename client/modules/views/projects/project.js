'use strict';

/**
 * Module dependencies
 */

var nameComponent = require('./item/item');

/*
 * Template
 */

module.exports = React.createClass({
  
  displayName: 'projects',

  render: function() {
    // Create a new item for each entry
    var rows = [];
    this.props.projects.forEach(function(item) {
      rows.push(
        React.DOM.div({ className: 'item'},
          React.DOM.div(null, item.attributes.id),
          nameComponent({name: item.attributes.name}),
          React.DOM.div(null, item.attributes.text)
        )
      );
    });

    // Return all projects to be rendered
    return (React.DOM.div(null, rows));
  }
});