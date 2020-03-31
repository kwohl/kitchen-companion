import React, { useState, useEffect } from 'react'
import './Home.css'
import HomeManager from '../../modules/HomeManager'

const Home = (props) => {
   const [listItem, setListItem] = useState({ listId: "", itemId: "", userId: "", status: "", dateAdded: "" });
   const [isLoading, setIsLoading] = useState(false); 
   const [items, setItems] = useState([]);
   

const handleFieldChange = evt => {
    const stateToChange = { ...listItem };
    if (evt.target.id === "itemId") {
            stateToChange[evt.target.id] = parseInt(evt.target.value)
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

useEffect(() => {
    getItems()
}, []);

//TODO: change item name drowpdown to a search bar that you can type in
//TODO: add function to clear form after adding an item
//TODO: something to let user know what they just added
//TODO: if an item is already on the list but the status has changed from low to out, update list item

    return (
        <div>
            <h1>Add an Item to the List</h1>
            <form>
                <fieldset>
                    <div className="addListItemInputFields">
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
                    </div>
                    <div className="addListItemButton">
                        <button disabled={isLoading} onClick={constructNewListItem}>
                            Add
                        </button>
                    </div>
                </fieldset>
            </form>

        </div>
    )
}

export default Home