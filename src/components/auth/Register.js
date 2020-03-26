import React, { useState } from "react"
import { Link } from "react-router-dom"
import RegisterManager from "../../modules/RegisterManager"


const Register = (props) => {
    const [credentials, setCredentials] = useState({ username: "", email: "", firstName: "", lastName: ""})
    const [isLoading, setIsLoading] = useState(false)
    const setUser = props.setUser;

    const handleFieldChange = (evt) => {
        const stateToChange = {...credentials}
        stateToChange[evt.target.id] = evt.target.value
        setCredentials(stateToChange)
    }

    const handleRegister = (evt) => {
        evt.preventDefault()

        if (credentials.email === "" || credentials.firstName === "" || credentials.lastName === "") {
            window.alert("Please fill out all fields.")
        } else {
            // checks if email that user entered in field (credentials) matches email in the DB
            RegisterManager.getAll().then(users => {
                if (users.find(user => user.email === credentials.email)) {
                    window.alert("This email already exists.")
                } else {
                const newUser = {
                    username: credentials.firstName.charAt(0).toLowerCase() + credentials.lastName.toLowerCase(),
                    email: credentials.email,
                    firstName: credentials.firstName,
                    lastName: credentials.lastName,
                    isAdmin: false
                }
                setIsLoading(true)

                RegisterManager.post(newUser)
                .then(() => {
                    RegisterManager.getAll().then(users => {
                        const activeUser = users.find(user => user.email === newUser.email)
                        
                        setUser(activeUser)
                        // sessionStorage.setItem(
                        //     "activeUserId", 
                        //     JSON.stringify(activeUser.id)
                        // )
                        window.alert("Welcome! Your username is " + activeUser.username + ".")
                        props.history.push("/home")
                    })
                })
                }
            })    
        }
    }

    return (
        <>
       <div>
        <form onSubmit={handleRegister}>
            <fieldset>
                <h2>Register</h2>
                <div>
                    <input onChange={handleFieldChange} type="email" id="email" 
                    placeholder="Email Address" required="" autoFocus="" />

                    <input onChange={handleFieldChange} type="text" id="firstName" 
                    placeholder="First Name" required="" />

                    <input onChange={handleFieldChange} type="text" id="lastName" 
                    placeholder="Last Name" required="" />
                </div>
                <button type="submit" disabled={isLoading} >Register</button>
            </fieldset>
        </form>
        </div>
        <Link to="/login">Already have an account? Log in here.</Link>
       </>
    )
};

export default Register;