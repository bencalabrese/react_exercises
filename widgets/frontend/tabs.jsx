var React = require('react');

var Tabs = React.createClass({
  getInitialState : function() {
    return { selectedTabIdx: 0 };
  },

  render : function() {
    var tabTitles = ["Lasers", "Clouds", "Cats"],
        tabArticles = ["Zap", "Float", "Meow"];

    var headers = tabTitles.map(function(title, index) {
      return <h2 data-index={index}>{title}</h2>
    });
        
    return (
      <div>
        <ul>
          {headers}
        </ul>
      </div>
    )
  }
});

module.exports = Tabs;
