import React, { useState, useEffect } from 'react'
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

const Employees = (props) => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return EmployeeManager.getAll().then(response => {
            setEmployees(response);
        });
    };

    const deleteEmployee = (id) => {
        EmployeeManager.deleteEmployee(id)
            .then(() => EmployeeManager.getAll().then(setEmployees))
    };


    useEffect(() => {
        getEmployees()
    }, []);



    return (
        <>
        <div className="center botMargin">
        <h1>Employees</h1>
        </div>
        <div className="center">
        <div>
            {employees.map(employee =>
                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    deleteEmployee={deleteEmployee}
                    { ...props }
                />
                )}
        </div>
        </div>
        </>
    );
}

export default Employees;