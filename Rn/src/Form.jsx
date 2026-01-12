import React, { useState } from 'react'

const Form = () => {
    let [name,setname]=useState("")
    let [age,setage]=useState("")
    let [email,setemail]=useState("")
    let handleChange=(e)=>{
        console.log(e.target.value)
        setname(e.target.value)
    }
    let handleChange1=(e1)=>{
        console.log(e1.target.value)
        setage(e1.target.value)
    }
  return (
    <>
    Enter Name: <input type="text" value={name} onChange={handleChange}/>
    Enter Age: <input type="number" value={age} onChange={handleChange1}/>
    Enter Email: <input type="email" value={email} onChange={(e)=>(setemail(e.target.value))}/>
   <h1>Hello my name is {name} and my age is {age}</h1>
   <h1>{email}</h1>
    </>
  )
}

export default Form