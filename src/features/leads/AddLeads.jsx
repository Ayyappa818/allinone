import React from 'react'
import { Formik,Form,Field } from 'formik'
import { useAddremarksByIdMutation } from '../../services/CrmApi'

function AddLeads() {
  var [AddFn]=useAddremarksByIdMutation();
  return (
    <div className='container'>
      <Formik initialValues={{
        name:String,
        experience:String,
        intrestedCourse:String,
        mode:String,
        academics:String,
        mobile:Number,
        email:String,
        address:String,
        referredBy:String,
        remarks:Array
    }}
      onSubmit={(values)=>{
        AddFn(values).then((res)=>{
          console.log(res)
        })
        console.log(values)
      }}
      >
        <Form>
        <div class="form-floating mb-3">
          <Field type="text" name="name" class="form-control" id="name" placeholder="name@example.com"></Field>
          <label for="name">Name</label>
        </div>
        <div class="form-floating mb-3">
          <Field type="text" name="experience" class="form-control" id="experience" placeholder="name@example.com"></Field>
          <label for="experience">Experience</label>
        </div>
        <div class="form-floating mb-3">
          <Field type="text" name="intrestedCourse" class="form-control" id="intrestedCourse" placeholder="name@example.com"></Field>
          <label for="intrestedCourse">IntrestedCourse</label>
        </div>
        <div class="form-floating mb-3">
          <Field type="text" name="mode"  class="form-control" id="mode" placeholder="name@example.com"></Field>
          <label for="mode">Mode</label>
        </div>
        <div class="form-floating mb-3">
          <Field type="text" name="academics" class="form-control" id="academics" placeholder="name@example.com"></Field>
          <label for="academics">Academics</label>
        </div>
        <div class="form-floating mb-3">
          <Field type="number" name="mobile" class="form-control" id="mobile" placeholder="name@example.com"></Field>
          <label for="mobile">mobile</label>
        </div>
        <div class="form-floating mb-3">
          <Field type="email" name="email" class="form-control" id="email" placeholder="name@example.com"></Field>
          <label for="email">Email</label>
        </div>
        <div class="form-floating mb-3">
          <Field type="text" name="address" class="form-control" id="address" placeholder="name@example.com"></Field>
          <label for="address">Address</label>
        </div>
        <div class="form-floating mb-3">
          <Field type="text" name="referredBy" class="form-control" id="referredBy" placeholder="name@example.com"></Field>
          <label for="referredBy">ReferredBy</label>
        </div>
        <div class="form-floating mb-3">
          <Field type="text" name="remarks" class="form-control" id="remarks" placeholder="name@example.com"></Field>
          <label for="remarks">remarks</label>
        </div>
        <button type='submit' class="btn btn-outline-primary">ADD Leads</button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddLeads
