'use strict';

/**
 * Exports
 */

var svgComponent = exports.component = React.createClass({
  displayName: 'svgComponent',
  render: function() {
    return (
    React.DOM.div({
      className: 'row',
      children: [
        React.DOM.div({
          className: 'svgComponent size1of1'
        })
      ]
    })
    )
  }
});