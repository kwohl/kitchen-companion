import React, { useState, useEffect } from 'react'
import ListItemCard from './ListItemCard'
import ListManager from '../../modules/ListManager'
import { Button } from 'semantic-ui-react'

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

//orders is accumulator, listItem is current value
    const orders = listItems.reduce((orders, listItem) => {
        if (!orders[listItem.item.supplierId]) {
          orders[listItem.item.supplierId] = [];
        }
        orders[listItem.item.supplierId].push(listItem);
        return orders;
        
      }, {});
      console.log(orders)

    const createNewOrderItems = () => {
        // const confirm = window.confirm(`You are about to generate ${Object.entries(orders).length} new orders. Would you like to procede?`)
        // if (confirm === true) {
          Object.entries(orders)
        .forEach(orderPair => {
          return fetch("http://localhost:5002/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ supplierId: parseInt(orderPair[0]), isReceived: false, orderDate: Date() })
          })
            .then(resp => resp.json())
            .then(order => {
              for (const item of orderPair[1]) {
                fetch("http://localhost:5002/orderItems", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({ orderId: order.id, itemId: item.itemId })
                }).then(() => deleteListItem(item.id)).then(() => props.history.push("/orders"))
              }
            })
        })
        // }
    }


    useEffect(() => {
        getListItems()    
    }, []);

    return (
        <>
        <div className="center botMargin">
        <h1>Grocery List</h1>
        </div>
        <div className="center bodyMargins">
        <div className="flexList">
            {listItems.map(listItem =>
                <ListItemCard
                    key={listItem.id}
                    listItem={listItem}
                    deleteListItem={deleteListItem}
                    { ...props }
                />
                )}
        </div>
        </div>
        <div className="center">
        <Button id="generateOrdersButton" onClick={createNewOrderItems}>Generate Orders</Button>
        </div>
        </>
    );
}

export default List;