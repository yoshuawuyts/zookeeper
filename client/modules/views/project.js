'use strict';

/**
 * Module dependencies
 */

var menuComponent = require('./menu');

/**
 * Exports
 * @exportProps: render
 * @method: render
 * @params: {target}
 */

module.exports = function(target) {
  React.renderComponent(template({}), document.getElementById('root'));
};

/**
 * Template
 */

var template = React.createClass({

  render: function() {
    return (
      React.DOM.div(
        null,
        menuComponent(),
        'hello'
      )
    );
  }
});