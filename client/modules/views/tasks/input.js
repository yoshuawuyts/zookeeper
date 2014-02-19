'use strict';

/**
 * Module dependencies
 */

/*
 * Template
 */
module.exports = React.createClass({

  displayName: 'input',

  getInitialState: function() {
    return {value: 'hellow!'};
  },

  handleChange: function() {
    this.setState({value: event.target.value});
  },

  handleClick: function() {
    event.preventDefault();
    // id: 0,
    // name: "Item name",
    // text: "Input text...",
    // completed: false
    console.log(this.state.value);
    this.props.itemCollection.add({name: this.state.value});
  },

  render: function() {
    var value = this.state.value;
    return (
      React.DOM.form(null,
        React.DOM.input({value: value, onChange: this.handleChange}),
        React.DOM.button({onClick: this.handleClick.bind(null, this.props.itemCollection)}, 'Save')
      )
    );
  }
});