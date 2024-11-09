import React from 'react'
import { Formik,Form,Field } from 'formik'
import { useAddremarksByIdMutation } from '../../services/CrmApi'
import { useParams } from 'react-router-dom';

function AddRemarks() {
  var {id}=useParams();
    var [addRemarksFn]=useAddremarksByIdMutation();
  return (
    <div className='container'>
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
    </div>
  )
}

export default AddRemarks
