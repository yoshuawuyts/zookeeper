'use strict';

/**
 * Model
 */

var ItemModel = Backbone.Model.extend({
  sync: Backbone.localforage.sync(),
  defaults: {
    name: "Item name",
    text: "Input text...",
    completed: false
  }
});

/**
 * Collection
 */

var ItemCollection = Backbone.Collection.extend({
  model: ItemModel,
  sync: Backbone.localforage.sync('itemCollection')
});

/**
 * Exports
 */

exports.collection = ItemCollection;