import Navbar from "./Navbar"
import Footer from "./Footer"
import "./App.css"
import img from "./assets/react.svg"

let App=()=>{
  return(
    <>
    <Navbar/>
    <h1 className="app">Hello World</h1>
    {/* assests img control by react */}
    <img src={img} alt="" />
     {/* public img control by browser */}
    <img src="./public/vite.svg" alt="" />
    <Footer/>
    </>
  )
}

export default App