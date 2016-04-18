var React = require("react");

var Autocomplete = React.createClass({
  getInitialState: function() {
    return {inputValue: "", searchMatches: []};
  },

  handleInput: function(event) {
    var value = event.currentTarget.value;
    var searchMatches = this.props.names.filter(function(name) {
      return name.startsWith(value);
    });

    searchMatches = value === "" ? [] : searchMatches;

    this.setState({inputValue: value, searchMatches: searchMatches});
  },

  autofillInput: function(event) {
    this.setState({
      inputValue: event.currentTarget.textContent,
      searchMatches: []
    });
  },

  render: function() {
    var searchMatchLis = this.state.searchMatches.map(function(name) {
      return <li key={name}
                 className="search-hit"
                 onClick={this.autofillInput}>
                 {name}
             </li>
    }.bind(this));

    return (
      <aside className="search-box">
        <input type="text"
               value={this.state.inputValue}
               onChange={this.handleInput}>
        </input>

        <br></br>

        <ul className="search-matches group">
          {searchMatchLis}
        </ul>
      </aside>
    );
  }
});

module.exports = Autocomplete;
