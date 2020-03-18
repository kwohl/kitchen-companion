const baseURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${baseURL}/listItems`)
            .then(response => response.json())
    }
}