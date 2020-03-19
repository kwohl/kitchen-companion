import React, { useState } from 'react'
import './Home.css'
import HomeManager from '../../modules/HomeManager'

const Home = (props) => {
   const [listItem, setListItem] = useState({ listId: "", itemId: "", userId: "", status: "", dateAdded: "" });
   const [isLoading, setIsLoading] = useState(false); 

const handleFieldChange = evt => {
    const stateToChange = { ...listItem };
    stateToChange[evt.target.id] = evt.target.value;
    setListItem(stateToChange);
};

const constructNewListItem = evt => {
    evt.preventDefault();
    setIsLoading(true);
    listItem.listId = 1
    listItem.userId = 1
    listItem.dateAdded = Date.now()
    HomeManager.post(listItem)
        .then(() => props.history.push("/home"));
}
    return (
        <div>
            <h1>Add an Item to the List</h1>
            <form>
                <fieldset>
                    <div className="addListItemInputFields">
                        <input 
                        type="text" 
                        required 
                        onChange={handleFieldChange} 
                        id="itemId"
                        placeholder="Item"
                        />
                        <input 
                        type="text" 
                        required 
                        onChange={handleFieldChange} 
                        id="status"
                        placeholder="Low or Out?"
                        />
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