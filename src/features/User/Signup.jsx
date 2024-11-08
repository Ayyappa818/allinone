import React from 'react'
import { Formik,Form,Field } from 'formik'
import { Link } from 'react-router-dom'
import { useSignupMutation } from '../../services/CrmApi'


function Signup() {
    var[SignupFn]=useSignupMutation();
  return (
    <div className='container'>
      <Formik initialValues={{username:"",password:""}}
      onSubmit={(values)=>{
        // console.log(values)
        SignupFn(values).then((res)=>{console.log(res)})
      }}
      >
        {
          (hi)=>{
            return (<Form>
              <Field name="username" type="text"></Field><br />
              <Field name="password" type="password"></Field><br />
              <button type='submit'>Signup</button>
          </Form>)
          }
        }
      </Formik>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Signup
