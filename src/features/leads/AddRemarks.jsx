import React from 'react'
import { Formik,Form,Field } from 'formik'
import { useAddremarksByIdMutation } from '../../services/CrmApi'
import { useParams } from 'react-router-dom';

function AddRemarks() {
  var {id}=useParams();
    var [addRemarksFn]=useAddremarksByIdMutation();
  return (
    <div className='container'>
      <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalTour">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-body p-5">
        {/* <h2 class="fw-bold mb-0">Login</h2> */}
        <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient rounded-circle mb-3" style={{width:'50px',height:'50px'}}>
          <i class="bi bi-hand-thumbs-up fs-1"></i>
        </div>
      </div>
      <Formik initialValues={{response:"",name:""}}
      onSubmit={(values)=>{
        console.log(values)
        addRemarksFn({remarks:values,id}).then(res=>{
          console.log(res)
        })
      }}
      >
        {
          (rem)=>{
            return (<Form>
              <div class="form-floating mb-3">
                <Field type="text" name="response" class="form-control" id="response" placeholder="name@example.com"></Field><br />
                <label for="response">Response</label>
              </div>
              <div class="form-floating mb-3">
                <Field type="text" name="name"  class="form-control" id="name" placeholder="name@example.com"></Field><br />
                <label for="name">Name</label>
              </div>
              <button className='btn btn-primary' type='submit'>Add Remarks</button>
          </Form>)
          }
        }
      </Formik>

{/* 
<div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h1 class="fw-bold mb-0 fs-2">Sign up for free</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="">
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
          <hr class="my-4">
          <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
          <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#twitter"></use></svg>
            Sign up with Twitter
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook"></use></svg>
            Sign up with Facebook
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#github"></use></svg>
            Sign up with GitHub
          </button>
        </form>
      </div>
    </div>
  </div>
</div> */}
 </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AddRemarks
