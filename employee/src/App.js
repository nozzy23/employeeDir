import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lookup from './components/search_employee';
import employees from './employees.json';
import EmployeeList from './components/list_employee'

class App extends Component {
  state = {
    employees: employees,
    name: "",
    role:""
  };

  Changename = (name) => {
    // e.preventDefault()
    this.setState({ name: name })
    console.log(this.state);
  }


  render() {
    console.log(employees)
    return (
      <div>
        <Lookup handleSubmit={this.Changename} />

        {this.state.employees.filter(employee => {
          return !this.state.name || employee.name.toLowerCase().includes(this.state.name.toLowerCase())}).map((employee, index) => (
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
