import React,{Componentn, useEffect, useState} from "react";
const Effect=()=>
{
    const [value,updatevalue]=useState(1)
    useEffect(()=>console.log(value),[value])
    return (
        <div>
            <h1>Hello World ----------------------</h1>
            <h3>{value}</h3>
            <button onClick={() =>updatevalue(value +1)}>click me update value</button>
            <hr/>
            <hr/>            
        </div>
    )
}
export default Effect;