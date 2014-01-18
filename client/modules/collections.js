require('./models').CourseModel = CourseModel;
require('./models').courseModel = courseModel;

exports.CourseCollection = CourseCollection = Backbone.Collection.extend({
  model: CourseModel
});

exports.courseCollection = courseCollection = new CourseCollection([courseModel]);  