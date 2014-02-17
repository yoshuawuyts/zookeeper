'use strict';

module.exports = React.createClass({
  displayName: 'edititem linkButton',

  clickHandler: function(name) {
    event.preventDefault();
    Backbone.history.navigate('/' + name, true);
  },

  render: function() {
    return (
      React.DOM.a({href: '/' + this.props.name, onClick: this.clickHandler.bind(null, this.props.name)}, this.props.name)
    );
  }
});