var React = require('react');

var Header = React.createClass({

  render : function() {
    var headers = this.props.tabTitles.map(function(title, index) {
      return (
        <h2 data-index={index}
            className="tab-header"
            onClick={this.props.clickCallback}>
            {title}
        </h2>
      );
    }.bind(this));

    return (
      <ul>{headers}</ul>
    );
  }
});

module.exports = Header;
