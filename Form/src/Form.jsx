import { useState } from "react"

let Form=()=>{
    let [form,setform]=useState({
        myname:"",
        myage:"",
        mycity:"",
        mycontact:""
    })

    let handlechange=(e)=>{
        setform({ ...form,[e.target.name]:e.target.value})
    }
return(
<>
<h1>Form handling</h1>
<h1>{form.myname}</h1>
Enter Name: <input type="text" name="myname" value={form.myname} onChange={handlechange}/>
Enter Age: <input type="text" name="myage" value={form.myage} onChange={handlechange}/>
Enter City: <input type="text" name="mycity" value={form.mycity} onChange={handlechange}/>
Enter Contact: <input type="text" name="mycontact" value={form.mycontact} onChange={handlechange}/>
</>
)
}
export default Form