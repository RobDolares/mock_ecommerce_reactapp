import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Footer extends Component {

  render(){
    return (
      <footer>
        <nav className="navbar navbar-inverse">
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/contact">
                <span>Contact</span>
              </NavLink>
            </li>
            <li>
              <a  href="https://github.com/RobDolares" rel="noopener noreferrer" target="_blank" ><span>&copy; 2017 Robert Howington</span></a>
            </li>
          </ul>
        </nav>
      </footer>
    )
  }

}
