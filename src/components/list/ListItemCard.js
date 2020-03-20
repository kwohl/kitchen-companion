import React from 'react';

const ListItemCard = props => {
    return (
        <div>
            <h3>{props.listItem.item.name}</h3>
            <p>Current Inventory: {props.listItem.status}</p>
            <button id="deleteListItem" onClick={() => props.deleteListItem(props.listItem.id)}>Delete</button>
        </div>
    )
}

export default ListItemCard;