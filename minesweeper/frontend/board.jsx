var React = require('react'),
    Minesweeper = require('../game.js'),
    Tile = require('./tile');

var Board = React.createClass({
  render: function() {

    var rows = this.props.board.grid.map(function(row, rowIdx){
      var rowTiles = row.map(function(tile, colIdx){
        return <Tile gameTile={tile} key={[rowIdx, colIdx]}/>
      });

      return <div key={rowIdx} className="row group">{rowTiles}</div>
    });

    return (
      <div>
        {rows}
      </div>
    );
  }
});

module.exports = Board;
