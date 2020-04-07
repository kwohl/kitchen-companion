import React from 'react';
import { Button, Icon, Popup } from 'semantic-ui-react'
import { allCaps } from '../../modules/Helpers'

const ListItemCard = props => {
    const inventory = allCaps(props.listItem.status)

    return (
        <div className="listItemCard">
            <h3>{allCaps(props.listItem.item.name)} <Popup content='Delete Item' trigger={<Icon name='trash alternate' size='small' link id="deleteListItem" onClick={() => props.deleteListItem(props.listItem.id)} />} /></h3>
            <p>Current Inventory: {inventory}</p>
            <p>Added by: {props.listItem.user.firstName} on {props.listItem.dateAdded}</p>
        </div>
    )
}

export default ListItemCard;