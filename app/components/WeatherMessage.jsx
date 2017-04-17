const React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h2>In {location}, it is {temp} degrees</h2>
    </div>
  )
};

module.exports = WeatherMessage;
