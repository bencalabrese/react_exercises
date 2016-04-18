var React = require('react'),
    ReactDOM = require('react-dom'),
    Tabs = require('./tabs'),
    Clock = require('./clock'),
    Weather = require('./weather'),
    Autocomplete = require('./autocomplete');

var Widgets = React.createClass({
  render: function() {
    var names = [
      "Jack", "Joe", "Bob", "Mary", "Sue",
      "Paul", "George", "Steven", "John", "Jessica"
    ];

    var tabData = [{title: "Lasers", article: "Zap"},
                   {title: "Clouds", article: "Float"},
                   {title: "Cats", article: "Meow"},
                   {title: "Clock", article: <Clock/>},
                   {title: "Weather", article: <Weather/>}];

    return (
      <div>
        <Tabs tabData={tabData}/>
        <Autocomplete names={names}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
