'use strict';

var homeButton = require('./component_home').component;

/**
 * Exports
 * @exportProps: menuComponent
 * Element: menuComponent
 */

var menuComponent = exports.component = React.createClass({
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

