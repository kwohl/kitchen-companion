import React, { useState, useEffect } from 'react';
import SupplierManager from '../../modules/SupplierManager'
import { Button, Form } from 'semantic-ui-react'

const SupplierItemForm = props => {
    const [newItem, setNewItem] = useState({ name: "", supplierId: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [supplier, setSupplier] = useState({});
    const [items, setItems] = useState([]);
  
    const handleFieldChange = evt => {
      const stateToChange = { ...newItem };
      stateToChange[evt.target.id] = evt.target.value;
      setNewItem(stateToChange);
    };
  
    const getSupplierAndItems = () => {
        SupplierManager.getSupplierWithItems(props.supplierId)
            .then(response => {
                setSupplier(response)
                setItems(response.items)
            });
    }

    const createNewItem = evt => {
      evt.preventDefault();
      if (newItem.name === "") {
        window.alert("Please input an newItem");
      } else {
        newItem.supplierId = props.supplierId
        setIsLoading(true);
        
        SupplierManager.addItem(newItem)
          .then(() => getSupplierAndItems())
          .then(() => setIsLoading(false));
      }
    };

    useEffect(() => {
        getSupplierAndItems()
    }, []);
  
    return (
      <>
        <Form>
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
              <Button
                disabled={isLoading}
                onClick={createNewItem}
              >Add Item</Button>
            </div>
          </fieldset>
        </Form>
        <div>
            <h3>{supplier.name}</h3>
            <h4>Current Items</h4>
            {items.map(item => <p key={item.id}>{item.name}</p>)}
        </div>
      </>
    );
  };

export default SupplierItemForm