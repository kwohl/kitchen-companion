const baseURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${baseURL}/users`)
            .then(response => response.json())
    },
    deleteEmployee(id) {
        return fetch(`${baseURL}/users/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
    }
};