'use strict';

var ItemModel = require('./resource_models.js').Model;
var itemModel = require('./resource_models.js').model;

var CourseCollection = exports.Collection = Backbone.Collection.extend({
  model: ItemModel
});

var courseCollection = exports.collection = new CourseCollection([itemModel]);
