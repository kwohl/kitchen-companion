const baseUrl = "http://localhost:5002"

export default {
    post(newListItem) {
        return fetch(`${baseUrl}/listItems`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newListItem)
        }).then(response => response.json())
    },
    getItems() {
        return fetch(`${baseUrl}/items`)
            .then(response => response.json())
    },
    getListItems() {
        return fetch(`${baseUrl}/listItems?_expand=item`)
            .then(response => response.json())
    }
}