import React from 'react';

const ListItemCard = props => {
    return (
        <div>
            <h3>{props.listItem.item.name}</h3>
            <p>Current Inventory: {props.listItem.status}</p>
        </div>
    )
}

export default ListItemCard;