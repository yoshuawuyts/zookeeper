'use strict';

/**
 * Module dependencies.
 */

var courseCollection = require('./collections').courseCollection;

/**
 * Expose `courseView`.
 */

var courseView = new CourseView({});

/**
 * Application prototype.
 */

var CourseView = Backbone.View.extend({
  target: document.getElementById('root'), 

  template: React.createClass({
    render: function () {
      return React.DOM.a({
        href: "#"
      }, courseCollection.models[0].get("name"));
    }
  }),

  initialize: function () {
    this.render();
  }, 

  render: function () {
    React.renderComponent(this.template({}), this.target);

    return this;
  }
});

module.exports = exports = courseView;