import React from 'react'
import { useState } from 'react'
const Usestate = () => {
    let [count,setcount]=useState(0)
    let inc=()=>{
       setcount(count+1)
    }

    let dec=()=>{
       setcount(count-1)
    }

    let res=()=>{
       setcount(0)
    }

  return (
   <>
   <h1>{count}</h1>
   <button onClick={inc}>Increment</button> 
   <button onClick={dec} disabled={count<=0}>Decrement</button> 
   <button onClick={res}>Reset</button> 
   </>
  )
}

export default Usestate