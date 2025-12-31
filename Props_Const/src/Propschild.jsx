import React from 'react'
import "./Props.css"
const Propschild = ({myimg,myprice,mydes}) => {
  return (
    <>
    <div id='main'>
          <img src={myimg} alt="" />
          <p>Price : {myprice}</p>
          <p>{mydes}</p>
          <button>Buy Now</button>
        </div>
    </>
  )
}

export default Propschild