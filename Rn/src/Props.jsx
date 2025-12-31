// Its passes data from one component to another(parent to child)
import React from 'react'
import Propschild from './Propschild'

const Props = () => {
  let mydata={
    myname:"aditya",
    myage:"20",
    mycity:"Bhopal"
  }
  return (
    <>
    {/* <Propschild myname="Aditya" myage="20"></Propschild>
    <Propschild myname="Ayyush" myage="22"></Propschild> */}
    <Propschild Data={mydata}></Propschild>
    </>
  )
}

export default Props