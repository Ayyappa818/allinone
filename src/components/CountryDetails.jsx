import React, { useEffect, useState } from 'react';
import { useParams,useLocation } from 'react-router-dom';

function CountryDetails() {
  var [d,setD]=React.useState({})
  // console.log(d.population)
    var x = useParams()
    console.log(x)
   
    useEffect(function(){
      fetch(`https://restcountries.com/v3/name/${x.cname}`).then(function(res){
        res.json().then(function(data){
          // console.log(data)
          setD({...data[0]})
        })
      })
    },[])
  return (
    <div>
      <h1>CountryDetails</h1>
      <h1>{x.cname}CountryDetails</h1>

      <h1>{d.population}</h1>
         
        {/* <img src={d.flags} alt="" width="200px"/> */}
    </div>
  )
}

export default CountryDetails;
