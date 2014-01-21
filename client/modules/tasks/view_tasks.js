'use strict';

/**
 * Module dependencies
 */

var courseCollection = require('./resource_collections').courseCollection;

/**
 * Application prototype.
 */

var CourseView = exports.CourseView = Backbone.View.extend({
  
  // Set initialize sequence
  initialize: function() {
    this.render();
  },
  target: document.getElementById('root'),
  render: function() {
    React.renderComponent(this.template({}), this.target);
    return this;
  },

  // Template
  template: React.createClass({

    handleSubmit: function() {
      event.preventDefault();
    },

    render: function() {
      return (
        React.DOM.a({
          href: '/12',
          onClick: this.handleSubmit
        }, courseCollection.models[0].get("name"))
      )
    }
  })

});