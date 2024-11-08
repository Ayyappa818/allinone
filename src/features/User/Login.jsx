import React from 'react'
import { Formik,Form,Field } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../services/CrmApi'

function Login() {
  var navigate=useNavigate();
    var[LoginFN]=useLoginMutation();
  return (
    <div className='container'>
      <Formik initialValues={{username:"",password:""}}
      onSubmit={(values)=>{
        // console.log(values)
        LoginFN(values).then((res)=>{
        console.log(res)
          window.localStorage.setItem("token",res?.data?.token)
          navigate("/")
        })
      }}
      >
        <Form>
            <Field name="username" type="text"></Field><br />
            <Field name="password" type="password"></Field><br />
            <button type='submit'>Login</button>
        </Form>
      </Formik>
      <Link to="/signup">SignUp</Link>
    </div>
  )
}

export default Login
