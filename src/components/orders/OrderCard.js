import React, { useEffect, useState } from 'react';
import { Button, Card, Modal, Header, Icon } from 'semantic-ui-react'
import OrderManager from '../../modules/OrderManager'

const OrderCard = props => {
    const [toDisplay, setToDisplay] = useState(true)

    let received=""
    
    if (props.order.isReceived === false) {
        received="no"
    } else {
        received="yes"
        
    };



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
        if (props.order.isReceived === true) {
                setToDisplay(false)
        }
    }, [props.order.isReceived]);

    return (
        <>
        <Card raised className="orderCard">
        <Card.Content>
        <Card.Header>{props.order.supplier.name}</Card.Header>
        <Card.Description>
        <p>Order Date: {props.order.orderDate}</p>
        <p>Received: <Icon name='checkmark' style={{display:  toDisplay ? 'none' : ''}} /> <Icon name='cancel' style={{display:  toDisplay ? '' : 'none'}} /></p>
        <Card.Content textAlign='right'>
        <Button inverted id="markOrderReceivedButton" style={{display:  toDisplay ? '' : 'none'}} onClick={() => markOrderReceived(props.order)} >Mark Received</Button>  
        </Card.Content>
        </Card.Description>
        </Card.Content>
        <Modal trigger={<Button id="orderDetailsButton" onClick={() => props.getOrderItemNames(props.order.id)}>Order Details</Button>}>
        <Modal.Header>Items Ordered</Modal.Header>
        <Modal.Content>
            <Modal.Description>
            <div>
            {props.orderItems.map(orderItem => <p key={orderItem.id}>{orderItem.item.name}</p>)}
            </div>
            </Modal.Description>
        </Modal.Content>
        </Modal>
        </Card>
        </>
    )
}

export default OrderCard;


// onClick={() => props.getOrderItemNames(props.order.id)}