'use strict';

var taskText = exports.component = React.createClass({

  displayName: 'taskText',

  textHandler: function() {
    // do stuff with backbone model
  },

  render: function() {
    return (
      React.DOM.div({
        className: 'taskText size6of8'
      }, 'taskText') // make dynamic
    );
  }
});