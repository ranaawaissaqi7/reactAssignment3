import React from 'react'

 function Task4(props) {
    let items=props.items;
    console.log("item => ",items)
  return (
    <>
    <h1>Task 4</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
        </tr>
    {
        items.map((items,index)=>{
            return <>
            <tr key={items.id}>
                <td key={index} >{items.id}</td>
                <td  >{items.name}</td>
                <td >{items.age}</td>
                <td  >{items.gender}</td>
            </tr>   
            </>
        })
    }
    </table>
   <hr />
    </>
  )
}
export default Task4;
