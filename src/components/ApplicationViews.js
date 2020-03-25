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
import OrdersWithOrderItems from './orders/OrdersWithOrderItems'

const ApplicationViews = (props) => {
    const setUser = props.setUser;
    const setAdminUser = props.setAdminUser;
    const hasUser = props.hasUser;
    const isAdmin = props.isAdmin;

    //TODO: add redirect paths for pages when hasUser = false or when isAdmin = false

    return (
        <>
        <Route path="/home" render={props => {
            if (hasUser) {
            return <Home { ...props }/> 
            } else {
                return <Redirect to="/ " />
            }
        }}/>
        <Route path="/list" render={props => {
            if (isAdmin) {
            return <List { ...props }/> 
            } else {
                return <Redirect to="/home" />
            }
        }}/>
        <Route path="/login" render={props => {
            return <Login setUser={setUser} setAdminUser={setAdminUser} { ...props }/> 
        }}/>
        <Route exact path="/suppliers" render={props => {
            if (isAdmin) {
            return <Suppliers { ...props }/> 
            } else {
                return <Redirect to="/home" />
            }
        }}/>
        <Route path="/suppliers/:supplierId(\d+)/edit" render={props => {
            if (isAdmin) {
            return <SupplierEdit { ...props }/> 
            } else {
                return <Redirect to="/home" />
            }
        }}/>
        <Route exact path="/orders" render={props => {
            if (isAdmin) {
            return <Orders { ...props }/> 
            } else {
                return <Redirect to="/home" />
            }
        }}/>
        <Route path="/orders/:orderId(\d+)/details" render={props => {
            if (isAdmin) {
            return <OrdersWithOrderItems orderId={parseInt(props.match.params.orderId)}{ ...props }/>
            } else {
                return <Redirect to="/home" />
            } 
        }}/>
        <Route path="/employees" render={props => {
            if (isAdmin) {
            return <Employees { ...props }/> 
            } else {
                return <Redirect to="/home" />
            }
        }}/>
        <Route path="/register" render={props => {
            return <Register setUser={setUser} { ...props }/>   
        }}/>
        </>
    );
}

export default ApplicationViews;