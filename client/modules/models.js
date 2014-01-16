module.exports = var CourseModel = Backbone.Model.extend({
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

  var courseModel = new CourseModel({
    id: 1,
    name: "Introduction To Programming",
    institute: 1 
  });

}