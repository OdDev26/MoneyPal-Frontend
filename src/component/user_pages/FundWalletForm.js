import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fundWallet} from '../../actions/projectActions'


 class FundWalletForm extends Component {
    constructor(){
        super()
        this.state={
            walletName:"",
            amount:"",
            errors:{}
        }
      this.onChange= this.onChange.bind(this)  
      this.onSubmit= this.onSubmit.bind(this)
    }
  onChange(e){
      this.setState({[e.target.name]:e.target.value})
  } 

  delay(){
    const response=(<h1>Funding successful</h1>)
    return response;
  }
  onSubmit(e){
      e.preventDefault()
      const fundingDetails= {"walletName":this.props.match.params.walletName,"amount":this.state.amount}
      this.props.fundWallet(fundingDetails,this.props.history)
  }
  componentWillReceiveProps(nextProps){
      if(nextProps.funding_errors){
        this.setState({errors:nextProps.funding_errors})
      }
  }
  render() {
    const {errors}= this.state
    return (
      <div>
      <div className='container'>
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
        <h2 style={{"color":"red"}}>Fund Wallet Form</h2>
        <input style={{"width":'30rem'}} type="text" name='walletName' placeholder='wallet name' className="form-control form-control-lg"
       value={this.props.match.params.walletName} onChange={this.onChange}/>
     <br/>
        <input style={{"width":'30rem'}} type="text" name='amount' placeholder='amount' className="form-control form-control-lg"value={this.state.amount} onChange={this.onChange}/>
        <div><span style={{"color":"red"}}>{errors.amountErrorMessage}</span></div>
      <input style={{"width":'30rem'}} type="submit" className='btn btn-danger btn-block mt-4'/>
        </div>
      </form>
      </div>
      </div>
    )
  }

}
FundWalletForm.propTypes={
    fundWallet:PropTypes.func.isRequired,
    funding_errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
}
const mapStateToProps= state=>({
  funding_errors: state.funding_errors,
  security: state.security
})
export default connect(mapStateToProps,{fundWallet}) (FundWalletForm)