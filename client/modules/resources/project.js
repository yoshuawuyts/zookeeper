'use strict';

/**
 * Module dependencies
 */

var ItemCollection = require('./item').collection;

/**
 * Model
 */

var ProjectModel = Backbone.Model.extend({
  defaults: {
    id: 0,
    name: 'Item name',
    items: new ItemCollection()
  }
});

/**
 * Collection
 */

var ProjectCollection = Backbone.Collection.extend({
  model: ProjectModel,
  sync: Backbone.localforage.sync('MyOfflineStore')
});

/**
 * Exports
 */

exports.collection = ProjectCollection;
exports.model = ProjectModel;