import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from './home/Home'
import List from './list/List'
import Login from './auth/Login'

const ApplicationView = (props) => {
    return (
        <>
        <Route path="/home" render={props => {
            return <Home { ...props }/> 
        }}/>
        <Route path="/list" render={props => {
            return <List { ...props }/> 
        }}/>
        <Route path="/login" render={props => {
            return <Login { ...props }/> 
        }}/>
        </>
    );
}

export default ApplicationView;