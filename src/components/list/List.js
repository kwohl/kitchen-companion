import React, { useState, useEffect } from 'react'
import ListItemCard from './ListItemCard'
import ListManager from '../../modules/ListManager'
import OrderManager from '../../modules/OrderManager'
import SupplierManager from '../../modules/SupplierManager'


const List = (props) => {
    const [listItems, setListItems] = useState([]);

    const getListItems = () => {
        return ListManager.getAll().then(response => {
            setListItems(response);
        });
    };

    const createNewOrderItems = () => {
        const array1 = listItems.filter(listItem => listItem.item.supplierId === 1)
        console.log("supplier1: ", array1)
        const array2 = listItems.filter(listItem => listItem.item.supplierId === 2)
        console.log("supplier2: ", array2)
        if (array1.length > 0 && array2.length > 0) {
            const newOrder1 = {
                "supplierId": 1,
                "isReceived": false,
                "orderDate": Date.now()
            }
            const newOrder2 = {
                "supplierId": 2,
                "isReceived": false,
                "orderDate": Date.now()
            }
            ListManager.postNewOrderFromList(newOrder1)
            
            ListManager.postNewOrderFromList(newOrder2)
                
                    OrderManager.getJustOrders().then(orders => {
                        const currentOrder1 = orders[orders.length -2]
                       
                        const currentOrder2 = orders[orders.length -1]
                       
                        array1.map(item => {
                            const newItem1 = {
                                "orderId": currentOrder1.id,
                                "itemId": item.itemId
                            }
                            OrderManager.postNewOrderItem(newItem1)
                        })

                        array2.map(item => {
                            const newItem2 = {
                                "orderId": currentOrder2.id,
                                "itemId": item.itemId
                            }
                            OrderManager.postNewOrderItem(newItem2)
                        })
                    })
        }
        // if (array2.length > 0) {
        //     const newOrder2 = {
        //         "supplierId": 2,
        //         "isReceived": false,
        //         "orderDate": Date.now()
        //     }
        //     ListManager.postNewOrderFromList(newOrder2)
                
        //             OrderManager.getJustOrders().then(orders => {
        //                 const currentOrder2 = orders[orders.length -1]
        //                 console.log("currentOrder2: ", currentOrder2)
        //                 array2.map(item => {
        //                     const newItem2 = {
        //                         "orderId": currentOrder2.id,
        //                         "itemId": item.itemId
        //                     }
        //                     OrderManager.postNewOrderItem(newItem2)
        //                 })
        //             })
                
        // }
    }

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
        <button onClick={createNewOrderItems}>Generate Orders</button>
        </>
    );
}

export default List;