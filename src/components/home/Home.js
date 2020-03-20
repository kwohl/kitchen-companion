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

const constructNewListItem = evt => {
    evt.preventDefault();
    setIsLoading(true);
    listItem.listId = 1
    listItem.userId = parseInt(sessionStorage.getItem("activeUserId"))
    listItem.dateAdded = Date.now()
    HomeManager.post(listItem)
        .then(() => props.history.push("/home"));
}

useEffect(() => {
    getItems()
}, []);


//TODO: users cannot submit "-" as a form selection
//TODO: change item name drowpdown to a search bar that you can type in
//TODO: add function to clear form and reset button after adding an item

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
                            <option>-</option>
                            {items.map(item => <option key={item.id} item={item} value={parseInt(item.id)}>{item.name}</option>)}
                        </select>
                        <select 
                        required 
                        onChange={handleFieldChange} 
                        id="status">
                            <option>-</option>
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