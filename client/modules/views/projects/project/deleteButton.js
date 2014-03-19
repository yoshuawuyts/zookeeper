'use strict';

/**
 * Delete button
 *
 * When pressed deletes the corresponding project
 *
 * @props {object} projectCollection
 * @props {object} itemId
 */

module.exports = React.createClass({
  displayName: 'delete project button',

  clickHandler: function(name) {
    console.log.bind(this.props.itemCollection);
    this.props.projectCollection.get(this.props.itemId).destroy();
  },

  render: function() {
    console.log(this.props.projectCollection.get(this.props.itemId));
    return (
      // Render 'a' with name + url
      React.DOM.button({onClick: this.clickHandler.bind(this)}, 'delete')
    );
  }
});