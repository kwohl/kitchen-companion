import React, { useState, useEffect } from 'react'
import './Home.css'
import HomeManager from '../../modules/HomeManager'
import { Button, Form, Dropdown, Icon, Message } from 'semantic-ui-react'



const Home = (props) => {
   const [listItem, setListItem] = useState({ listId: "", itemId: "", userId: "", status: "", dateAdded: "" });
   const [isLoading, setIsLoading] = useState(false); 
   const [items, setItems] = useState([]);
   const [success, setSuccess] = useState(false);
   const [error, setError] = useState(false);
   const [warning, setWarning] = useState(false);
   

const handleFieldChange = evt => {
    const stateToChange = { ...listItem };
    console.log(evt.target.value)
    if (evt.target.id === "itemId") {
            stateToChange[evt.target.id] = parseInt(evt.target.value)
            console.log(evt.target.value)
    } else {
    stateToChange[evt.target.id] = evt.target.value
    };
    setListItem(stateToChange);
};

const getItems = () => {
    return HomeManager.getItems().then(response => {
        setItems(response)
    });
};

const clearInputFields = () => {
 
}

const constructNewListItem = evt => {
    evt.preventDefault();
    setIsLoading(true);
    listItem.listId = 1
    listItem.userId = parseInt(sessionStorage.getItem("activeUserId"))
    listItem.dateAdded = Date()

    HomeManager.getListItems()
        .then(response => {
            const existingListItem = response.find(item => item.itemId === listItem.itemId)
            
            if (existingListItem !== undefined) {
                setWarning(true);
                setSuccess(false);
                setError(false);
                setIsLoading(false);
            } else if (listItem.itemId === "-" || listItem.status === "-" || listItem.itemId === "" || listItem.status === "") {
                setError(true);
                setWarning(false);
                setSuccess(false);
                setIsLoading(false);
            } else {
                HomeManager.post(listItem)
                .then(() => setIsLoading(false))
                .then(() => setSuccess(true))
                .then(() => setWarning(false))
                .then(() => setError(false))
                .then(() => props.history.push("/home"));
                
            }
        })
}



const itemOptions = items.map(item => {
    return {key: item.id, value: parseInt(item.id), text: item.name}
})


useEffect(() => {
    getItems()
}, []);





//TODO: add function to clear form after adding an item
//TODO: something to let user know what they just added
//TODO: if an item is already on the list but the status has changed from low to out, update list item

    return (
        <>
        <div className="center">
            <Icon id="addItemIcon" name='add circle' size='massive' />
        </div>
        <div className="center">
            <Form success={success} error={error} warning={warning}>
            <Message
            success
            header='Item Submitted'
            content="You have added an item!"
            />
            <Message
            warning
            header='Oops!'
            content="That item is already on the list!"
            />
            <Message
            error
            header='Oops!'
            content="Please fill out all fields!"
            />
                <h2>Add an Item to the List</h2>
                <Form.Group>
                        <select className="listInputField" 
                        required 
                        onChange={handleFieldChange} 
                        id="itemId"
                        placeholder="Item"
                        >   
                            <option value="-">-</option>
                            {items.map(item => <option key={item.id} item={item} value={parseInt(item.id)}>{item.name}</option>)}
                        </select>
                        
                        <select className="listInputField"
                        
                        required 
                        onChange={handleFieldChange} 
                        id="status">
                            <option value="-">-</option>
                            <option value="low">low</option>
                            <option value="out">out</option>
                        </select>
                   
                    </Form.Group>
                    <div className="center">
                        <Button id="addItemButton" disabled={isLoading} onClick={constructNewListItem}>
                            Add
                        </Button>
                    </div>
            </Form>

        </div>
     
        </>
    )
}

export default Home