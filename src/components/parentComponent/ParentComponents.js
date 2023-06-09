import React from 'react'
import ChildComponent from '../childComponent/ChildComponent';


 function ParentComponents() {

    const massege="Data Pass Parent to Childe Component";

    const onHandleClick=()=>{
        alert ("Button Clicked")
    }
  return (
    <>
    <ChildComponent massege={massege} handleClick={onHandleClick} />
    </>
  )
}
export default ParentComponents;
