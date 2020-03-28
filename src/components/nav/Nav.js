import React from "react";
import { withRouter, Link } from 'react-router-dom';
import './Nav.css'

const NavBar = props => {
    const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
    };

    return (
    <>
    <div>
    <nav>
        <ul>
        {props.hasUser
          ? <li>
            <Link className="nav-link" to="/home">
              Home
            </Link>
            </li>
          : null}
          {props.isAdmin
          ? <li>
            <Link className="nav-link" to="/list">
              List
            </Link>
            </li>
          : null}
          {props.isAdmin
          ? <li>
            <Link className="nav-link" to="/orders">
              Orders
            </Link>
            </li>
          : null}
          {props.isAdmin
          ? <li>
            <Link className="nav-link" to="/suppliers">
              Suppliers
            </Link>
            </li>
          : null}
          {props.isAdmin
          ? <li>
            <Link className="nav-link" to="/employees">
              Employees
            </Link>
            </li>
          : null}
          {props.hasUser
          ? <li>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
            </li>
          : null}
          {props.hasUser
          ? null
          : <li>
            <Link className="nav-link" to="/login">
              Log In
            </Link>
          </li>}
          {props.hasUser
          ? null
          : <li>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>}
          {props.hasUser
          ? <li>
            <Link className="nav-link" onClick={handleLogout} to="/">
              Log Out
            </Link>
            </li>
          : null}
        </ul>
      </nav>
      </div>
      </>
        );
}

export default withRouter(NavBar);
