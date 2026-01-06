import React from 'react'

const App = () => {
    let courses=["mern","java","python"]
  return (
    <div>
       <ul>
        {courses.map((course)=>(
            <li>{course}</li>
        ))}
       </ul>
    </div>
  )
}

export default App