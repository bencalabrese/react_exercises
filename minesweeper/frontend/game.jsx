var React = require("react"),
    Minesweeper = require("../game.js"),
    Board = require('./board');


var Game = React.createClass({
  getInitialState: function() {
    return {board: new Minesweeper.Board()};
  },

  updateGame: function () {

  },

  render: function() {
    return (
      <Board boardState={this.state.board}
             updateCallback={this.updateGame}/>
    );
  }
});

module.exports = Game;
