import React, { Component } from 'react'

export default class AdminServicesView extends Component {
  render() {
    const {service}= this.props
    return (
      <div className="card card-body bg-light mb-3 text-center" style={{width:'30rem'}}>
        <div className="col-lg-6 col-md-4 col-8 text-center ">
                  <h3 style={{color:"blue"}}>{service.serviceName}</h3>
              </div>
              </div>
          
    )
  }
}
