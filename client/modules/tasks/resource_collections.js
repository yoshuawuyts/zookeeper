'use strict';

var CourseModel = require('./resource_models.js').Model;
var courseModel = require('./resource_models.js').model;

var CourseCollection = exports.Collection = Backbone.Collection.extend({
  model: CourseModel
});

var courseCollection = exports.collection = new CourseCollection([courseModel]);
