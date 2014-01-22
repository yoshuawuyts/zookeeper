'use strict';

/**
 * Exports
 */


var menuComponent = exports.menuComponent = React.createClass({
  displayName: 'ProfilePic',
  render: function() {
    return (
      React.DOM.menu(
        null,
        homeButton()
      )
    )
  }
});

var homeButton = React.createClass({
  displayName: 'homeButton',

  clickHandler: function() {
    event.preventDefault();
    Backbone.history.navigate('/12', true);
  },

  render: function() {
    return (
      React.DOM.a({
        href: '/12'
      }, React.DOM.button({
        className: '1of8',
        onClick: this.clickHandler
      }, 'HOME BUTTON'))
    )
  }
});