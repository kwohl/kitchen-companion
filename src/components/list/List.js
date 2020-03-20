import React, { useState, useEffect } from 'react'
import ListItemCard from './ListItemCard'
import ListManager from '../../modules/ListManager'

const List = (props) => {
    const [listItems, setListItems] = useState([]);

    const getListItems = () => {
        return ListManager.getAll().then(response => {
            setListItems(response);
        });
    };

    const deleteListItem = (id) => {
        ListManager.deleteListItem(id)
            .then(() => ListManager.getAll().then(setListItems))
    };

    useEffect(() => {
        getListItems()
    }, []);

    return (
        <>
        <h1>Grocery List</h1>
        <div>
            {listItems.map(listItem =>
                <ListItemCard
                    key={listItem.id}
                    listItem={listItem}
                    deleteListItem={deleteListItem}
                    { ...props }
                />
                )}
        </div>
        <div>
            <button id="editListItem">Edit List</button>
        </div>
        </>
    );
}

export default List;