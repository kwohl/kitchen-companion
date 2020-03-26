import React from 'react';

const SupplierCard = props => {

//TODO: on Remove supplier - 'are you sure you would like to remove this supplier and all associated items?' (or 'would you like to reassign items to another supplier?')
//TODO: edit supplier - edit info and edit/add/delete items
return (
        <div>
            <h3>{props.supplier.name}</h3>
            <p>Contact: {props.supplier.contact}</p>
            <p>Email: {props.supplier.email}</p>
            <button id="viewOrders" onClick={() => props.history.push(`/suppliers/${props.supplier.id}/orders`)}>View Orders</button>
            <button onClick={() => props.history.push(`/suppliers/${props.supplier.id}/edit`)} id="editSupplier" >Edit Supplier</button>
            <button id="deleteSupplier" >Remove Supplier</button>
        </div>
    )
}

export default SupplierCard;