import React, { useState, useEffect } from "react";
import SupplierManager from '../../modules/SupplierManager';

const SupplierEdit = (props) => {
    const [supplier, setSupplier] = useState({ name: "", contact: "", email: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...supplier };
        stateToChange[evt.target.id] = evt.target.value;
        setSupplier(stateToChange);
    };

    const updateSupplier = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedSupplier = {
            id: props.match.params.supplierId,
            name: supplier.name,
            contact: supplier.contact,
            email: supplier.email,
        };

        SupplierManager.updateSupplier(editedSupplier)
            .then(() => props.history.push("/suppliers"))
    };

    useEffect(() => {
        SupplierManager.getSupplier(props.match.params.supplierId)
            .then(supplier => {
                setSupplier(supplier);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
        <form className="flex">
            <fieldset>
                <div className="editForm">
                    
                    <label htmlFor="name">Supplier Name</label>
                    <input 
                    type="text"
                    required
                    onChange={handleFieldChange}
                    value={supplier.name}
                    id="name"
                    />
                    
                    <label htmlFor="contact">Contact</label>
                    <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    value={supplier.contact}
                    id="contact" 
                    />
                    
                    <label htmlFor="email">Email</label>
                    <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    value={supplier.email}
                    id="email" 
                    />
                    
                </div>
                <button
                color="primary"
                type="button"
                disabled={isLoading}
                onClick={updateSupplier}
                >Submit</button>
            </fieldset>
        </form>
        </>
    );
}

export default SupplierEdit;