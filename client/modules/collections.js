var CourseModel = require('./models').CourseModel;
var courseModel = require('./models').courseModel;

var CourseCollection = Backbone.Collection.extend({
  model: CourseModel
});

var courseCollection = exports.courseCollection = new CourseCollection([courseModel]);

console.log(courseCollection);