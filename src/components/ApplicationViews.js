import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from './home/Home'
import List from './list/List'
import Login from './auth/Login'
import Suppliers from './suppliers/Suppliers'
import SupplierEdit from './suppliers/SupplierEdit'
import Orders from './orders/Orders'
import Employees from './employees/Employees'
import Register from './auth/Register'

const ApplicationViews = (props) => {
    const setUser = props.setUser;
    const setAdminUser = props.setAdminUser;
    const hasUser = props.hasUser;
    const isAdmin = props.isAdmin;

    //TODO: add redirect paths for pages when hasUser = false

    return (
        <>
        <Route path="/home" render={props => {
            return <Home { ...props }/> 
        }}/>
        <Route path="/list" render={props => {
            return <List { ...props }/> 
        }}/>
        <Route path="/login" render={props => {
            return <Login setUser={setUser} setAdminUser={setAdminUser} { ...props }/> 
        }}/>
        <Route exact path="/suppliers" render={props => {
            return <Suppliers { ...props }/> 
        }}/>
        <Route path="/suppliers/:supplierId(\d+)/edit" render={props => {
            return <SupplierEdit { ...props }/> 
        }}/>
        <Route exact path="/orders" render={props => {
            return <Orders { ...props }/> 
        }}/>
        <Route path="/employees" render={props => {
            return <Employees { ...props }/> 
        }}/>
        <Route path="/register" render={props => {
            return <Register setUser={setUser} { ...props }/> 
        }}/>
        </>
    );
}

export default ApplicationViews;