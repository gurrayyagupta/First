import React from "react";
function Map()
{
    const arr =[
        {
            id:1,
            name:"raju",
            city:"hyd"
        },

        {
            id:2,
            name:"krishna",
            city:"bng"
        },
        {
            id:3,
            name:"kumar",
            city:"kkd"
        }
        
    ]
    return(
        <div>
            {
                arr.map((e,index)=><li key={index}>Id:-{e.id} city:-{e.city} name:-{e.name} </li>)
            }
           
        </div>
    )
}
export default Map;