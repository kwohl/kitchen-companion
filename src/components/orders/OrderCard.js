import React, { useState } from 'react';

const OrderCard = props => {
    
    let received=""
    
    if (props.order.isReceived === false) {
        received="no"
    } else {
        received="yes"
        
    };

    return (
        <div>
            <h3>{props.order.supplier.name}</h3>
            <p>Order Date: {props.order.orderDate}</p>
            <p>Received: {received.toUpperCase()}</p>
            <button onClick={() =>props.history.push(`/orders/${props.order.id}/details`)}>Order Details</button>
        </div>
    )
}

export default OrderCard;