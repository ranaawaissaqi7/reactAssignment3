import React from 'react'

export default function ResUseAbleListComponent(props) {
    let cityName=props.cityName
    console.log("cityName =>",cityName)
  return (
    <>
    <h1>ResUseAbleListComponent</h1>

    <ul>
        {cityName.map((items,index)=>{
            return <>
            <li>{items}</li>
            </>
        })}
    </ul>
    <hr />
    </>
  )
}
