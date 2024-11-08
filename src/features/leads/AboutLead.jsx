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
        !isLoading && (<div className='d-flex'>
          <div className='w-50'>
            {data?.name}
            </div>
            {/* <div> */}
              <ul className='w-50' style={{listStyle:"none"}}>
              {
                data?.remarks?.map((ab)=>{
                  return <li>
                    {typeof(ab)==="string" && (
                      <div className='bg-info p-2 px-3 rounded'>{ab}</div>
                    )}
                    {typeof(ad)==="object" && (
                      <div className='d-flex bg-light roundded border border-2 p-2 m-2 justify-content-evently'>
                        <div className='bg-info p-2 px-3 rounded'>{ab.response}</div>
                        <div className='bg-primary p-2 px-3 rounded'>{ab.name}</div>
                        <div className='bg-secondary p-2 px-3 rounded'>
                          {new Date(ab.timestamp).toDateString()}
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          {new Date(ab.timestamp).toLocaleTimeString()}
                          </div>
                      </div>
                    )}
                  </li>
                })
              }
              </ul>
            {/* </div> */}
        </div>)
      }
    </div>
  )
}

export default AboutLead
