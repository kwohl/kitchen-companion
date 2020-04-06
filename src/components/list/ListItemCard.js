import React from 'react';
import { Button } from 'semantic-ui-react'

const ListItemCard = props => {
    return (
        <div>
            <h3>{props.listItem.item.name}</h3>
            <p>Current Inventory: {props.listItem.status}</p>
            <p>Added by: {props.listItem.user.firstName} on {props.listItem.dateAdded}</p>
            <Button id="deleteListItem" onClick={() => props.deleteListItem(props.listItem.id)}>Delete</Button>
        </div>
    )
}

export default ListItemCard;