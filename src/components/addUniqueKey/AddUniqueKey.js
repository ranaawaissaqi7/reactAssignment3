import React from 'react'

 function AddUniqueKey(props) {
    const cityName=props.cityName;
    console.log("CityName => ",cityName)
  return (
    <> <h1> AddUniqueKey Component</h1>
    <table border={"2px"}>
        <tr>
        <th>key</th>
        <th>cityName</th>
        </tr>
    {
    cityName.map((cityName,index)=>{
        return <>
        <tr>
            <td key={index+1}>{index+1}</td>
            <td>{cityName}</td>
        </tr>
        </>
    })
    }
    </table>
    <hr />
    </>

  )
}

export default AddUniqueKey;
