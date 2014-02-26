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
    this.props.itemCollection.create({name: this.state.value});

    // Clear state
    this.setState({value: ''});
  },

  render: function() {
    
    // Properties
    var itemCollection = this.props.itemCollection;

    return (
      React.DOM.form(null,
        React.DOM.input({placeholder: 'What´s on your mind?', value: this.state.value, onChange: this.handleChange}),
        React.DOM.button({onClick: this.handleClick.bind(null, itemCollection)}, 'Save')
      )
    );
  }
});