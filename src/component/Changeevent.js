import React,{useState} from "react";
 const Changeevent = ()=>
{
    const [user,newuser] = useState("")
    onchange = ( e ) =>
    {
        newuser(e.target.value)
    }
    return(
        
        <div>
            <center>
            <input type="text" placeholder="This Text Box" value={user} onChange={onchange} ></input>
           <br/> {user}
            </center>
            <hr/>
        </div>
    )

}
export default Changeevent;