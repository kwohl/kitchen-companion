import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react'

const SupplierCard = props => {

//TODO: on Remove supplier - 'are you sure you would like to remove this supplier and all associated items?' (or 'would you like to reassign items to another supplier?')
//TODO: edit supplier - edit info and edit/add/delete items
return (
        <div>
            <h3>{props.supplier.name}</h3>
            <p>Contact: {props.supplier.contact}</p>
            <p>Email: {props.supplier.email}</p>
            <Modal trigger={<Button onClick={() => props.getOrdersWithSupplier(props.supplier.id)}>View Orders</Button>}>
            <Modal.Header>{props.supplier.name}</Modal.Header>
            <Modal.Content>
            <Modal.Description>
              <Header>Previous Orders</Header>
              <div>
                {props.orders.map(order => <p key={order.id}>{order.orderDate}</p>)}
                </div>
            </Modal.Description>
            </Modal.Content>
            </Modal>
            <Button onClick={() => props.history.push(`/suppliers/${props.supplier.id}/edit`)} id="editSupplier" >Edit Supplier</Button>
            <Button onClick={() => props.history.push(`/suppliers/${props.supplier.id}/items`)} id="addItems" >Manage Items</Button>
            <Button id="deleteSupplier" onClick={() => props.deleteSupplier(props.supplier.id)}>Remove Supplier</Button>
        </div>
    )
}

export default SupplierCard;