import React, { useState } from 'react'

const App = () => {
  let [mode,setmode]=useState(false)
  return (
    <>
    <div style={{height:"200px", width:"200px",backgroundColor:mode?"black":"white",color:mode?"white":"black",border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"30px",fontWeight:"900"}}>{mode?"Dark Mode":"Light Mode"}</div> <br />
    <button onClick={()=>{setmode(!mode)}}>{mode?"Set Light Mode":"Set Dark Mode"}</button>
    </>
  )
}

export default App