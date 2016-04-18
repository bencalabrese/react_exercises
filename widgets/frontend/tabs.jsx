var React = require('react'),
    Header = require('./header');

var Tabs = React.createClass({
  getInitialState : function() {
    return { selectedTabIdx: 0 };
  },

  clickHandler : function(event) {
    var index = event.currentTarget.getAttribute('data-index');
    this.setState({selectedTabIdx: index});
  },

  render : function() {
    var tabTitles = [];
    var tabArticles = [];

    this.props.tabData.forEach(function(datum){
      tabTitles.push(datum.title);
      tabArticles.push(datum.article);
    });

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
