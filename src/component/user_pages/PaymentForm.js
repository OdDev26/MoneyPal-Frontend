import React, { Component } from 'react'
import {connect} from 'react-redux'
import {payForService} from '../../actions/projectActions'
import PropTypes from 'prop-types'
class PaymentForm extends Component {
  constructor(){
      super()
      this.state={
          amount:"",
          senderWalletName:"",
          receiverWalletName:"",
          invoiceNo:""
      }
      this.onChange=this.onChange.bind(this)
      this.onSubmit= this.onSubmit.bind(this)
  }  
  onChange(e){
      this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
      e.preventDefault()
      const payload={
          "amount":this.state.amount,
          "senderWalletName":this.state.senderWalletName,
          "receiverWalletName":this.state.receiverWalletName,
          "invoiceNo":this.state.invoiceNo
      }
        this.props.payForService(payload,this.props.history)
    
     
  }
  render() {
    return (
      <div  style={{"textAlign":"center"}}>
      <h2 style={{"color":"red"}}>Payment Form</h2>
      <form  onSubmit={this.onSubmit}>
      <div className='form-group-payment-form'>
      <input style={{"width":'30rem'}} type="text" name='amount' placeholder='amount' className="form-control form-control-lg" value={this.state.amount} onChange={this.onChange}/>
     <div className='payment-form-error'><span style={{"color":"red"}}>{this.props.errors.amount}</span> <br/>
      <input style={{"width":'30rem'}} type="text" name='senderWalletName' placeholder='your wallet name' className="form-control form-control-lg" value={this.state.senderWalletName} onChange={this.onChange}/><br/>
    <div className='payment-form-error'><span style={{"color":"red"}}>{this.props.errors.senderWalletName}</span></div>
      <input style={{"width":'30rem'}} type="text" name='receiverWalletName' placeholder='receiver wallet name' className="form-control form-control-lg" value={this.state.receiverWalletName} onChange={this.onChange}/><br/>
      <div className='payment-form-error'><span style={{"color":"red"}}>{this.props.errors.receiverWalletName}</span> <br/>
      <input style={{"width":'30rem'}} type="text" name='invoiceNo' placeholder='invoice no' className="form-control form-control-lg" value={this.state.invoiceNo} onChange={this.onChange}/>
      <div className='payment-form-error'><span style={{"color":"red"}}>{this.props.errors.invoiceNo}</span> <br/>
    <input style={{"width":'30rem'}} type="submit" className='btn btn-danger btn-block mt-4'/>
      </div>
      </div>
      </div>
      </div>
    </form>
      </div>
    )
  }
}
PaymentForm.propTypes={
    payForService: PropTypes.func.isRequired
}

const mapStateToProps=state=>({
   errors: state.errors
})

export default connect(mapStateToProps, {payForService}) (PaymentForm)
