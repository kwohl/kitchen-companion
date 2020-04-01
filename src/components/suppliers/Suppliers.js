import React, { useState, useEffect } from 'react'
import SupplierManager from '../../modules/SupplierManager'
import SupplierCard from './SupplierCard'

const Suppliers = (props) => {
    const [suppliers, setSuppliers] = useState([]);

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
                    deleteSupplier={deleteSupplier}
                    { ...props }
                />
                )}
        </div>
        <div>
            <button onClick={() => props.history.push("/suppliers/new")}>Add New Supplier</button>
        </div>
        </>
    );
}

export default Suppliers;