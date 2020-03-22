import React, { useState } from 'react';
import './Kitchen.css';
import NavBar from './components/nav/Nav'
import ApplicationViews from './components/ApplicationViews';

function Kitchen() {
  const isAuthenticated = () => sessionStorage.getItem("activeUserId") !== null;
  
  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("userId", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

  return (
    <>
    <NavBar hasUser={hasUser} clearUser={clearUser} />
    <ApplicationViews hasUser={hasUser} setUser={setUser}/>
    </>
  );
}

export default Kitchen;
