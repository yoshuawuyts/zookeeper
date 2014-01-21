'use strict';

/**
 * Exports
 */

var testComponent = exports.testComponent = React.createClass({
  displayName: 'ProfilePic',
  render: function() {
    return (
    React.DOM.img({
      src: 'http://graph.facebook.com/' + this.props.username + '/picture'
    })
    );
  }
});

var svgComponent = exports.svgComponent = React.createClass({
  displayName: 'svgComponent',
  render: function() {
    return (
    React.DOM.div({
      className: 'svgComponent'
    })
    )
  }
});