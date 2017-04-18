const React = require('react');
const {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div className="text-center">
      <h1 className="page-title">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ul className="menu vertical">
        <li>
          <Link to='/?location=Irvine'>Irvine</Link>
        </li>
        <li>
          <Link to='/?location=Florida'>Florida</Link>
        </li>
      </ul>
    </div>
  )
};

module.exports = Examples;
