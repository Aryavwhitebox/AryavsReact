import React, { Component } from 'react'

 class ClassComp extends Component {
constructor(){
  super();
  //we will be declaring variables
  //super will give the access to take the variables
  this.state={count:1}
}


componentWillUnmount(){
  console.log('this logs when we are updating the component');
    }
handleIncrement=()=>{
  //thos keyword will take the access
  this.setState({count:this.state.count+1})
}

handleDecrement=()=>{
  this.setState({count:this.state.count-1})
}
  //this will work before rendering of the component
 
  render() {
    return (
      <div>
      <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
      </div>
    )
  }
}

export default ClassComp