import React from 'react'
import { useAboutLeadsQuery } from '../../services/CrmApi'
import { Link, useParams } from 'react-router-dom';

function AboutLead() {
    var {id} = useParams();
    var {isLoading,data} = useAboutLeadsQuery(id);
    console.log(isLoading,data)
  return (
    <div className='container'>
      <b>Lead Detatils</b>
      <Link to={`/dashboard/addremark/${id}`}><button className='btn btn-success'>+Add Remarks</button></Link>
      {
        isLoading && <p>IsLoading...</p>
      }
      {
        !isLoading && (<div className='d-flex w-75 border border-secondary rounded p-2 me-2 shadow'>
          <div className='w-50'>
            <ul class="list-group">
              <li class="list-group-item"><b>Name</b>: {data?.name}</li>
              <li class="list-group-item"><b>IntrestedCourse</b>: {data?.intrestedCourse}</li>
              <li class="list-group-item"><b>Mode</b>: {data?.mode}</li>
              <li class="list-group-item"><b>Mobile</b>: {data?.mobile}</li>
              <li class="list-group-item"><b>Address</b>: {data?.address}</li>
            </ul>
            </div>
            <div>
            {
                data?.remarks?.map((ab)=>{
                  return <li style={{listStyle:'none'}}>
                  <div>
                    {typeof(ab)==="string" && (
                      <p className='bg-info p-2 rounded'>{ab}</p>
                    )}
                  </div>
                  <div>
                    {typeof(ab)==="object" && (
                      <div className='d-flex bg-light rounded border border-info mb-2 justify-content-between p-1'>
                        <div className='bg-info p-2 rounded'>{ab.response}</div>
                        <div className='bg-primary p-2 rounded'>{ab.name}</div>
                        <div className='bg-secondary p-2 rounded'>
                          {new Date(ab.timestamp).toDateString()}
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          {new Date(ab.timestamp).toLocaleTimeString()}
                          </div>
                      </div>
                    )}
                  </div>
                  </li>
                })
              }
            </div>
        </div>)
      }
    </div>
  )
}

export default AboutLead
