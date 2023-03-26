import React from 'react';
function Filter ()
{
    const name=['hello','good','bad','mad'];
    const Filtered = name.filter(hello=>hello.includes('o'))
    return (
        <div>
            <h2>{Filtered}</h2>
        </div>
    )
}
export default Filter;