import React, { useState, useEffect } from 'react'
import SupplierManager from '../../modules/SupplierManager'
import SupplierCard from './SupplierCard'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const Suppliers = (props) => {
    const [suppliers, setSuppliers] = useState([]);
    const [orders, setOrders] = useState([]);

    const getOrdersWithSupplier = (supplierId) => {
        SupplierManager.getSupplierWithOrders(supplierId)
            .then(response => {
                setOrders(response.orders)
            })
    }

    const getSuppliers = () => {
        SupplierManager.getSuppliers().then(response => {
            setSuppliers(response);
        });
    };

    const deleteSupplier = (supplierId) => {
        const confirm = window.confirm("Are you sure you would like to delete this supplier and all associated items?")
        if (confirm === true) {
            SupplierManager.deleteSupplier(supplierId)
            .then(() => getSuppliers())
        }
    }

    useEffect(() => {
        getSuppliers()
    }, []);

    return (
        <>
        <h1>Suppliers</h1>
        <div>
            {suppliers.map(supplier =>
                <SupplierCard
                    key={supplier.id}
                    supplier={supplier}
                    orders={orders}
                    getOrdersWithSupplier={getOrdersWithSupplier}
                    deleteSupplier={deleteSupplier}
                    { ...props }
                />
                )}
        </div>
        <div>
            <Button onClick={() => props.history.push("/suppliers/new")}>Add New Supplier</Button>
        </div>
        </>
    );
}

export default Suppliers;