import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager'

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
        <div>
            <h3>{props.employee.firstName} {props.employee.lastName} <span style={{display:  toDisplay ? 'none' : ''}}>*</span></h3>
            <p>Email: {props.employee.email}</p>
            <button id="deleteEmployee" onClick={() => props.deleteEmployee(props.employee.id)}>Remove Employee</button>
            <button id="makeAdmin" style={{display:  toDisplay ? '' : 'none'}} onClick={() => makeAdmin(props.employee)}>Make Admin</button>
        </div>
    )
}

export default EmployeeCard;