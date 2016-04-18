var React = require('react');

var Weather = React.createClass({
  getInitialState: function() {
    return {weatherData: null};
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var latitude = pos.coords.latitude;
      var longitude = pos.coords.longitude;
      this.getWeather(latitude, longitude);
    }.bind(this));
  },

  getWeather: function(latitude, longitude) {
    var request = new XMLHttpRequest();

    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" +
              latitude + "&lon=" + longitude +
              "&appid=645c5d39c7603f17e23fcaffcea1a3c1";

    request.open('GET', url, true);

    var self = this;
    request.onload = function(response) {
      if (request.status >= 200 && request.status < 400){
        var weather = JSON.parse(request.responseText);

        self.setState({weatherData: weather});
      }
    };

    request.send();
  },

  render: function () {
    if (this.state.weatherData) {
      var weather = this.state.weatherData;
      var city = weather.name;
      var temp = Math.floor((((weather.main.temp - 273) * 9 / 5) + 32));
      var description = weather.weather[0].description;

      return (
        <div className="weather-box">
          <h3>Weather!</h3>
          <p>Current city: {city}</p>
          <p>Current temperature: {temp}°F</p>
          <p>Current weather: {description}</p>
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
});

module.exports = Weather;
