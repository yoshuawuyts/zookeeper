'use strict';

var ItemModel = module.exports.Model = Backbone.Model.extend({
  defaults: {
    key: 0,
    name: "",
    text: "",
    completed: false
  }
});

var itemModel = exports.model = new CourseModel({
  id: 1,
  name: "Test item",
  text: "lorem ipsum",
  completed: false
});