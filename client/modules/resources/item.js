'use strict';

/**
 * Prototype Model
 */

var ItemModel = module.exports.model = Backbone.Model.extend({
  defaults: {
    id: 0,
    name: "Item name",
    text: "Input text...",
    completed: false
  }
});

/**
 * Prototype Collection
 */

var ItemCollection = Backbone.Collection.extend({
  model: ItemModel
});

/**
 * Exports
 */

var itemCollection = exports.collection = new ItemCollection([]);

/**
 * Add content
 */

itemCollection.add({id: '1', name: 'Sporting Goods', text: 'Lorem Ipsum', completed: false});

// GET content from server