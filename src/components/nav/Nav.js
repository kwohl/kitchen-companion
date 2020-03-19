import React from "react";
import { withRouter, Link } from 'react-router-dom';
import './Nav.css'

const NavBar = props => {
    const clearUser = () => {
    sessionStorage.clear();
    };

    return (
    <>
    <div>
    <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/list">
              List
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/orders">
              Orders
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/suppliers">
              Suppliers
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/employees">
              Employees
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/settings">
              Settings
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/login">
              Log In
            </Link>
          </li>
          <li>
            <Link className="nav-link" onClick={clearUser} to="/login">
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
      </div>
      </>
        );
}

export default withRouter(NavBar);
