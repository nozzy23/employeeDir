import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Add from './components/add_employee';
import employees from './employees.json';
import EmployeeList from './components/list_employee'

class App extends Component{
  state={
    employees:employees
  };

 render() {
   console.log(employees)
    return(
      <div>
        {this.state.employees.map((employee,index)=>(
              <EmployeeList key={index}
              name={employee.name}
              occupation={employee.occupation}
              />
        ))};
      </div>
    );
  }
}


export default App;
