'use strict';

/**
 * Module dependencies
 */

var ProjectsCollection = require('../resources/project').collection;
var projectComponent = require('./projects/project');
var projectsCollection = new ProjectsCollection();
var menuComponent = require('./menu');

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
    this.props.projects = projectsCollection;
    projectsCollection.add([{
      id: 0,
      name: 'collection'
    }]);
    projectsCollection.fetch();
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