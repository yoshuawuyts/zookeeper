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