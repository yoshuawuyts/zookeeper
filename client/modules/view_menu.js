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
    var app = new Backbone.Router();
    app.navigate('/12');
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