const React = require('react');
const {Link} = require('react-router');

var About = (props) => {
  return (
    <div className="text-center">
      <h1>About</h1>
      <p>Information about our product</p>
      <p>Here are some of our sources and a link to our GitHub repo:</p>
      <ul className="menu vertical">
        <li>
          <Link to='https://github.com/thereal1/react-weather'>Our GitHub Repo</Link>
        </li>
        <li>
          <Link to='http://foundation.zurb.com/'>Foundation (for css styling)</Link>
        </li>
        <li>
          <Link to='https://facebook.github.io/react/'>React</Link>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
