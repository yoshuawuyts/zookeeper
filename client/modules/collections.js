var Coursemodel = require('./models');

var CourseCollection = Backbone.Collection.extend({
  model: CourseModel
});

var courseCollection = new CourseCollection([courseModel]);