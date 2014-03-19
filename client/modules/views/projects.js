'use strict';

/**
 * Module dependencies
 */

var itemListComponent = require('./projects/projectList');
var inputComponent = require('./projects/input');
var menuComponent = require('./menu');

/**
 * Render
 */

module.exports = function(projectCollection) {
  React.renderComponent(template({projectCollection: projectCollection}), document.getElementById('root'));
};

/**
 * Template
 */

var template = React.createClass({

  componentDidMount: function() {
    this.props.projectCollection.fetch();
    this.props.projectCollection.on('add remove change', this.forceUpdate.bind(this, null));
  },

  handleRemove: function(id) {
    this.props.projectCollection.remove(id);
    this.props.projectCollection.sync();
  },

  render: function() {
    return (
      React.DOM.div( null,
        menuComponent(),
        React.DOM.h1(null, 'Projects overview'),
        inputComponent({projectCollection: this.props.projectCollection}),
        itemListComponent({projectCollection: this.props.projectCollection, reportRemove: this.handleRemove})
      )
    );
  }
});