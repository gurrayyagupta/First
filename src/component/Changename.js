import React,{Component, useState} from "react";

const Changename = ()=>
{
    const [name,Changenames]=useState("Goodmorning")
    return(
        <div>
            <h2>Hello every one </h2>
            <h3>{name}</h3>
            <button onClick={()=> Changenames("goodevening")}>Click me</button>
========================================================================================================            
        </div>
    )

}
export default Changename;