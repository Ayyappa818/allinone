import React from 'react'
import { Formik,Form,Field } from 'formik'

function Login() {
  return (
    <div>
      <Formik initialValues={{username:"",password:""}}
      onSubmit={(values)=>{
        console.log(values)
      }}
      >
        <Form>
            <Field name="user" type="text"></Field>
            <Field name="password" type="password"></Field>
            <button type='submit'>Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login
