import React, { useState, useEffect } from 'react'
import SupplierManager from '../../modules/SupplierManager'
import SupplierCard from './SupplierCard'
import { Button, Header, Image, Modal, Popup, Icon } from 'semantic-ui-react'

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
        // const confirm = window.confirm("Are you sure you would like to delete this supplier and all associated items?")
        // if (confirm === true) {
            SupplierManager.deleteSupplier(supplierId)
            .then(() => getSuppliers())
        
    }

    useEffect(() => {
        getSuppliers()
    }, []);

    return (
        <>
        <div className="center botMargin">
        <h1>Suppliers <Icon id="addSupplierIcon" name='add circle' link onClick={() => props.history.push("/suppliers/new")} /></h1>
        </div>
        <div className="center">
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
        </div>
        </>
    );
}

export default Suppliers;