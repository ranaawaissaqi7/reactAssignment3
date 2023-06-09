import React from 'react'

 function ChildComponent(props) {
  return (
    <>
    <h1>{props.massege}</h1>
    <hr />

    <h1>Task Number 7 pass Funtion Parent to Childe</h1>

    <button onClick={props.handleClick}>Click Me</button>
    
    </>
  )
}
export default ChildComponent;
