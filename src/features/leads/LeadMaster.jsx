import React from 'react'
import { useDelLeadsMutation, useEditLeadsMutation, useGetLeadsQuery } from '../../services/CrmApi';

function LeadMaster() {
    var {isLoading,data}=useGetLeadsQuery();
    var [DelLeadsFn]=useDelLeadsMutation();
    var [EditLeadsFn]=useEditLeadsMutation();
    function editlead(id){
      // EditLeadsFn(id)
    }
     function delLeads(id){
      DelLeadsFn(id)
    }
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
                <th></th>
            </tr>
        </thead>
        <tbody>
      {
        !isLoading && data?.map((l,i)=>{
            return <tr>
                {/* <td>{l._id}</td> */}
                <td>{i}</td>
                <td>{l.name}</td>
                <td>{l.intrestedCourse}</td>
                <td>{l.mode}</td>
                <td>{l.mobile}</td>
                <td>{l.address}</td>
                <td><i onClick={()=>{delLeads(l._id)}} class="fs-5 bi bi-trash3-fill text-danger"></i> <i onClick={()=>{editlead(l._id)}} class="fs-5 bi bi-pencil-square text-success"></i></td>
            </tr>
        })
      }
      </tbody>
      </table>
    </div>
  )
}

export default LeadMaster
