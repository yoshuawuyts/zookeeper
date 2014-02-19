'use strict';

/*
 * Template
 */

module.exports = React.createClass({

  displayName: 'input',

  getInitialState: function() {
    // Render HTML placeholder value
    return {value: ''};
  },

  handleChange: function() {
    // Set state equal to input
    this.setState({value: event.target.value});
  },

  handleClick: function() {

    // Prevent browser from handling clicks
    event.preventDefault();

    // Add value to Backbone collection
    this.props.itemCollection.add({name: this.state.value});

    // Clear state
    this.setState({value: ''});
  },

  render: function() {

    // Initialize vars
    var itemCollection = this.props.itemCollection;
    var placeholder = 'What´s on your mind?';
    var handleChange = this.handleChange;
    var value = this.state.value;

    // Return DOM elements
    return (
      React.DOM.form(null,
        React.DOM.input({placeholder: placeholder, value: value, onChange: handleChange}),
        React.DOM.button({onClick: this.handleClick.bind(null, itemCollection)}, 'Save')
      )
    );
  }
});