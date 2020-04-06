import React, { useState, useEffect } from 'react'
import OrderCard from './OrderCard'
import OrderManager from '../../modules/OrderManager'
import './Orders.css'

//TODO: admin user can change received status of an order from this page
//TODO: different sections for orders that have been received (past orders) and orders that have been placed but are still pending
const Orders = (props) => {
    const [orders, setOrders] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [orderObject, setOrderObject] = useState({});


    // const markOrderReceived = (order) => {
    //     const updatedOrderItem = {
    //         id: order.id,
    //         supplierId: order.supplierId,
    //         isReceived: true,
    //         orderDate: order.orderDate
    //     }
    //     OrderManager.updateOrder(updatedOrderItem) 
    //     setToDisplay(false)       
    // }
    

    const getOrders = () => {
        return OrderManager.getAll().then(response => {
            setOrders(response);
        });
    };

    const getOrderItemNames = (orderId) => {
        return OrderManager.getOrderItemsWithNames()
            .then(result => {
                const thisOrder = result.filter(orderItem => orderItem.orderId === orderId)
                setOrderItems(thisOrder)
                const orderObject = thisOrder[0].order
                setOrderObject(orderObject)
                
            })
    }
    // const getOrderItems = () => {
    //     return OrderManager.getOrderItemsWithNames()
    //     .then(result => {
    //        const thisOrder = result.filter(orderItem => orderItem.orderId === props.order.id)
    //        setOrderItems(thisOrder)
    //        console.log(thisOrder[0])
    //        console.log(thisOrder)
    //     //    const orderObject = thisOrder[0].order
    //     //    setOrderObject(orderObject)

    //     //    if (orderObject.isReceived === true) {
    //     //     setToDisplay(false)
    //     // }
    //     });
    // }


    useEffect(() => {
        getOrders();

    }, []);

    return (
        <>
        <div className="center">
        <h1>Orders</h1>
        </div>
        <div className="center">
        <div className="flexOrders">
            {orders.map(order =>
            
                <OrderCard
                    key={order.id}
                    order={order}
                    orderItems={orderItems}
                    orderObject={orderObject}
                    getOrderItemNames={getOrderItemNames}
                    { ...props }
                />
                
                )}
        </div>
        </div>
        </>
    );
}

export default Orders;