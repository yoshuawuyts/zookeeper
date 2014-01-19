var CourseModel = require('./models').CourseModel;
var courseModel = require('./models').courseModel;

var CourseCollection = exports.CourseCollection = Backbone.Collection.extend({
  model: CourseModel
});

var courseCollection = exports.courseCollection = new CourseCollection([courseModel]);