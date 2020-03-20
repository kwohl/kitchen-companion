const baseURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${baseURL}/orders?_expand=supplier`)
            .then(response => response.json())
    }
}