import React, { useState } from 'react';
import SupplierManager from '../../modules/SupplierManager'

const SupplierForm = props => {
    const [supplier, setSupplier] = useState({ name: "", contact: "", email: "" });
    const [isLoading, setIsLoading] = useState(false);
  
    const handleFieldChange = evt => {
      const stateToChange = { ...supplier };
      stateToChange[evt.target.id] = evt.target.value;
      setSupplier(stateToChange);
    };
  
    const createNewSupplier = evt => {
      evt.preventDefault();
      if (supplier.name === "" || supplier.contact === "" || supplier.email === "") {
        window.alert("Please fill in all fields");
      } else {
        setIsLoading(true);
        SupplierManager.addSupplier(supplier)
          .then(() => props.history.push("/suppliers"));
      }
    };
  
    return (
      <>
        <form>
          <fieldset>
            <div>
              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="name"
                placeholder="Supplier Name"
              />
              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="contact"
                placeholder="Contact Person"
              />
              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div>
              <button
                type="button"
                disabled={isLoading}
                onClick={createNewSupplier}
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  };

export default SupplierForm;