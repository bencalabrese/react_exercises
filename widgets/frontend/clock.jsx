var React = require("react");

var Clock = React.createClass({
  getInitialState : function() {
    return {time: new Date()};
  },

  componentDidMount : function() {
    this.intervalId = setInterval(this.tick, 1000);
  },

  componentWillUnmount : function() {
    clearInterval(this.intervalId);
  },

  tick : function() {
    this.setState({time: new Date()});
  },

  render : function() {
    return (
      <figure>{this.state.time.toString()}</figure>
    );
  }
});

module.exports = Clock;
