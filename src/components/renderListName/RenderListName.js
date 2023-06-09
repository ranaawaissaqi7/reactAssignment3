import React from 'react';
 function RenderListName() {
    const name=["Awais","Ali","Nadeem","Shoaib","Mubashir","Saqib"]
  return (
    <>
    <h1>RenderListName Component</h1>
    <ul>
        {
            name.map((name,index)=>{
                return <li key={index+1}>{name}</li>
            })
        }
    </ul>
    <hr />

    </>
    
  )
}
export default RenderListName; 
