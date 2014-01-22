'use strict';

var homeButton = exports.component = React.createClass({
  displayName: 'homeButton',

  clickHandler: function() {
    event.preventDefault();
    Backbone.history.navigate('/12', true);
  },

  render: function() {
    return (
      React.DOM.a({
        href: '/12',
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