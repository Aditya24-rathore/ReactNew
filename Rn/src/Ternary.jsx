import React, { useState } from 'react'

const Ternary = () => {
    let [dark,setdark]=useState(false)
  return (
    <>
    <h1 style={{backgroundColor:dark?"black":"white",color:dark?"white":"black"}}>{dark?"darkmode":"Lightmode"}</h1>
    <button onClick={()=>{setdark(!dark)}}>{dark?"Lightmode":"Darkmode"}</button>
    </>
  )
}

export default Ternary