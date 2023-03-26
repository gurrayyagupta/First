import React,{useState} from "react";

const Ramu = () =>
{
    const [name,Changename]= useState("")
    let happy = (e) =>
    {
        Changename(e.target.value)
    }
    return(
        <div>
            <center><input type="text" placeholder="ENTER YOUR NAME" value={name} onChange={happy} name="user"></input></center>
            {name}
        </div>
        
    )

}
export default Ramu;
