import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    let navigate=useNavigate()
    let okk=()=>{
        navigate("/contact")
    }
  return (
    <div><h1>This is home</h1>
    <button onClick={okk}>go to contact</button>
    <p onClick={okk}>Go to contact</p>
    </div>
  )
}

export default Home