import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager'
import { Button, Card, Icon } from 'semantic-ui-react'

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
            <Card raised>
            <Card.Content>
            <Card.Header>{props.employee.firstName} {props.employee.lastName} <sup><Icon id="adminIcon" size='small' name='chess queen' style={{display:  toDisplay ? 'none' : ''}} /></sup></Card.Header>
            <p>Email: {props.employee.email}</p>
            <div>
            <Button inverted className="orangeButton" icon='trash alternate outline' onClick={() => props.deleteEmployee(props.employee.id)} />
            <Button inverted className="orangeButton" icon='chess queen' style={{display:  toDisplay ? '' : 'none'}} onClick={() => makeAdmin(props.employee)} />
            </div>
            </Card.Content>
            </Card>
        </>
    )
}

export default EmployeeCard;