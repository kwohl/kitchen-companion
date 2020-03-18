import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from './home/Home'

const ApplicationView = (props) => {
    return (
        <Route path="/home" render={props => {
            return <Home /> 
        }}/>
    );
}

export default ApplicationView;