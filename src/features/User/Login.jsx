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
          if(res?.data?.msg==="loginsuccess"){
            navigate("/dashboard")
          }
          else{
            navigate("/")
          }
        })
      }}
      >
        {
          (lo)=>{
            return (<Form>
              <Field name="username" type="text"></Field><br />
              <Field name="password" type="password"></Field><br />
              <button type='submit'>Login</button>
          </Form>)
          }
        }
      </Formik>
      <Link to="/signup">SignUp</Link>
    </div>
  )
}

export default Login

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Link, useNavigate } from 'react-router-dom';
// import { useLoginMutation } from '../../services/CrmApi';
// import * as Yup from 'yup';

// function Login() {
//   const navigate = useNavigate();
//   const [loginFN] = useLoginMutation();

//   // Form validation schema
//   const loginSchema = Yup.object().shape({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string().required('Password is required'),
//   });

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

//         <Formik
//           initialValues={{ username: '', password: '' }}
//           validationSchema={loginSchema}
//           onSubmit={async (values, { setSubmitting }) => {
//             try {
//               const res = await loginFN(values);
//               if (res?.data?.msg === 'loginsuccess') {
//                 localStorage.setItem('token', res?.data?.token);
//                 navigate('/dashboard');
//               } else {
//                 alert('Login failed');
//               }
//             } catch (error) {
//               alert('An error occurred');
//             }
//             setSubmitting(false);
//           }}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
//                 <Field name="username" type="text" className="border border-gray-300 p-2 rounded w-full" />
//                 <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                 <Field name="password" type="password" className="border border-gray-300 p-2 rounded w-full" />
//                 <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
//               </div>

//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Logging in...' : 'Login'}
//               </button>
//             </Form>
//           )}
//         </Formik>

//         <div className="text-center mt-4">
//           <Link to="/signup" className="text-blue-500 hover:underline">
//             Don't have an account? Sign up
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Link, useNavigate } from 'react-router-dom';
// import { useLoginMutation } from '../../services/CrmApi';
// import * as Yup from 'yup';

// function Login() {
//   const navigate = useNavigate();
//   const [loginFN] = useLoginMutation();

//   // Form validation schema
//   const loginSchema = Yup.object().shape({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string().required('Password is required'),
//   });

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

//         <Formik
//           initialValues={{ username: '', password: '' }}
//           validationSchema={loginSchema}
//           onSubmit={async (values, { setSubmitting }) => {
//             try {
//               const res = await loginFN(values);
//               if (res?.data?.msg === 'loginsuccess') {
//                 localStorage.setItem('token', res?.data?.token);
//                 navigate('/dashboard');
//               } else {
//                 alert('Login failed');
//               }
//             } catch (error) {
//               alert('An error occurred');
//             }
//             setSubmitting(false);
//           }}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
//                 <Field name="username" type="text" className="border border-gray-300 p-2 rounded w-full" />
//                 <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                 <Field name="password" type="password" className="border border-gray-300 p-2 rounded w-full" />
//                 <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
//               </div>

//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Logging in...' : 'Login'}
//               </button>
//             </Form>
//           )}
//         </Formik>

//         <div className="text-center mt-4">
//           <Link to="/signup" className="text-blue-500 hover:underline">
//             Don't have an account? Sign up
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
