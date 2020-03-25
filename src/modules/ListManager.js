const baseURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${baseURL}/listItems?_expand=item`)
            .then(response => response.json())
    },
    getItemsWithListItems(id) {
        return fetch(`${baseURL}/items/${id}?_embed=listItems`)
            .then(response => response.json())
    },
    deleteListItem(id) {
        return fetch(`${baseURL}/listItems/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
    },
    postNewOrderFromList(newOrder) {
        return fetch(`${baseURL}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOrder)
        }).then(response => response.json())
    }
}