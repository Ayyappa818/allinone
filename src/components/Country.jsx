import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

function Country() {
    var [Countries,setCountries] = useState();
    React.useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res)=>{return res.json()})
        .then((data)=>{
            console.log(data)
            setCountries([...data])
        })
    },[])
  return (
    <div>
      <div style={{width:"500px"}}>
      {
        Countries?.map((c)=>{
            return <Link to={`countrydetails/${c.name.common}`}><li>{c.name.common}</li></Link>
        })
      }
    </div>
    <div>
      {/* <Outlet></Outlet> */}
    </div>
    </div>
  )
}

export default Country
