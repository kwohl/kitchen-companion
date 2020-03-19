const baseUrl = "http://localhost:5002"

export default {
    getUsers() {
        return fetch(`${baseUrl}/users`).then(response => response.json())
    }
}