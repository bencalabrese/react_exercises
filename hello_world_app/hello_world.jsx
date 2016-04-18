var React = require('react'),
    ReactDOM = require('react-dom');

var MyComponent = React.createClass({
  render: function() {
    return(
      <div>HELLO WORLD!!!!!!</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<MyComponent/>, document.getElementById('main'));
});
