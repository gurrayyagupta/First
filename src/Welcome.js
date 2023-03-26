import React, { Component } from 'react'
import Other from './Other'

 class Welcome extends Component {
  state ={
  name:"ravi",
  city:"kakinada"
  }
  render() {
    return (
        
      <div>
        <Other name= {this.state.name}  city={this.state.city}></Other>
        {/* <Other name="gupta"></Other> */}
      </div>
    )
  }
  
  

}
export default Welcome;
