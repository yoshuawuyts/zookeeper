'use strict';

/**
 * Module dependencies
 */

var Projects = require('../resources/project').collection;
var projectComponent = require('./projects/project');
var menuComponent = require('./menu');
var projects = new Projects();

/**
 * Render
 */

module.exports = function(target) {
  React.renderComponent(template(), document.getElementById('root'));
};

/**
 * Template
 */

var template = React.createClass({

  getDefaultProps: function () {
    this.props.projects = projects;
    projects.add([{
      id: 0,
      name: 'Item name',
      urlRoot: '/collections'
    }]);
  },

  render: function() {
    return (
      React.DOM.div( null,
        menuComponent(),
        React.DOM.h1(null, 'Projects overview'),
        projectComponent({projects: this.props.projects})
      )
    );
  }
});