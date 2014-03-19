'use strict';

/*
 * Template
 */

module.exports = React.createClass({

  displayName: 'input',

  getInitialState: function() {
    return {value: ''};
  },

  handleInputChange: function() {
    this.setState({value: event.target.value});
  },

  handleClick: function() {
    if (this.state.value) {
      event.preventDefault();
      this.props.projectCollection.create({name: this.state.value});
      this.setState({value: ''});
    }
  },

  render: function() {
    return (
      React.DOM.form(null,
        React.DOM.input({placeholder: 'What´s on your mind?', value: this.state.value, onChange: this.handleInputChange}),
        React.DOM.button({onClick: this.handleClick.bind(this)}, 'Save')
      )
    );
  }
});