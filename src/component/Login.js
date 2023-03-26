import React,{useState} from "react";
function Login()
{
    const [data,update] =useState(
        {
            username:"",
            password:""
        });

        const {username,password} = data;   //this spraad oprator
        const Change =(e)=>
        {
            update({...data,[e.target.name]:[e.target.value]})
        } 
        const onsubmitHandler = (e)=>
        {
            e.preventDefault();
            console.log(data);
        }
     return(
        <div>
            <form onSubmit={onsubmitHandler}>
            <input type="text" placeholder="EnterName" value={username} onChange={Change} name="username"></input>
            <input type="password" placeholder="EnterPassword" value={password} onChange={Change} name="password"></input>
            <input type="submit" name="click"></input>
            {username}<br/>
            {password}<br/>
            </form>
        </div>
    )
}
export default Login;