import React, { useState, useEffect } from "react";
import { withRouter, Link } from 'react-router-dom';
import './Nav.css'
import { Menu, Icon, Sidebar } from 'semantic-ui-react'

const NavBar = props => {

  const [visible, setVisible] = useState(false)
    
  
  const handleLogout = () => {
    props.clearUser();
    setVisible(false)
    props.history.push('/');
    };

    
    return (
    <>
    <Icon 
    onClick={() => setVisible(true)}
    name='bars'
    size='big'
    />
    <Sidebar
    as={Menu}
    animation='overlay'
    icon='labeled'
    vertical
    visible={visible}
    onHide={() => setVisible(false)}
    >
    <Menu vertical secondary>
    <nav>
        
        {props.hasUser
          ? <Link 
            onClick={() => setVisible(false)}
            to="/home">
            <Menu.Item 
            name='add'
            link>
            Home
            </Menu.Item>
            </Link>
          : null}
          {props.isAdmin
          ? <Link 
          onClick={() => setVisible(false)}
            to="/list">
            <Menu.Item link>
             List
            </Menu.Item>
            </Link>
          : null}
          {props.isAdmin
          ? <Link to="/orders" onClick={() => setVisible(false)}>
            <Menu.Item link>
              Orders
            </Menu.Item>
            </Link>
          : null}
          {props.isAdmin
          ? <Link to="/suppliers" onClick={() => setVisible(false)}>
            <Menu.Item link>
              Suppliers
            </Menu.Item>
            </Link>
          : null}
          {props.isAdmin
          ? <Link to="/employees" onClick={() => setVisible(false)}>
            <Menu.Item link>
              Employees
            </Menu.Item>
            </Link>
          : null}
          {props.hasUser
          ? <Link to="/profile" onClick={() => setVisible(false)}>
            <Menu.Item link>
              Profile
            </Menu.Item>
            </Link>
          : null}
          {props.hasUser
          ? null
          : <Link to="/login">
            <Menu.Item link>
              Log In
            </Menu.Item>
            </Link>}
          {props.hasUser
          ? null
          : <Link to="/register">
            <Menu.Item link>
              Register
            </Menu.Item>
            </Link>}
          {props.hasUser
          ? <Link onClick={handleLogout} to="/">
            <Menu.Item link>
              Log Out
            </Menu.Item>
            </Link>
          : null}
      </nav>
      </Menu>
      </Sidebar>
      </>
        );
}

export default withRouter(NavBar);
