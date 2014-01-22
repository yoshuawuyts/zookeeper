'use strict';

var CourseModel = module.exports.Model = Backbone.Model.extend({
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

var courseModel = exports.model = new CourseModel({
  id: 1,
  name: "why is this not working",
  institute: 1
});