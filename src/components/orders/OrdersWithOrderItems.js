import React, { useState, useEffect } from 'react';
import OrderManager from '../../modules/OrderManager';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const OrdersWithOrderItems = (props) => {
    const [orderItems, setOrderItems] = useState([]);
    const [toDisplay, setToDisplay] = useState(true);
    const [orderObject, setOrderObject] = useState({});


    const markOrderReceived = (order) => {
        const updatedOrderItem = {
            id: order.id,
            supplierId: order.supplierId,
            isReceived: true,
            orderDate: order.orderDate
        }
        OrderManager.updateOrder(updatedOrderItem) 
        setToDisplay(false)       
    }


    useEffect(() => {
        OrderManager.getOrderItemsWithNames()
            .then(result => {
               const thisOrder = result.filter(orderItem => orderItem.orderId === props.orderId)
               setOrderItems(thisOrder)
               const orderObject = thisOrder[0].order
               setOrderObject(orderObject)

               if (orderObject.isReceived === true) {
                setToDisplay(false)
            }
            });
    }, []);

    
    return (
        <div>
        <h4>Items Ordered</h4>
        {orderItems.map(orderItem => <p key={orderItem.id}>{orderItem.item.name}</p>)}
        <Button style={{display:  toDisplay ? '' : 'none'}} onClick={() => markOrderReceived(orderObject)} >Mark Order Received</Button>
        <Button onClick={() =>props.history.push(`/orders`)}>Back</Button>
        </div>
    )
    
}

export default OrdersWithOrderItems;