import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';

function Details() {
  var [det,setDet]=useState()
    var Customerdetails = useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            age:"",
            gender:""
        },
        validationSchema:Yup.object({
            firstname:Yup.string().min(3,"Atlest 4 letters")
        }),
        onSubmit:(values)=>{
            console.log(values)
            
        }
    })
  return (
    <div className='continer'>
      <form onSubmit={Customerdetails.handleSubmit}>
      <input type="text" name="firstname"  onChange={Customerdetails.handleChange} onBlur={Customerdetails.handleBlur} />
      <b>{Customerdetails.errors.firstname}</b>
      <br />
      <input type="text" name="lastname" onChange={Customerdetails.handleChange} onBlur={Customerdetails.handleBlur}/>
      <br />
      <input type="text" name="age"  onChange={Customerdetails.handleChange} onBlur={Customerdetails.handleBlur}/>
      <br /> 
      <input type="text" name="gender"  onChange={Customerdetails.handleChange} onBlur={Customerdetails.handleBlur}/>
        <br />
        <button>Add</button>
      </form>
    </div>
  )
}

export default Details
