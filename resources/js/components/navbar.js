
import React from 'react';
import {Link} from 'react-router-dom';
// import ReactDOM from 'react-dom';

const Nav = (props) => {
    return (
        <ul className="nav navbar-dark">
        <li className="nav-item">
            <Link to="/add-new-record">
                Add New Profile
            </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" disabled>Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    );
}

export default Nav;

