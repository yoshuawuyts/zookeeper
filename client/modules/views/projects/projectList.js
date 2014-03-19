'use strict';

/**
 * Module dependencies
 */

var nameComponent = require('./project/name');
var deleteComponent = require('./project/deleteButton');

/*
 * Template
 */

module.exports = React.createClass({
  
  displayName: 'projects',

  handleClick: function (itemId) {
    if (this.isMounted()) this.props.projectCollection.remove(this.props.projectCollection.get(itemId));
  },

  rows: function() {
    var rows = [];
    this.props.projectCollection.forEach(function(item) {
      rows.push(
        React.DOM.div({ className: 'item'},
          nameComponent({name: item.attributes.name}),
          React.DOM.button({onClick: this.props.reportRemove.bind(this, item.attributes.id)}, 'delete')
        )
      );
    }.bind(this));

    return rows;
  },

  render: function() {
    // Return all projects to be rendered
    if (this.props.projectCollection.length) return React.DOM.div(null, this.rows());
    return React.DOM.div(null, 'No items to display.');
  }
});