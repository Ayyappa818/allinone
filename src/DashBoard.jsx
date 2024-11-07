import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetLeadsQuery } from './services/CrmApi';

function DashBoard() {
    var navigate=useNavigate()
    var {isLoading,data}=useGetLeadsQuery();
    console.log(isLoading)
    console.log(data)
    function Logout(){
        window.localStorage.clear();
        navigate("/")
    }
  return (
    <div>
      <h1>DashBoard</h1>
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
        data?.map((l,i)=>{
            return <tr>
                <td>{i}</td>
                <td>{l.name}</td>
                <td>{l.intrestedCourse}</td>
                <td>{l.mode}</td>
                <td>{l.mobile}</td>
                <td>{l.address}</td>
            </tr>
        })
      }
      </tbody>
      </table>
      <button onClick={()=>{Logout()}}>Logout</button>
    </div>
  )
}

export default DashBoard
