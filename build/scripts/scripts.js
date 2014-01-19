(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var CourseModel = require('./models.js').CourseModel;
var courseModel = require('./models.js').courseModel;

var CourseCollection = exports.CourseCollection = Backbone.Collection.extend({
  model: CourseModel
});

var courseCollection = exports.courseCollection = new CourseCollection([courseModel]);

},{"./models.js":3}],2:[function(require,module,exports){
require('./views');
},{"./views":4}],3:[function(require,module,exports){
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

var courseModel = exports.courseModel = new CourseModel({
  id: 1,
  name: "why is this not working",
  institute: 1
});
},{}],4:[function(require,module,exports){
'use strict';

var courseCollection = require('./collections').courseCollection;

/**
 * Application prototype.
 */

var CourseView = Backbone.View.extend({
  target: document.getElementById('root'),

  template: React.createClass({
    render: function() {
      return React.DOM.a({
        href: "#"
      }, courseCollection.models[0].get("name"));
    }
  }),

  initialize: function() {
    this.render();
  },

  render: function() {
    React.renderComponent(this.template({}), this.target);

    return this;
  }
});

/**
 * Expose `courseView`.
 */

var courseView = new CourseView({});
},{"./collections":1}]},{},[2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9Zb3NodWEvRG9jdW1lbnRzL0dpdEh1Yi96b29rZWVwZXIvY2xpZW50L21vZHVsZXMvY29sbGVjdGlvbnMuanMiLCJDOi9Vc2Vycy9Zb3NodWEvRG9jdW1lbnRzL0dpdEh1Yi96b29rZWVwZXIvY2xpZW50L21vZHVsZXMvZmFrZV9kN2EzMzMxNi5qcyIsIkM6L1VzZXJzL1lvc2h1YS9Eb2N1bWVudHMvR2l0SHViL3pvb2tlZXBlci9jbGllbnQvbW9kdWxlcy9tb2RlbHMuanMiLCJDOi9Vc2Vycy9Zb3NodWEvRG9jdW1lbnRzL0dpdEh1Yi96b29rZWVwZXIvY2xpZW50L21vZHVsZXMvdmlld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBDb3Vyc2VNb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWxzLmpzJykuQ291cnNlTW9kZWw7XHJcbnZhciBjb3Vyc2VNb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWxzLmpzJykuY291cnNlTW9kZWw7XHJcblxyXG52YXIgQ291cnNlQ29sbGVjdGlvbiA9IGV4cG9ydHMuQ291cnNlQ29sbGVjdGlvbiA9IEJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcclxuICBtb2RlbDogQ291cnNlTW9kZWxcbn0pO1xyXG5cclxudmFyIGNvdXJzZUNvbGxlY3Rpb24gPSBleHBvcnRzLmNvdXJzZUNvbGxlY3Rpb24gPSBuZXcgQ291cnNlQ29sbGVjdGlvbihbY291cnNlTW9kZWxdKTtcclxuIiwicmVxdWlyZSgnLi92aWV3cycpOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBDb3Vyc2VNb2RlbCA9IG1vZHVsZS5leHBvcnRzLkNvdXJzZU1vZGVsID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kKHtcclxuICBkZWZhdWx0czoge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgaW5zdGl0dXRlOiAwLFxyXG4gICAgZGF0ZToge1xyXG4gICAgICBzdGFydDogbmV3IERhdGUoKSxcclxuICAgICAgZW5kOiBuZXcgRGF0ZSgpXG4gICAgfSxcclxuICAgIGNyZWF0b3I6IDBcbiAgfVxufSk7XHJcblxyXG52YXIgY291cnNlTW9kZWwgPSBleHBvcnRzLmNvdXJzZU1vZGVsID0gbmV3IENvdXJzZU1vZGVsKHtcclxuICBpZDogMSxcclxuICBuYW1lOiBcIndoeSBpcyB0aGlzIG5vdCB3b3JraW5nXCIsXHJcbiAgaW5zdGl0dXRlOiAxXG59KTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgY291cnNlQ29sbGVjdGlvbiA9IHJlcXVpcmUoJy4vY29sbGVjdGlvbnMnKS5jb3Vyc2VDb2xsZWN0aW9uO1xyXG5cclxuLyoqXHJcbiAqIEFwcGxpY2F0aW9uIHByb3RvdHlwZS5cclxuICovXHJcblxyXG52YXIgQ291cnNlVmlldyA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcclxuICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksXHJcblxyXG4gIHRlbXBsYXRlOiBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gUmVhY3QuRE9NLmEoe1xyXG4gICAgICAgIGhyZWY6IFwiI1wiXG4gICAgICB9LCBjb3Vyc2VDb2xsZWN0aW9uLm1vZGVsc1swXS5nZXQoXCJuYW1lXCIpKTtcclxuICAgIH1cbiAgfSksXHJcblxyXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9LFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgUmVhY3QucmVuZGVyQ29tcG9uZW50KHRoaXMudGVtcGxhdGUoe30pLCB0aGlzLnRhcmdldCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxufSk7XHJcblxyXG4vKipcclxuICogRXhwb3NlIGBjb3Vyc2VWaWV3YC5cclxuICovXHJcblxyXG52YXIgY291cnNlVmlldyA9IG5ldyBDb3Vyc2VWaWV3KHt9KTsiXX0=
