import "./App.css"
// Using Named Export
import { Footer1, Footer2 } from "./Footer1"


let Footer=()=>{
    // using external css
    return(
        <>
        <h1 id="foot">This is footer</h1>
        <Footer1></Footer1>
        <Footer2></Footer2>
        </>
    )
}
export default Footer