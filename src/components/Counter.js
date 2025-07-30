import React, { useState } from 'react'
const Counter=()=>{
const [count,setCount]=useState(0)
    return(
    <>
    <h1 data-testid='count'>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
)
}
export default Counter