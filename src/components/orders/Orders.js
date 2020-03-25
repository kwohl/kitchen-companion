import React, { useState, useEffect } from 'react'
import OrderCard from './OrderCard'
import OrderManager from '../../modules/OrderManager'

//TODO: admin user can change received status of an order from this page
//TODO: different sections for orders that have been received (past orders) and orders that have been placed but are still pending
const Orders = (props) => {

    const [orders, setOrders] = useState([]);
    

    const getOrders = () => {
        return OrderManager.getAll().then(response => {
            setOrders(response);
        });
    };


    useEffect(() => {
        getOrders()
    }, []);

    return (
        <>
        <h1>Orders</h1>
        <div>
            {orders.map(order =>
                <OrderCard
                    key={order.id}
                    order={order}
                    { ...props }
                />
                )}
        </div>
        </>
    );
}

export default Orders;