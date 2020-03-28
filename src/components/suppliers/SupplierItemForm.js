import React, { useState } from 'react';
import SupplierManager from '../../modules/SupplierManager'

const SupplierItemForm = props => {
    const [item, setItem] = useState({ name: "", supplierId: "" });
    const [isLoading, setIsLoading] = useState(false);
  
    const handleFieldChange = evt => {
      const stateToChange = { ...item };
      stateToChange[evt.target.id] = evt.target.value;
      setItem(stateToChange);
    };
  
    const createNewItem = evt => {
      evt.preventDefault();
      if (item.name === "") {
        window.alert("Please input an item");
      } else {
        item.supplierId = props.supplierId
        setIsLoading(true);
        
        SupplierManager.addItem(item)
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
                placeholder="Item Name"
              />
            </div>
            <div>
              <button
                disabled={isLoading}
                onClick={createNewItem}
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  };

export default SupplierItemForm