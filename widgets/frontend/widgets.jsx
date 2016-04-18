var React = require('react'),
    ReactDOM = require('react-dom'),
    Tabs = require('./tabs'),
    Clock = require('./clock'),
    Weather = require('./weather');

var Widgets = React.createClass({
  render: function() {

    var tabData = [{title: "Lasers", article: "Zap"},
                   {title: "Clouds", article: "Float"},
                   {title: "Cats", article: "Meow"},
                   {title: "Clock", article: <Clock/>}];

    return (
      <div>
        <Tabs tabData={tabData}/>
        <Clock/>
        <Weather/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
