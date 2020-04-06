import React, { useState } from 'react';
import './Kitchen.css';
import NavBar from './components/nav/Nav'
import ApplicationViews from './components/ApplicationViews';
import LoginManager from './modules/LoginManager';

function Kitchen() {
  const isAuthenticated = () => sessionStorage.getItem("activeUserId") !== null;
  
  const isAdminUser = () => {
    const activeUser = parseInt(sessionStorage.getItem("activeUserId"));
    if (activeUser) {
    LoginManager.getUserById(activeUser)
      .then(user => setIsAdmin(user.isAdmin))
    }
  }

  const [hasUser, setHasUser] = useState(isAuthenticated());
  const [isAdmin, setIsAdmin] = useState(isAdminUser());

  const setUser = user => {
    sessionStorage.setItem("activeUserId", JSON.stringify(user.id));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
    setIsAdmin(false);
  }

  return (
    <>
    <NavBar hasUser={hasUser} isAdmin={isAdmin} clearUser={clearUser} />
    <ApplicationViews hasUser={hasUser} isAdmin={isAdmin} setUser={setUser} />
    </>
  );
}

export default Kitchen;
