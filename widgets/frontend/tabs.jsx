var React = require('react'),
    Header = require('./header');

var Tabs = React.createClass({
  getInitialState : function() {
    return { selectedTabIdx: 0 };
  },

  clickHandler : function(event) {
    // this.setState({selectedTabIdx: idx});
    var index = event.currentTarget.getAttribute('data-index');
    this.setState({selectedTabIdx: index});
  },

  render : function() {
    var tabTitles = ["Lasers", "Clouds", "Cats"],
        tabArticles = ["Zap", "Float", "Meow"];



    var selectedArticle = tabArticles[this.state.selectedTabIdx];

    return (
      <div>
        <Header clickCallback={this.clickHandler}
                tabTitles={tabTitles}/>
        <article>{selectedArticle}</article>
      </div>
    );
  }

});

module.exports = Tabs;
