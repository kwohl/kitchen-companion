import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react'

const SupplierCard = props => {

//TODO: on Remove supplier - 'are you sure you would like to remove this supplier and all associated items?' (or 'would you like to reassign items to another supplier?')
//TODO: edit supplier - edit info and edit/add/delete items
return (
        <div className="listItemCard">
            <h3>{props.supplier.name}</h3>
            <p>Contact: {props.supplier.contact}</p>
            <p>Email: {props.supplier.email}</p>
            <Modal trigger={<Button inverted className="orangeButton" onClick={() => props.getOrdersWithSupplier(props.supplier.id)}>View Orders</Button>}>
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
            <Button inverted className="orangeButton" onClick={() => props.history.push(`/suppliers/${props.supplier.id}/items`)} id="addItems" >Manage Items</Button>
            <Button inverted className="orangeButton" icon='edit' onClick={() => props.history.push(`/suppliers/${props.supplier.id}/edit`)} id="editSupplier" />
            <Button inverted className="orangeButton" icon='trash alternate outline' id="deleteSupplier" onClick={() => props.deleteSupplier(props.supplier.id)} />
        </div>
    )
}

export default SupplierCard;