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

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Link } from 'react-router-dom';
// import { useSignupMutation } from '../../services/CrmApi';
// import * as Yup from 'yup';

// function Signup() {
//   const [SignupFn] = useSignupMutation();

//   // Form validation schema using Yup
//   const signupSchema = Yup.object().shape({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
//   });

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

//         <Formik
//           initialValues={{ username: '', password: '' }}
//           validationSchema={signupSchema}
//           onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
//             try {
//               const res = await SignupFn(values);
//               if (res?.data?.success) {
//                 alert('Signup successful! Please login.');
//                 resetForm();
//               } else {
//                 setErrors({ general: res?.data?.message || 'Signup failed' });
//               }
//             } catch (error) {
//               setErrors({ general: 'An error occurred during signup' });
//             }
//             setSubmitting(false);
//           }}
//         >
//           {({ isSubmitting, errors }) => (
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

//               {errors.general && <div className="text-red-500 text-sm mb-4">{errors.general}</div>}

//               <button
//                 type="submit"
//                 className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600 transition"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Signing up...' : 'Signup'}
//               </button>
//             </Form>
//           )}
//         </Formik>

//         <div className="text-center mt-4">
//           <Link to="/login" className="text-blue-500 hover:underline">
//             Already have an account? Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Link } from 'react-router-dom';
// import { useSignupMutation } from '../../services/CrmApi';
// import * as Yup from 'yup';

// function Signup() {
//   const [SignupFn] = useSignupMutation();

//   // Form validation schema using Yup
//   const signupSchema = Yup.object().shape({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
//   });

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

//         <Formik
//           initialValues={{ username: '', password: '' }}
//           validationSchema={signupSchema}
//           onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
//             try {
//               const res = await SignupFn(values);
//               if (res?.data?.success) {
//                 alert('Signup successful! Please login.');
//                 resetForm();
//               } else {
//                 setErrors({ general: res?.data?.message || 'Signup failed' });
//               }
//             } catch (error) {
//               setErrors({ general: 'An error occurred during signup' });
//             }
//             setSubmitting(false);
//           }}
//         >
//           {({ isSubmitting, errors }) => (
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

//               {errors.general && <div className="text-red-500 text-sm mb-4">{errors.general}</div>}

//               <button
//                 type="submit"
//                 className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600 transition"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Signing up...' : 'Signup'}
//               </button>
//             </Form>
//           )}
//         </Formik>

//         <div className="text-center mt-4">
//           <Link to="/login" className="text-blue-500 hover:underline">
//             Already have an account? Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;
