const React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h2 className="text-center">Its {temp}°C in {location}</h2>
  )
};

module.exports = WeatherMessage;
