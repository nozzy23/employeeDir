import React from "react";

function EmployeeList(props){
    return(
    <table className="table table-striped">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{props.occupation}</td>
        <td><img src={props.image}/></td>
        </tr>
    </tbody>
    
    </table>
)};

export default EmployeeList;