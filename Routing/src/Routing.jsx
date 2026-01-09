import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from './Layout'
import About from './About'
import Home from './Home'
import Contact from './Contact'
const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>

        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>

        </Route>
    </Routes>
    </>
  )
}

export default Routing