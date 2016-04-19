var React = require("react"),
    Minesweeper = require("../game.js"),
    Board = require('./board');


var Game = React.createClass({
  getInitialState: function() {
    return {board: new Minesweeper.Board(10, 10)};
  },

  updateGame: function () {

  },

  render: function() {
    return (
      <Board board={this.state.board}
             updateCallback={this.updateGame}/>
    );
  }
});

module.exports = Game;
