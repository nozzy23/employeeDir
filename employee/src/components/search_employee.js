import React, { useState } from "react";


function Lookup(props) {
  const [name, setname] = useState("");

  // const handleSubmit =(e)=> {
  //   e.preventDefault();
  //   console.log("My name is " + name);
  // };

  const handleInput=(e)=>{
    setname(e.target.value)
  }

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      props.handleSubmit(name)}} className="search">
      <div className="form-group">
        <label htmlFor="search">Search Employee:</label>
        <input
          onChange={handleInput}
          value={props.search}
          name="name"
          type="text"
          className="form-control"
          placeholder="Search for employee"
        />
        
        
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>

  );

  
  
}

export default Lookup;