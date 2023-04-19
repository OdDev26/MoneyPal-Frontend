import React, { Component } from 'react'
import OfferServiceButton from './OfferServiceButton'
import RequestServiceButton from './RequestServiceButton'

export default class UserServiceView extends Component {
  render() {
    const {service}= this.props
    return (
      
    <div className="card card-body bg-light mb-3 text-center" style={{width:'30rem'}}>
        <div className="col-lg-6 col-md-4 col-8 text-center">
                <h3 style={{color:"blue"}}>{service.serviceName}</h3>
               
               
      <OfferServiceButton serviceName={service.serviceName} /><br/>
    <RequestServiceButton serviceName={service.serviceName}/>

        </div>
        </div>
          
    )
  }
}
