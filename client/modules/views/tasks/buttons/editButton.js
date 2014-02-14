'use strict';

module.exports = React.createClass({
  displayName: 'editButton',

  clickAction: function() {
    //event.preventDefault();
    // handle edit action
  },

  render: function() {
    return (
      React.DOM.button({
        className: 'editButton size1of8',
        onClick: this.clickAction()
      }, 'edit')
    );
  }
});