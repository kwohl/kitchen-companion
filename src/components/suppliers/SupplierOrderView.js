import React, { useState, useEffect } from 'react'
import SupplierManager from '../../modules/SupplierManager'

const SupplierOrderView = (props) => {
    const [supplier, setSupplier] = useState({});
    const [orders, setOrders] = useState([]);

    const getOrdersWithSupplier = () => {
        SupplierManager.getSupplierWithOrders(props.supplierId)
            .then(response => {
                setSupplier(response)
                setOrders(response.orders)
            })
    }

    useEffect(() => {
        getOrdersWithSupplier()

    }, []);

    return (
        <div>
        <h4>{supplier.name}</h4>
        {orders.map(order => <p key={order.id}>{order.orderDate}</p>)}
        </div>
    );
}

export default SupplierOrderView; 