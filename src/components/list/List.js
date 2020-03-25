import React, { useState, useEffect } from 'react'
import ListItemCard from './ListItemCard'
import ListManager from '../../modules/ListManager'


//TODO: grocery list clears when you hit "generate order"

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
//TODO: look into Promise.all()
    const clearAllListItems = () => {
      if (listItems.length > 0) {  
      listItems.forEach(listItem => {
            ListManager.deleteListItem(listItem.id)
        })
      }
    }

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
        

        Object.entries(orders)
        .forEach(orderPair => {
          return fetch("http://localhost:5002/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ supplierId: parseInt(orderPair[0]), isReceived: false, orderDate: Date.now() })
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
                });
              }
            }).then(() => clearAllListItems())
        })
    }


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
        <button onClick={createNewOrderItems}>Generate Orders</button>
        </>
    );
}

export default List;