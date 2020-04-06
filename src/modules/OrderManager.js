const baseURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${baseURL}/orders?_expand=supplier&_embed=orderItems`)
            .then(response => response.json())
    },
    getJustOrders() {
        return fetch(`${baseURL}/orders`)
            .then(response => response.json())
    },
    getOrdersWithItems(id) {
        return fetch(`${baseURL}/orders/${id}?_embed=orderItems`)
            .then(response => response.json())
    },
    getOrderItemsWithNames() {
        return fetch(`${baseURL}/orderItems?_expand=item&_expand=order`)
            .then(response => response.json())
    },
    getOrderWithSupplier(id) {
        return fetch(`${baseURL}/orders/${id}?_expand=supplier`)
            .then(response => response.json())
    },
    postNewOrderItem(newOrderItem) {
        return fetch(`${baseURL}/orderItems`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOrderItem)
        }).then(response => response.json())
    },
    updateOrder(updatedOrder) {
        return fetch(`${baseURL}/orders/${updatedOrder.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedOrder)
        }).then(response => response.json());
    }
}