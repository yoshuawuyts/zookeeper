'use strict';

var homeButton = require('./menu/home');

/**
 * Template
 */

module.exports = React.createClass({
  displayName: 'ProfilePic',
  render: function() {
    return (
      React.DOM.menu({className: 'row'},
        homeButton()
      )
    );
  }
});