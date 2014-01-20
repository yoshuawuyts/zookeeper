'use strict';

/**
 * Module dependencies
 */

var courseCollection = require('./collections').courseCollection;

/**
 * Application prototype.
 */

var CourseView = exports.CourseView = Backbone.View.extend({
  parent: document.getElementById('root'),

  template: React.createClass({
    render: function() {
      return React.DOM.a({
        href: "/12"
      }, courseCollection.models[0].get("name"));
    }
  }),

  initialize: function() {
    this.render();
  },

  render: function() {
    React.renderComponent(this.template({}), this.parent);

    return this;
  }
});