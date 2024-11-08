import React from 'react'
import { useAboutLeadsQuery } from '../../services/CrmApi'
import { useParams } from 'react-router-dom';

function AboutLead() {
    var {id} = useParams();
    var {isLoading,data} = useAboutLeadsQuery(id);
    console.log(isLoading,data)
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default AboutLead
