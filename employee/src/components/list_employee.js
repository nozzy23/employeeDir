import React from "react";

function employeeList(props){
    return(
<div>
    <table class="table">
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
        </tr>
    </tbody>
    </table>
</div>
)};

export default employeeList;