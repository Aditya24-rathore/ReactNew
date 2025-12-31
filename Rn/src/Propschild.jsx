import React from 'react'

const  Propschild= (Props) => {
    // let {myname,myage}=props
    
  return (
    <div>
        {/* <h1>My name is {props.myname}</h1>
        <h3>My age is {props.myage}</h3> */}
        {/* <h1>My name is {myname}</h1>
        <h3>My age is {myage}</h3> */}
       <h1>My name is {Props.Data.myname}</h1>
    </div>
  )
}

export default Propschild