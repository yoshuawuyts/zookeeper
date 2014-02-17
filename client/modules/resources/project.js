'use strict';

/**
 * Module dependencies
 */

var ItemCollection = require('./item').collection;

/**
 * Exports
 */

exports.collection = ProjectCollection;
exports.model = ProjectModel;

/**
 * Model
 */

var ProjectModel = Backbone.Model.extend({
  defaults: {
    id: 0,
    name: 'Item name',
    urlRoot: '/collections',
    items: new ItemCollection()
  }
});

/**
 * Collection
 */

var ProjectCollection = Backbone.Collection.extend({
  model: ProjectModel,
  url: '/collections'
});