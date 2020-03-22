import React from 'react';

const EmployeeCard = props => {
    return (
        <div>
            <h3>{props.employee.firstName} {props.employee.lastName}</h3>
            <p>Email: {props.employee.email}</p>
            <button id="deleteEmployee" onClick={() => props.deleteEmployee(props.employee.id)}>Remove Employee</button>
        </div>
    )
}

export default EmployeeCard;