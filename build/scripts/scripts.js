(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var CourseModel = require('./models').CourseModel;
var courseModel = require('./models').courseModel;

var CourseCollection = exports.CourseCollection = Backbone.Collection.extend({
  model: CourseModel
});

var courseCollection = exports.courseCollection = new CourseCollection([courseModel]);
},{"./models":3}],2:[function(require,module,exports){
require('./views');
},{"./views":4}],3:[function(require,module,exports){
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
  name: "why is this not workingasdfasdf",
  institute: 1 
});
},{}],4:[function(require,module,exports){
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
},{"./collections":1}]},{},[2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9Zb3NodWEvRG9jdW1lbnRzL0dpdEh1Yi96b29rZWVwZXIvY2xpZW50L21vZHVsZXMvY29sbGVjdGlvbnMuanMiLCJDOi9Vc2Vycy9Zb3NodWEvRG9jdW1lbnRzL0dpdEh1Yi96b29rZWVwZXIvY2xpZW50L21vZHVsZXMvZmFrZV9iZWRmMTFlYS5qcyIsIkM6L1VzZXJzL1lvc2h1YS9Eb2N1bWVudHMvR2l0SHViL3pvb2tlZXBlci9jbGllbnQvbW9kdWxlcy9tb2RlbHMuanMiLCJDOi9Vc2Vycy9Zb3NodWEvRG9jdW1lbnRzL0dpdEh1Yi96b29rZWVwZXIvY2xpZW50L21vZHVsZXMvdmlld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvdXJzZU1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbHMnKS5Db3Vyc2VNb2RlbDtcclxudmFyIGNvdXJzZU1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbHMnKS5jb3Vyc2VNb2RlbDtcclxuXHJcbnZhciBDb3Vyc2VDb2xsZWN0aW9uID0gZXhwb3J0cy5Db3Vyc2VDb2xsZWN0aW9uID0gQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xyXG4gIG1vZGVsOiBDb3Vyc2VNb2RlbFxyXG59KTtcclxuXHJcbnZhciBjb3Vyc2VDb2xsZWN0aW9uID0gZXhwb3J0cy5jb3Vyc2VDb2xsZWN0aW9uID0gbmV3IENvdXJzZUNvbGxlY3Rpb24oW2NvdXJzZU1vZGVsXSk7IiwicmVxdWlyZSgnLi92aWV3cycpOyIsInZhciBDb3Vyc2VNb2RlbCA9IG1vZHVsZS5leHBvcnRzLkNvdXJzZU1vZGVsID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kKHtcclxuICBkZWZhdWx0czoge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgaW5zdGl0dXRlOiAwLFxyXG4gICAgZGF0ZToge1xyXG4gICAgICBzdGFydDogbmV3IERhdGUoKSxcclxuICAgICAgZW5kOiBuZXcgRGF0ZSgpXHJcbiAgICB9LCBcclxuICAgIGNyZWF0b3I6IDBcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIGNvdXJzZU1vZGVsID0gZXhwb3J0cy5jb3Vyc2VNb2R1bGUgPSBuZXcgQ291cnNlTW9kZWwoe1xyXG4gIGlkOiAxLFxyXG4gIG5hbWU6IFwid2h5IGlzIHRoaXMgbm90IHdvcmtpbmdhc2RmYXNkZlwiLFxyXG4gIGluc3RpdHV0ZTogMSBcclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXHJcbiAqL1xyXG5cclxudmFyIGNvdXJzZUNvbGxlY3Rpb24gPSByZXF1aXJlKCcuL2NvbGxlY3Rpb25zJykuY291cnNlQ29sbGVjdGlvbjtcclxuXHJcbi8qKlxyXG4gKiBFeHBvc2UgYGNvdXJzZVZpZXdgLlxyXG4gKi9cclxuXHJcbnZhciBjb3Vyc2VWaWV3ID0gbmV3IENvdXJzZVZpZXcoe30pO1xyXG5cclxuLyoqXHJcbiAqIEFwcGxpY2F0aW9uIHByb3RvdHlwZS5cclxuICovXHJcblxyXG52YXIgQ291cnNlVmlldyA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcclxuICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksIFxyXG5cclxuICB0ZW1wbGF0ZTogUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiBSZWFjdC5ET00uYSh7XHJcbiAgICAgICAgaHJlZjogXCIjXCJcclxuICAgICAgfSwgY291cnNlQ29sbGVjdGlvbi5tb2RlbHNbMF0uZ2V0KFwibmFtZVwiKSk7XHJcbiAgICB9XHJcbiAgfSksXHJcblxyXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfSwgXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgUmVhY3QucmVuZGVyQ29tcG9uZW50KHRoaXMudGVtcGxhdGUoe30pLCB0aGlzLnRhcmdldCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGNvdXJzZVZpZXc7Il19
