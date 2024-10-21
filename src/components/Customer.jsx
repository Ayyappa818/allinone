import React, { useState } from 'react'
import { Formik,Form, Field } from 'formik'
function Customer() {
  var [cus,setCus]=useState([]);
  return (
    <div className="container d-flex flex-wrap justify-content-around">
      <div >
      <Formik initialValues={{
        firstname:"",
        lastname:"",
        age:"",
        gender:"",
        email:""
      }}
      onSubmit={(values)=>{console.log(values)
        setCus([...cus,values])
      }}
      >
        {
            (cd)=>{
                return <Form>
                  <Field name="firstname" placeholder='firstname'></Field>
                  <br />
                  <input type="text" name="" placeholder='lastname' {...cd.getFieldProps('lastname')} />
                  <br />
                  <input type="text" name="" placeholder='age' {...cd.getFieldProps('age')} />
                  <br />
                  <input type="radio" class="form-check-input" name="flexRadioDefault" id="flexRadioDefault1" {...cd.getFieldProps('gender')}  value="male" />:Male
                  <input type="radio" class="form-check-input" name="flexRadioDefault" id="flexRadioDefault1" {...cd.getFieldProps('gender')}  value="female" />:Female
                  <input type="radio" class="form-check-input" name="flexRadioDefault" id="flexRadioDefault1" {...cd.getFieldProps('gender')}  value="others" />:Others
                  <br />
                  <input type="email" placeholder='email' name="" {...cd.getFieldProps('email')} />
                  <br />
                  <button type='submit' class="btn btn-warning">Add</button>
                </Form>
            }
        }
      </Formik>
      </div>
      <div>
      <table className='table table-striped table-bordered border-primary'>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {cus.map((d)=>{
            return <tr>
              <td>{d.firstname}</td>
              <td>{d.lastname}</td>
              <td>{d.age}</td>
              <td>{d.gender}</td>
              <td>{d.email}</td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Customer
