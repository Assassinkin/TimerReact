var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
          <li><IndexLink to="/" activeClassName="active-link">Countdown</IndexLink></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">Created by <a href="https://github.com/Assassinkin" target="_blank">AssassinKin</a></li>
          </ul>
      </div>
    </div>
  );


};


module.exports = Navigation;
