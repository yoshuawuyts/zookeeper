'use strict';

var CourseModel = require('./resource_models.js').CourseModel;
var courseModel = require('./resource_models.js').courseModel;

var CourseCollection = exports.CourseCollection = Backbone.Collection.extend({
  model: CourseModel
});

var courseCollection = exports.courseCollection = new CourseCollection([courseModel]);
