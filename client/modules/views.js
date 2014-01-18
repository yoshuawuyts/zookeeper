/**
 * Module dependencies.
 */

courseCollection = require('./collections').courseCollection;

/**
 * Expose `courseView`.
 */

module.exports = exports = courseView;

/**
 * Application prototype.
 */

var Courseview = Backbone.View.extend();

/**
 * Initialize a new `CourseView`.
 *
 * @api public
 */

CourseView({
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

var courseView = new CourseView({}); 