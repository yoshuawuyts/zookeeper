'use strict';

var homeButton = require('./menu/home');

/**
 * Exports
 * @exportProps: menuComponent
 * Element: menuComponent
 */

module.exports = React.createClass({
  displayName: 'ProfilePic',
  render: function() {
    return (
      React.DOM.menu({
        className: 'row'
      },
        null,
        homeButton()
      )
    )
  }
});

/**
 * Element: homeButton
 */

