import { useState } from 'react';
import { useDelLeadsMutation, useEditLeadsMutation, useGetLeadsQuery, useLazyGetLeadsQuery } from '../../services/CrmApi';
import { Link } from 'react-router-dom';

function LeadMaster() {
  var [getLeadsFn]=useLazyGetLeadsQuery();
    var {isLoading,data}=useGetLeadsQuery();
    var [DelLeadsFn]=useDelLeadsMutation();
    var [EditLeadsFn]=useEditLeadsMutation();
    var [search,setSearch]=useState('')
    function editlead(id){
      // EditLeadsFn(id)
    }
     function delLeads(id){
      DelLeadsFn(id)
      getLeadsFn();
    }
    console.log(isLoading)
    console.log(data)
    
    // function search(dta){
    //   var dta=dta.split('')
    //   dta[0]=dta[0].toUpperCase();
    //   var dta=dta.join('')
    //   var x=data?.filter((e)=>{
    //     console.log(e.name==dta)
    //   })
    //   console.log(x)
    //   console.log(dataa)
    //   setDataa([...x])
    // }
    function Find(na){
      return na.name.toLowerCase().includes(search.toLowerCase())
    }
    var serching = data?.filter(Find)
  return (
    <div>
      {
        isLoading && <h1>Loading.....</h1>
      }

      <table class="table table-striped table-hover table-dark" border={"2px solid"}>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Course</th>
                {/* <th>Mode</th> */}
                <th>Mobile No.</th>
                {/* <th>Address</th> */}
                <th>About More...</th>
                <th><input type="text" name="" id="" value={search} onChange={(e)=>{setSearch(e.target.value)}}/></th>
            </tr>
        </thead>
        <tbody>
      {
        !isLoading && serching?.map((l,i)=>{
          console.log(l)
            return <tr>
                {/* <td>{l._id}</td> */}
                <td>{i}</td>
                <td>{l.name}</td>
                <td>{l.intrestedCourse}</td>
                {/* <td>{l.mode}</td> */}
                <td>{l.mobile}</td>
                {/* <td>{l.address}</td> */}
                <td><Link to={`/dashboard/aboutlead/${l._id}`}><i class="bi bi-person-vcard fs-4 mx-4"></i></Link></td>
                <td><i onClick={()=>{delLeads(l._id)}} class="fs-5 bi bi-trash3-fill text-danger"></i> <i onClick={()=>{editlead(l._id)}} class="fs-5 bi bi-pencil-square text-light"></i></td>
            </tr>
        })
      }
      </tbody>
      </table>
    </div>
  )
}

export default LeadMaster
