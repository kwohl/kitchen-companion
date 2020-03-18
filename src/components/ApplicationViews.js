import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from './home/Home'
import List from './list/List'

const ApplicationView = (props) => {
    return (
        <>
        <Route path="/home" render={props => {
            return <Home { ...props }/> 
        }}/>
        <Route path="/list" render={props => {
            return <List { ...props }/> 
        }}/>
        </>
    );
}

export default ApplicationView;