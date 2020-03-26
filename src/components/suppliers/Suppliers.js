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