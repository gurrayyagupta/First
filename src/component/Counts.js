import React,{Component, useState} from "react";
const Counts =()=>
{
    const [Count,Changenames]=useState(0)
   
        return(
        <div>
            <h3>{Count}</h3>
            <button onClick={()=>Changenames(Count+1)}>Click !!!</button>
        </div>
    )

}
export default Counts;