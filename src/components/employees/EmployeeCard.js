import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager'
import { Button, Card, Popup, Icon } from 'semantic-ui-react'

const EmployeeCard = props => {
    const [toDisplay, setToDisplay] = useState(true)


    const makeAdmin = (employee) => {
        
        const updatedEmployee = {
            id: employee.id,
            username: employee.username,
            email: employee.email,
            firstName: employee.firstName,
            lastName: employee.lastName,
            isAdmin: true
        }

        EmployeeManager.updateEmployee(updatedEmployee)
        setToDisplay(false) 
    }

    useEffect(() => {
        if (props.employee.isAdmin === true) {
                setToDisplay(false)
        }
    }, []);
    
    return (
        <>
            <Card>
            <h3>{props.employee.firstName} {props.employee.lastName} <Icon name='chess queen' style={{display:  toDisplay ? 'none' : ''}} /></h3>
            <p>Email: {props.employee.email}</p>
            <div>
            <Popup content='Remove Employee' trigger={<Button icon='trash alternate outline' onClick={() => props.deleteEmployee(props.employee.id)} />} />
            <Popup content='Make Admin' trigger={<Button icon='chess queen' style={{display:  toDisplay ? '' : 'none'}} onClick={() => makeAdmin(props.employee)}/>} />
            </div>
            </Card>
        </>
    )
}

export default EmployeeCard;