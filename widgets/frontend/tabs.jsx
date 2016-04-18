var React = require('react');

var Tabs = React.createClass({
  getInitialState : function() {
    return { selectedTabIdx: 0 };
  },

  render : function() {
    var tabTitles = ["Lasers", "Clouds", "Cats"],
        tabArticles = ["Zap", "Float", "Meow"];

    var headers = tabTitles.map(function(title, index) {
      return <h2 data-index={index} className="tab-header">{title}</h2>
    });

    var selectedArticle = tabArticles[this.state.selectedTabIdx]

    return (
      <div>
        <ul className="group">
          {headers}
        </ul>
        <article>
          {selectedArticle}
        </article>
      </div>
    );
  }
});

module.exports = Tabs;
