const baseUrl = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${baseUrl}/listItems?_expand=item&_expand=user`)
            .then(response => response.json())
    },
    getItemsWithListItems(id) {
        return fetch(`${baseUrl}/items/${id}?_embed=listItems`)
            .then(response => response.json())
    },
    deleteListItem(id) {
        return fetch(`${baseUrl}/listItems/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
    },
    postNewOrderFromList(newOrder) {
        return fetch(`${baseUrl}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOrder)
        }).then(response => response.json())
    }
}