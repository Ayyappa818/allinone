import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';

function Details() {
    var [x,setX]=useState([])
    var forms=useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            age:"",
            gender:"",
            email:""
        },
        validationSchema:Yup.object({
            firstname:Yup.string().min(3,"atlest 3 letters")
        }),
        onSubmit: (values) =>{
            console.log(values)
            setX([...x,values])  
        }
         
    })
    // console.log(x)
    console.log(forms)
  return (
    <div className='container'>
        <form onSubmit={forms.handleSubmit}>
            <div className="d-flex flex-wrap justify-content-around">
            <div>
            <input type="text" className='form-control w-100 input1' placeholder='FirstName' name='firstname' {...forms.getFieldProps('firstname')} />
            <b>{forms.errors.firstname}</b>
            <br />
            <input type="text" className='form-control w-100 input2' placeholder='LastName'   {...forms.getFieldProps('lastname')} />
            <br />
            <input type="text" className='form-control w-100 input3' placeholder='Age'  {...forms.getFieldProps('age')} />
            <br />
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  {...forms.getFieldProps('gender')} value="male" />:Male
            <input type="radio" class="form-check-input"  name="flexRadioDefault" id="flexRadioDefault1" {...forms.getFieldProps('gender')} value="female"/>:Female
            <input type="radio" class="form-check-input" name="flexRadioDefault" id="flexRadioDefault1"  {...forms.getFieldProps('gender')} value="others"/>:Others
            <br />
            <input type="text" className='form-control w-100 input5' placeholder='Email' {...forms.getFieldProps('email')} />
            <br />
            <button className='btn btn-info' type="submit">register</button>
            </div>
            <div>
            <table className='table table-striped table-bordered border-primary'>
                <thead>
                    <tr>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>email</th> 
                    </tr>
                </thead>
                <tbody>
               {
                x.map((d)=>{
                    return<tr>
                           <td>{d.firstname}</td>
                            <td>{d.lastname}</td>
                            <td>{d.age}</td>
                            <td>{d.gender}</td>
                            <td>{d.email}</td>
                           </tr>
                })
               }
               </tbody>
            </table>
            </div>
            </div>
    </form>
   
      
    </div>
  )
}

export default Details
