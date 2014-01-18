(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./models').CourseModel = CourseModel;
require('./models').courseModel = courseModel;

exports.CourseCollection = CourseCollection = Backbone.Collection.extend({
  model: CourseModel
});

exports.courseCollection = courseCollection = new CourseCollection([courseModel]); 
},{"./models":3}],2:[function(require,module,exports){
require('./views');
},{"./views":4}],3:[function(require,module,exports){
exports.CourseModel = CourseModel = Backbone.Model.extend({
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

exports.courseModule = courseModel = new CourseModel({
  id: 1,
  name: "why is this required?",
  institute: 1 
});
},{}],4:[function(require,module,exports){
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
},{"./collections":1}]},{},[2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9Zb3NodWEvRG9jdW1lbnRzL0dpdEh1Yi96b29rZWVwZXIvY2xpZW50L21vZHVsZXMvY29sbGVjdGlvbnMuanMiLCJDOi9Vc2Vycy9Zb3NodWEvRG9jdW1lbnRzL0dpdEh1Yi96b29rZWVwZXIvY2xpZW50L21vZHVsZXMvZmFrZV9lNzgwYmI2LmpzIiwiQzovVXNlcnMvWW9zaHVhL0RvY3VtZW50cy9HaXRIdWIvem9va2VlcGVyL2NsaWVudC9tb2R1bGVzL21vZGVscy5qcyIsIkM6L1VzZXJzL1lvc2h1YS9Eb2N1bWVudHMvR2l0SHViL3pvb2tlZXBlci9jbGllbnQvbW9kdWxlcy92aWV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL21vZGVscycpLkNvdXJzZU1vZGVsID0gQ291cnNlTW9kZWw7XHJcbnJlcXVpcmUoJy4vbW9kZWxzJykuY291cnNlTW9kZWwgPSBjb3Vyc2VNb2RlbDtcclxuXHJcbmV4cG9ydHMuQ291cnNlQ29sbGVjdGlvbiA9IENvdXJzZUNvbGxlY3Rpb24gPSBCYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XHJcbiAgbW9kZWw6IENvdXJzZU1vZGVsXHJcbn0pO1xyXG5cclxuZXhwb3J0cy5jb3Vyc2VDb2xsZWN0aW9uID0gY291cnNlQ29sbGVjdGlvbiA9IG5ldyBDb3Vyc2VDb2xsZWN0aW9uKFtjb3Vyc2VNb2RlbF0pOyAiLCJyZXF1aXJlKCcuL3ZpZXdzJyk7IiwiZXhwb3J0cy5Db3Vyc2VNb2RlbCA9IENvdXJzZU1vZGVsID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kKHtcclxuICBkZWZhdWx0czoge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgaW5zdGl0dXRlOiAwLFxyXG4gICAgZGF0ZToge1xyXG4gICAgICBzdGFydDogbmV3IERhdGUoKSxcclxuICAgICAgZW5kOiBuZXcgRGF0ZSgpXHJcbiAgICB9LCBcclxuICAgIGNyZWF0b3I6IDBcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0cy5jb3Vyc2VNb2R1bGUgPSBjb3Vyc2VNb2RlbCA9IG5ldyBDb3Vyc2VNb2RlbCh7XHJcbiAgaWQ6IDEsXHJcbiAgbmFtZTogXCJ3aHkgaXMgdGhpcyByZXF1aXJlZD9cIixcclxuICBpbnN0aXR1dGU6IDEgXHJcbn0pOyIsIi8qKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxyXG4gKi9cclxuXHJcbmNvdXJzZUNvbGxlY3Rpb24gPSByZXF1aXJlKCcuL2NvbGxlY3Rpb25zJykuY291cnNlQ29sbGVjdGlvbjtcclxuXHJcbi8qKlxyXG4gKiBFeHBvc2UgYGNvdXJzZVZpZXdgLlxyXG4gKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGNvdXJzZVZpZXc7XHJcblxyXG4vKipcclxuICogQXBwbGljYXRpb24gcHJvdG90eXBlLlxyXG4gKi9cclxuXHJcbnZhciBDb3Vyc2V2aWV3ID0gQmFja2JvbmUuVmlldy5leHRlbmQoKTtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGEgbmV3IGBDb3Vyc2VWaWV3YC5cclxuICpcclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5Db3Vyc2VWaWV3KHtcclxuICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksIFxyXG5cclxuICB0ZW1wbGF0ZTogUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiBSZWFjdC5ET00uYSh7XHJcbiAgICAgICAgaHJlZjogXCIjXCJcclxuICAgICAgfSwgY291cnNlQ29sbGVjdGlvbi5tb2RlbHNbMF0uZ2V0KFwibmFtZVwiKSk7XHJcbiAgICB9XHJcbiAgfSksXHJcblxyXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfSwgXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgUmVhY3QucmVuZGVyQ29tcG9uZW50KHRoaXMudGVtcGxhdGUoe30pLCB0aGlzLnRhcmdldCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBjb3Vyc2VWaWV3ID0gbmV3IENvdXJzZVZpZXcoe30pOyAiXX0=
