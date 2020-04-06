import React, { useState, useEffect } from 'react'
import SupplierManager from '../../modules/SupplierManager'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const SupplierOrderView = (props) => {
    const [supplier, setSupplier] = useState({});
    const [orders, setOrders] = useState([]);

    const getOrdersWithSupplier = () => {
        SupplierManager.getSupplierWithOrders(props.supplierId)
            .then(response => {
                setSupplier(response)
                setOrders(response.orders)
            })
    }

    useEffect(() => {
        getOrdersWithSupplier()

    }, []);


    const ModalModalExample = () => (
        <Modal trigger={<Button>Show Modal</Button>}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <div>
                <h4>{supplier.name}</h4>
                {orders.map(order => <p key={order.id}>{order.orderDate}</p>)}
                </div>
            </Modal.Description>
          </Modal.Content>
        </Modal>)

    return (
        <div>
        <h4>{supplier.name}</h4>
        {orders.map(order => <p key={order.id}>{order.orderDate}</p>)}
        <ModalModalExample/>
        </div>
    );
}

export default SupplierOrderView; 