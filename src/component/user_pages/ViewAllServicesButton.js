import React from 'react'
import {Link} from 'react-router-dom'

export default function ViewAllServicesButton() {
  return (
    <div>
    <Link className='btn btn-lg btn-info' style={{"width":"20rem"}} to="/viewAllServices">View All Services</Link>
    </div>
  )
}
