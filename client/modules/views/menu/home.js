'use strict';

module.exports = React.createClass({
  displayName: 'homeButton',

  clickHandler: function() {
    event.preventDefault();
    Backbone.history.navigate('/', true);
  },

  render: function() {
    return (
      React.DOM.a({
        href: '/',
        className: 'size1of8',
        children: [
          React.DOM.button({
            onClick: this.clickHandler
          }, 'HOME BUTTON')
        ]
      })
    )
  }
});