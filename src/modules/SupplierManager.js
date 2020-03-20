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
    } 
}