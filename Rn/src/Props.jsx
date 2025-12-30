// Its passes data from one component to another(parent to child)
import React from 'react'
import Propschild from './Propschild'

const Props = () => {
  return (
    <>
    <Propschild myname="Aditya" myage="20"></Propschild>
    </>
  )
}

export default Props