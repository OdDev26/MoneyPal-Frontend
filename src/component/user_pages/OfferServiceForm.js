import React, { Component } from 'react'
import {offerService} from '../../actions/projectActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import UserFooter from '../Layout/UserFooter'


 class OfferServiceForm extends Component {
     constructor(){
         super()
         this.state={
             email:"",
             serviceName:""
         }
         this.onChange= this.onChange.bind(this)
         this.onSubmit= this.onSubmit.bind(this)
     }
     onChange(e){
         this.setState({[e.target.name]:e.target.value})
     }
     onSubmit(e){
         e.preventDefault()
         const payload={"email":this.state.email,
        "serviceName":this.state.serviceName}
        this.props.offerService(payload,this.props.history)

     }
     componentDidMount(){
       const {serviceName}= this.props.match.params
       this.setState({serviceName: serviceName})
     }
  render() {
    return (
      <div>
        <div className='container'>
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
        <h2 style={{"color":"blue"}}>Offer service form</h2>
        <input style={{"width":'30rem'}} type="text" name='email' placeholder='email' className="form-control form-control-lg" value={this.state.email} onChange={this.onChange}/><br/>
        <input style={{"width":'30rem'}} type="text" name='serviceName' placeholder='service name' className="form-control form-control-lg"  value={this.state.serviceName} onChange={this.onChange}/>
       <input style={{"width":'30rem'}} type="submit" className='btn btn-primary btn-block mt-4'/>
        </div>
      </form>
      </div>
      <UserFooter/>
      </div>
    )
  }
}

OfferServiceForm.propTypes={
    offerService:PropTypes.func.isRequired
}

export default connect(null,{offerService}) (OfferServiceForm)