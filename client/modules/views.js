'use strict';

var CourseModel = module.exports.CourseModel = Backbone.Model.extend({
  defaults: {
    id: 0,
    name: "",
    institute: 0,
    date: {
      start: new Date(),
      end: new Date()
    }, 
    creator: 0
  }
});

var courseModel = exports.courseModule = new CourseModel({
  id: 1,
  name: "why is this not working", 
  institute: 1 
});





var CourseCollection = Backbone.Collection.extend({
  model: CourseModel
});

var courseCollection = exports.courseCollection = new CourseCollection([courseModel]);






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

/**
 * Expose `courseView`.
 */

var courseView = new CourseView({});