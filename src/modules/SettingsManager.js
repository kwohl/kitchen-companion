const baseUrl = "http://localhost:5002";

export default {
    getAllUsers() {
      return fetch(`${baseUrl}/users`).then(response => response.json());
    },
    getUser(id) {
        return fetch(`${baseUrl}/users/${id}`).then(response => response.json());
      }
  };