import React from 'react'
import { useGetLeadsQuery } from '../../services/CrmApi';

function LeadMaster() {
    var {isLoading,data}=useGetLeadsQuery();
    console.log(isLoading)
    console.log(data)
  return (
    <div>
      {
        isLoading && <h1>Loading.....</h1>
      }
      <table class="table table-striped table-hover table table-dark table-hover" border={"2px solid"}>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Course</th>
                <th>Mode</th>
                <th>Mobile No.</th>
                <th>Adress</th>
            </tr>
        </thead>
        <tbody>
      {
        !isLoading && data?.map((l,i)=>{
            return <tr>
                <td>{i}</td>
                <td>{l.name}</td>
                <td>{l.intrestedCourse}</td>
                <td>{l.mode}</td>
                <td>{l.mobile}</td>
                <td>{l.address}</td>
                <td><button class="btn btn-danger">Delete</button></td>
            </tr>
        })
      }
      </tbody>
      </table>
    </div>
  )
}

export default LeadMaster
