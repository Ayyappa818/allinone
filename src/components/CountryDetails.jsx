import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function CountryDetails() {
    var x = useParams()
    console.log(x)
    var [details,setDetails]=useState()
    useEffect(()=>{
      fetch(`https://restcountries.com/v3/names/${x.cname}`)
      .then(res=>res.json())
      .then(data=>{
        setDetails({...data[0]})
      })
    },[x.cname])
  return (
    <div>
      <h1>CountryDetails</h1>
      <h1>{x.cname}CountryDetails</h1>
     
    </div>
  )
}

export default CountryDetails
