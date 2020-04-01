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
    },
    updateEmployee(updatedEmployee) {
        return fetch(`${baseURL}/users/${updatedEmployee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEmployee)
        }).then(response => response.json());
    }
};