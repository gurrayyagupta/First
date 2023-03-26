import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
      super(props)
      this.state = {
         Count:0,
      }
    }
    increment  ()
    {
        this.setState({
            Count:this.state.Count + 3
        })
    }
    
  render() {
    return (
      <div><h1>Count :- {this.state.Count}</h1>
      <button onClick={()=>this.increment()}>click</button>
      </div>
    )
  }
}

export default Count