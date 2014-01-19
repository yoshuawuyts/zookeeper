(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./views');   
},{"./views":2}],2:[function(require,module,exports){
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
},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9Zb3NodWEvRG9jdW1lbnRzL0dpdEh1Yi96b29rZWVwZXIvY2xpZW50L21vZHVsZXMvZmFrZV9jNDE5MDYyZC5qcyIsIkM6L1VzZXJzL1lvc2h1YS9Eb2N1bWVudHMvR2l0SHViL3pvb2tlZXBlci9jbGllbnQvbW9kdWxlcy92aWV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL3ZpZXdzJyk7ICAgIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIENvdXJzZU1vZGVsID0gbW9kdWxlLmV4cG9ydHMuQ291cnNlTW9kZWwgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQoe1xyXG4gIGRlZmF1bHRzOiB7XHJcbiAgICBpZDogMCxcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBpbnN0aXR1dGU6IDAsXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICBlbmQ6IG5ldyBEYXRlKClcclxuICAgIH0sIFxyXG4gICAgY3JlYXRvcjogMFxyXG4gIH1cclxufSk7XHJcblxyXG52YXIgY291cnNlTW9kZWwgPSBleHBvcnRzLmNvdXJzZU1vZHVsZSA9IG5ldyBDb3Vyc2VNb2RlbCh7XHJcbiAgaWQ6IDEsXHJcbiAgbmFtZTogXCJ3aHkgaXMgdGhpcyBub3Qgd29ya2luZ1wiLCBcclxuICBpbnN0aXR1dGU6IDEgXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciBDb3Vyc2VDb2xsZWN0aW9uID0gQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xyXG4gIG1vZGVsOiBDb3Vyc2VNb2RlbFxyXG59KTtcclxuXHJcbnZhciBjb3Vyc2VDb2xsZWN0aW9uID0gZXhwb3J0cy5jb3Vyc2VDb2xsZWN0aW9uID0gbmV3IENvdXJzZUNvbGxlY3Rpb24oW2NvdXJzZU1vZGVsXSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBcHBsaWNhdGlvbiBwcm90b3R5cGUuXHJcbiAqL1xyXG5cclxudmFyIENvdXJzZVZpZXcgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XHJcbiAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLCBcclxuXHJcbiAgdGVtcGxhdGU6IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gUmVhY3QuRE9NLmEoe1xyXG4gICAgICAgIGhyZWY6IFwiI1wiXHJcbiAgICAgIH0sIGNvdXJzZUNvbGxlY3Rpb24ubW9kZWxzWzBdLmdldChcIm5hbWVcIikpO1xyXG4gICAgfVxyXG4gIH0pLFxyXG5cclxuICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH0sIFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgIFJlYWN0LnJlbmRlckNvbXBvbmVudCh0aGlzLnRlbXBsYXRlKHt9KSwgdGhpcy50YXJnZXQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKipcclxuICogRXhwb3NlIGBjb3Vyc2VWaWV3YC5cclxuICovXHJcblxyXG52YXIgY291cnNlVmlldyA9IG5ldyBDb3Vyc2VWaWV3KHt9KTsiXX0=
