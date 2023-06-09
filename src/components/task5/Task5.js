import React from 'react'

 function Task5() {
    
    let filteredItems=["awais","ilyas","saqi","papa"]
    let searchTerm=null
    
   const  onSubmitHandler=()=>{
    let search=document.getElementById("search").value;
    console.log("search => ",search)

    const filterHandler=()=>{
        let filter=filteredItems.filter((items,index)=>{
         return items===search
        })
        console.log("filter =>",filter)
        searchTerm=filter
    }

 //   const filteredItems = filterdList(search);
 //   searchTerm=filteredItems;
 filterHandler()
   
   }
  
  
 

   
 //  const filterdList=(searchTerm)=>{
 //   const filteredItems=searchTerm.filter((item)=>
 //       item.toLowerCase().includes(searchTerm.toLowerCase())
 //   )
 //   return filteredItems;
 //  }
  return (
    <>
    
    <h1>Task 5</h1>
    <input type="text" placeholder='Enter Search Value' id='search' />
    <button onClick={onSubmitHandler}>Submit</button>
    <h1>{searchTerm}</h1>
    <hr />    
    </>
  )
}
export default Task5;
