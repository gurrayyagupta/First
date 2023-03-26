import React, { Component } from 'react'

class Other extends Component
{
render(){
  return (
    <div>   
      {/* <h1>{this.props.city}</h1>
      <h1>{this.props.name}</h1> */}
      <button onClick={()=>console.log("hello")}>click me</button>
    </div>
  )
}
}
export default Other;
