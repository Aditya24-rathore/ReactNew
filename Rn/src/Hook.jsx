import React from 'react'
import { useState } from 'react'
const Hook = () => {
    let [count,setcount]=useState(0)
    let Dec=()=>{
        setcount(count-1)
        if(count<=0){
         setcount(0)
        }
    }

let Res=()=>{
        setcount(0)
    }

    console.log(count)
let Inc=()=>{
        setcount(count+1)
    }
    console.log(count)

  return (
    <>
    <h1>{count}</h1>
    <button onClick={Inc}>Increment</button>
    <button disabled={count <= 0} onClick={Dec}>Decrement</button>
    <button onClick={Res}>Reset</button>
    </>
  )
}

export default Hook