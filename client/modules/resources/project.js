'use strict';

/**
 * Module dependencies
 */

var ItemCollection = require('./task').collection;

/**
 * Model
 */

var ProjectModel = Backbone.Model.extend({
  sync: Backbone.localforage.sync(),
  defaults: {
    id: 0,
    name: 'Item name',
    items: new ItemCollection(),
  }
});

/**
 * Collection
 */

var ProjectCollection = Backbone.Collection.extend({
  sync: Backbone.localforage.sync('projectCollection'),
  model: ProjectModel
});

/**
 * Exports
 */

exports.collection = ProjectCollection;