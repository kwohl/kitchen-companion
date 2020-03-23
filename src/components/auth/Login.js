import React, { useState } from "react"
import LoginManager from "../../modules/LoginManager"

const Login = (props) => {
    const [credentials, setCredentials] = useState({ username: "", email: "" });
    const setUser = props.setUser;

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials }
        stateToChange[evt.target.id] = evt.target.value
        setCredentials(stateToChange)
    };

    const handleLogin = (evt) => {
        evt.preventDefault()
        if (credentials.username === "" || credentials.email === "") {
            window.alert("Please fill in all fields.")
        } else {
            LoginManager.getUsers().then(users => {
                if (users.find(user => user.username === credentials.username) && users.find(user => user.email === credentials.email)) {
                    const user = users.find(user => user.email === credentials.email)
                    
                    setUser(user)
                    
                    props.history.push("/home")
                } else {
                    window.alert("Invalid username or email")
                }
            })
        }
    };

    return (
        <form>
             <fieldset>
                 <h2>Sign In</h2>
                 <div>
                    <input onChange={handleFieldChange} type="text" id="username" 
                     placeholder="Username" />

                     <input onChange={handleFieldChange} type="text" id="email" 
                     placeholder="Email Address" />
                 </div>
                 <button type="submit" onClick={handleLogin}>Log In</button>
             </fieldset>
         </form>
    );
}

export default Login;