import React from 'react'

const EmployeeTable = props => {
    console.log(props.search)
    const makeEmpRows = () => {
        return props.employeeList.map(emp=>{
            return (
                <tr>
                    <td>{emp.name}</td>
                    <td>{emp.job}</td>
                    <td>{emp.pay}</td>
                </tr>
            )
        })
    }
    return (
        <table>
            <thead>
                <td>name</td>
                <td>position</td>
                <td>pay</td>
            </thead>
            { makeEmpRows() }
        </table>
    )
}

export default EmployeeTable