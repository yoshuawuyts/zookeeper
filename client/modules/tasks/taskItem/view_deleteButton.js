'use strict';

var deleteButton = exports.component = React.createClass({
  displayName: 'deleteButton',

  clickAction: function() {
    //event.preventDefault();
    // handle delete action
  },

  render: function() {
    return (
      React.DOM.button({
        className: 'deleteButton size1of8',
        onClick: this.clickAction()
      }, 'delete')
    );
  }
});