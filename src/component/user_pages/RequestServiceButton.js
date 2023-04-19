import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RequestServiceButton extends Component {
  render(){
    const {serviceName}= this.props
  return (
  <div>
 <Link to={`/request/service/${serviceName}`} className='btn btn-danger'  style={{"width":"9rem"}}>Request Service</Link>
    
    </div>
  )
}
}
export default RequestServiceButton
