'use strict';

var CourseModel = require('./models.js').CourseModel;
var courseModel = require('./models.js').courseModel;

var CourseCollection = exports.CourseCollection = Backbone.Collection.extend({
  model: CourseModel
});

var courseCollection = exports.courseCollection = new CourseCollection([courseModel]);
