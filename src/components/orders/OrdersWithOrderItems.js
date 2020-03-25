import React, { useState, useEffect } from 'react';
import OrderManager from '../../modules/OrderManager';
import OrderCard from './OrderCard';
import Orders from './Orders';

const OrdersWithOrderItems = (props) => {
    const [orderItems, setOrderItems] = useState([]);
    
    



    useEffect(() => {
        OrderManager.getOrderItemsWithNames()
            .then(result => {
               const thisOrder = result.filter(orderItem => orderItem.orderId === props.orderId)
               setOrderItems(thisOrder)
            });
  
        
    }, []);

    return (
        <div>
        <h4>Items Ordered</h4>
          {orderItems.map(orderItem => <p key={orderItem.id}>{orderItem.item.name}</p>)}
        </div>
    )
    
}

export default OrdersWithOrderItems;