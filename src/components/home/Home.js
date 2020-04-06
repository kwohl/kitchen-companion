import React, { useState, useEffect } from 'react'
import './Home.css'
import HomeManager from '../../modules/HomeManager'
import { Button, Form, Dropdown, Icon } from 'semantic-ui-react'



const Home = (props) => {
   const [listItem, setListItem] = useState({ listId: "", itemId: "", userId: "", status: "", dateAdded: "" });
   const [isLoading, setIsLoading] = useState(false); 
   const [items, setItems] = useState([]);
   

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
                window.alert("That item is already on the list!")
                setIsLoading(false)
            } else if (listItem.itemId === "-" || listItem.status === "-" || listItem.itemId === "" || listItem.status === "") {
                console.log(listItem.itemId)
                console.log(listItem.status)
                window.alert("Please select a valid option for both fields.")
                setIsLoading(false)
            } else {
                HomeManager.post(listItem)
                .then(() => setIsLoading(false))
                .then(() => window.alert(`Success!`))
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
            <Form>
                <Form.Group>
                        <select 
                        required 
                        onChange={handleFieldChange} 
                        id="itemId"
                        placeholder="Item"
                        >   
                            <option value="-">-</option>
                            {items.map(item => <option key={item.id} item={item} value={parseInt(item.id)}>{item.name}</option>)}
                        </select>
                        
                        <select 
                        
                        required 
                        onChange={handleFieldChange} 
                        id="status">
                            <option value="-">-</option>
                            <option value="low">Low</option>
                            <option value="out">Out</option>
                        </select>
                   
                    </Form.Group>
                    <div className="center">
                        <Button disabled={isLoading} onClick={constructNewListItem}>
                            Add
                        </Button>
                    </div>
            </Form>

        </div>
     
        </>
    )
}

export default Home