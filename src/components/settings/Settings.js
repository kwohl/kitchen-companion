import React, { useState, useEffect } from 'react'
import SettingsManager from '../../modules/SettingsManager'

const Settings = (props) => {
    const [user, setUser] = useState({})

    const getUser = () => {
        SettingsManager.getUser(parseInt(sessionStorage.getItem("activeUserId")))
        .then(result => setUser(result))
    }


        useEffect(() => {
            getUser()
        }, []);
        
return (
<>
<div className="bodyMargins">
<p>Hello, {user.firstName}!</p>
<p>Your username is <strong>{user.username}</strong>. You will use this to log in, so please don't forget!</p>
</div>
</>
    );
}

export default Settings;