'use strict';

/**
 * Model
 */

var ItemModel = Backbone.Model.extend({
  defaults: {
    id: 0,
    name: "Item name",
    text: "Input text...",
    completed: false
  }
});

/**
 * Collection
 */

var ItemCollection = Backbone.Collection.extend({
  model: ItemModel
});

/**
 * Exports
 */

exports.collection = ItemCollection;
exports.model = ItemModel;