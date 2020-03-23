const baseUrl = "http://localhost:5002";

export default {
  post(newUser) {
    return fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(response => response.json());
  },
  getAll() {
    return fetch(`${baseUrl}/users`).then(response => response.json());
  }
};