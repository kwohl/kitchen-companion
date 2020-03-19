import React, { useState, useEffect } from 'react'
import ListItemCard from './ListItemCard'
import ListManager from '../../modules/ListManager'

const List = (props) => {
    const [listItems, setListItems] = useState([]);
    const [items, setItems] = useState([]);

    const getListItems = () => {
        return ListManager.getAll().then(response => {
            setListItems(response)
        });
    };

    useEffect(() => {
        getListItems()
        // ListManager.getItemsWithListItems(props.match.params.itemId)
        //     .then(result => {
        //         setItems(result);
        //         setListItems(result.listItems);
        //         console.log(listItems)
        //     })
    }, []);

    return (
        <>
        <h1>Grocery List</h1>
        <div>
            {listItems.map(listItem =>
                <ListItemCard
                    key={listItem.id}
                    listItem={listItem}
                    { ...props }
                />
                )}
        </div>
        </>
    );
}

export default List;