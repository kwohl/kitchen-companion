const baseUrl = "http://localhost:5002"

export default {
    getSuppliers() {
        return fetch(`${baseUrl}/suppliers`).then(response => response.json())
    },
    updateSupplier(editedSupplier) {
        return fetch(`${baseUrl}/suppliers/${editedSupplier.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedSupplier)
        }).then(response => response.json())
    },
    getSupplier(id) {
        return fetch(`${baseUrl}/suppliers/${id}`).then(response => response.json())
    },
    getSupplierWithOrders(id) {
        return fetch (`${baseUrl}/suppliers/${id}?_embed=orders`)
            .then(response => response.json())
    },
    addSupplier(newSupplier) {
        return fetch(`${baseUrl}/suppliers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSupplier)
        }).then(response => response.json())
    },
    addItem(newItem) {
        return fetch(`${baseUrl}/items?_expand=supplier`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        }).then(response => response.json())
    },
    getSupplierWithItems(id) {
        return fetch (`${baseUrl}/suppliers/${id}?_embed=items`)
            .then(response => response.json())
    }
}