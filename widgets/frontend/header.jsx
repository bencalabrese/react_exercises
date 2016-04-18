var React = require('react');

var Header = React.createClass({

  render : function() {
    var headers = this.props.tabTitles.map(function(title, index) {
      return (
        <h2 data-index={index}
            className="tab"
            onClick={this.props.clickCallback}
            key={title}>
            {title}
        </h2>
      );
    }.bind(this));

    return (
      <ul className="tab-header group">{headers}</ul>
    );
  }
});

module.exports = Header;
