import React, { useState, useEffect } from "react";
import { withRouter, Link } from 'react-router-dom';
import './Nav.css'
import { Menu, Icon, Sidebar, Divider } from 'semantic-ui-react'

const NavBar = props => {

  const [visible, setVisible] = useState(false)
    
  
  const handleLogout = () => {
    props.clearUser();
    setVisible(false)
    props.history.push('/');
    };
    
    
    return (
    <>
    <header>
    <Icon 
    id="menuOpen"
    onClick={() => setVisible(true)}
    name='bars'
    size='huge'
    />
    </header>
    <Sidebar
    id="navBar"
    as={Menu}
    width='wide'
    animation='overlay'
    icon='labeled'
    vertical
    inverted
    visible={visible}
    onHide={() => setVisible(false)}
    >
    <Menu vertical fluid secondary>
        
        {props.hasUser
          ? <Link 
            onClick={() => setVisible(false)}
            to="/home">
            <Menu.Item 
            id='firstMenuItem'
            className="menuItem"
            link>
            HOME
            </Menu.Item>
            </Link>
          : null}
          {props.isAdmin
          ? <Link 
          onClick={() => setVisible(false)}
            to="/list">
            <Menu.Item 
            className="menuItem"
            link>
             LIST
            </Menu.Item>
            </Link>
          : null}
          {props.isAdmin
          ? <Link to="/orders" onClick={() => setVisible(false)}>
            <Menu.Item 
            className="menuItem"
            link>
              ORDERS
            </Menu.Item>
            </Link>
          : null}
          {props.isAdmin
          ? <Link to="/suppliers" onClick={() => setVisible(false)}>
            <Menu.Item 
            className="menuItem"
            link>
              SUPPLIERS
            </Menu.Item>
            </Link>
          : null}
          {props.isAdmin
          ? <Link to="/employees" onClick={() => setVisible(false)}>
            <Menu.Item 
            className="menuItem"
            link>
              EMPLOYEES
            </Menu.Item>
            </Link>
          : null}
          {props.hasUser
          ? <Link to="/profile" onClick={() => setVisible(false)}>
            <Menu.Item 
            className="menuItem"
            link>
              PROFILE
            </Menu.Item>
            </Link>
          : null}
          {props.hasUser
          ? null
          : <Link to="/login" onClick={() => setVisible(false)}>
            <Menu.Item 
            className="menuItem"
            link>
              LOG IN
            </Menu.Item>
            </Link>}
          {props.hasUser
          ? null
          : <Link to="/register" onClick={() => setVisible(false)}>
            <Menu.Item 
            className="menuItem"
            link>
              REGISTER
            </Menu.Item>
            </Link>}
          {props.hasUser
          ? <Link onClick={handleLogout} to="/login">
            <Menu.Item 
            className="menuItem"
            link>
              LOG OUT
            </Menu.Item>
            </Link>
          : null}
  
      </Menu>
      </Sidebar>
      </>
        );
}

export default withRouter(NavBar);
