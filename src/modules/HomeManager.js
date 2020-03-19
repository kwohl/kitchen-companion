const baseURL = "http://localhost:5002"

export default {
    post(newListItem) {
        return fetch(`${baseURL}/listItems`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newListItem)
        }).then(response => response.json())
    }
}