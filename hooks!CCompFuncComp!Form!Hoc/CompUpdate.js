import React, { Component } from 'react'
 class CompUpdate extends Component {
    constructor() 
    {
        super();
        this.state={count:0}
        
        
    }
    incrementer =()=>{
this.setState({count:this.state.count+1})
    }
    componentDidUpdate(){
        console.warn('this component is updating');
    }
  

    render() {
    return (
      
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementer}>updatevalue </button>
      </div>
    )
  }
}

export default CompUpdate