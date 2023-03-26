import React, {Component} from "react";
class Message extends Component
{
    constructor()
    {
        super()
        this.state={
            Messages:"hello this message Component"
        }
    }
    changeMessage =() => {
            this.setState({
                Messages:"mohan is a good boy"
            })
    }
    render()
        {
            return (
                <div>
                    <h1>Hello This Messages</h1>
                        {this.props.name} {this.props.anothername}
                        <h1>{this.state.Messages}</h1>
                        <button onClick={()=>this.changeMessage()}>click</button>
                </div>)
            
        }
}
export default Message;



