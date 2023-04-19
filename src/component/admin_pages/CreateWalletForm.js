import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createWallet} from '../../actions/projectActions'
import '../../App.css'
 class CreateWalletForm extends Component {
     constructor(){
         super()
         this.state={
             email:"",
             walletName:""
         }

         this.onChange= this.onChange.bind(this)
         this.onSubmit= this.onSubmit.bind(this)

     }
     onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
     }
     walletCreationSuccess(){
          setTimeout(()=>{
             <h1>Wallet created successfully</h1>
         },2000)
     }
     onSubmit(e){
         e.preventDefault()
         const payload={
             email:this.state.email,
             walletName:this.state.walletName
         }
         this.props.createWallet(payload,this.props.history)
        //  this.props.history.push("/admindashboard")
     }

  render() {
    return (
        <div  style={{"textAlign":"center"}}>
        <form onSubmit={this.onSubmit}>
        <div className='form-group-wallet-form'>
        <h1>Create Wallet Form</h1>
            <input style={{"width":"400px"}} type="text" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange} /><br/>
            <div className='wallet-creation-error'><span style={{"color":"red","marginLeft":"0px"}}>{this.props.errors.email}</span></div>
            <input style={{"width":"400px"}} type="text" className="form-control" placeholder="Wallet name" name="walletName" value={this.state.walletName} onChange={this.onChange}/>
            <div className='wallet-creation-error'><span style={{"color":"red"}}>{this.props.errors.walletName}</span></div><br/>
        <div >
        <input style={{"width":"400px"}} type="submit" className="btn btn-danger"  />
        </div>
        </div>
        </form>
      </div>
    )
  }
}

CreateWalletForm.propTypes={
    createWallet:PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps= state=>({
    errors: state.errors
})

export default connect(mapStateToProps,{createWallet}) (CreateWalletForm)
