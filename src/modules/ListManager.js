const baseURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${baseURL}/listItems`)
            .then(response => response.json())
    },
    getItemsWithListItems(id) {
        return fetch(`${baseURL}/items/${id}?_embed=listItems`)
            .then(response => response.json())
    }
}