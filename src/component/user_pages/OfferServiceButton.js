import React,{Component} from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

 class OfferServiceButton extends Component {
   render(){
     const {serviceName}= this.props
    return (
      <div>
    <Link to={`/offer/service/${serviceName}`} className='btn btn-primary' placeholder='Offer Service' style={{"width":"9rem","marginBottom":"0px"}}>
    Offer service
      </Link>
      </div>
  )
}
 }
 

export default OfferServiceButton