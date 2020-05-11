import React from 'react';


class Add extends React.Component{
  constructor(props){
      super(props);
      this.state={
        name:"",
        lastname:"",
        role:""
      }
  }

    handleInputChange=(e)=>{
    const userInput=e.target.value;
    this.setState({
        name:userInput,
        lastname:userInput,
        role:userInput});}


  render(){
      return(
          <div>
      <input value={this.handleInputChange} />
      <button>Add employee</button>
      </div>
      )}
}

export default Add;