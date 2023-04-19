import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import BillingInfoHeader from '../Layout/BillingInfoHeader';
import UserFooter from '../Layout/UserFooter';


class BillingInfo extends Component {
    onSubmit(e){
        e.preventDefault()
        const billing= this.props.billingInfo
        console.log(billing)
    }
    render() {
        const {serviceRequestResponse}= this.props.billingInfo
    
        return (
            <div>
            <BillingInfoHeader/>
            <div className="card card-body bg-light mb-3 text-left" style={{width:'60rem'}}>
            <h3 style={{color:"black"}}><span>Invoice no: </span>{serviceRequestResponse.invoice}</h3>
            </div>
            
            <div className="card card-body bg-light mb-3 text-left" style={{width:'30rem'}}>
            <h3 style={{color:"black"}}><span>Service: </span>{serviceRequestResponse.service}</h3>
            </div>
            <div className="card card-body bg-light mb-3 text-left" style={{width:'30rem'}}>
            <h3 style={{color:"black"}}><span>Provider phone no: </span>{serviceRequestResponse.provider}</h3><br/>
            </div>
            <h4 style={{color:"red"}}>Disclaimer: Pls copy the invoice no, you would need it to pay for this service. Contact provider for price </h4>
            <UserFooter/>
            </div>      
        )
    }
}
BillingInfo.propTypes={
    billingInfo:PropTypes.object.isRequired
}
const mapStateToProps= state=>({
    billingInfo: state.serviceRequestResponse
})
export default connect(mapStateToProps)(BillingInfo)