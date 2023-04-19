import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {registerUser} from '../../actions/securityActions'
import UnauthorizedUserHeader from '../Layout/UnauthorizedUserHeader'
import UserFooter from '../Layout/UserFooter'


 class UserRegister extends Component {
     constructor(){
         super()
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            userName:"",
            password:"",
            confirmPassword:"",
            dateOfBirth:"",
            phoneNumber:""
        }
        this.onChange= this.onChange.bind(this)
        this.onSubmit= this.onSubmit.bind(this)
     }

     onSubmit(e){
         e.preventDefault()
         const payload={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            userName:this.state.userName,
            password:this.state.password,
            confirmPassword:this.state.confirmPassword,
            dateOfBirth:this.state.dateOfBirth,
            phoneNumber:this.state.phoneNumber
         }
         this.props.registerUser(payload,this.props.history)
     }
     onChange(e){
        this.setState({[e.target.name]:e.target.value
        })
     }
     
  render() {
      return (
        <div className="register">
        <UnauthorizedUserHeader/>
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Sign Up</h1>
                    <p className="lead text-center">Create your Account</p>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="First name" name="firstName"
                                 value={this.state.firstName} onChange={this.onChange} />
                                 <div><span style={{"color":"red"}}>{this.props.registrationError.registrationError.firstName}</span></div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Last name" name="lastName"   value={this.state.lastName} onChange={this.onChange}/>
                            <div><span style={{"color":"red"}}>{this.props.registrationError.registrationError.lastName}</span></div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-lg" placeholder="Email" name="email"  value={this.state.email} onChange={this.onChange} />
                            <div><span style={{"color":"red"}}>{this.props.registrationError.registrationError.email}</span></div>
                            </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="User name" name="userName"  value={this.state.userName} onChange={this.onChange} />
                            <div><span style={{"color":"red"}}>{this.props.registrationError.registrationError.userName}</span></div>
                            </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg" placeholder="Password"
                                name="password"  value={this.state.password} onChange={this.onChange} />
                                <div><span style={{"color":"red"}}>{this.props.registrationError.registrationError.password}</span></div>
                        </div>
                        <div className="form-group">
                        <input type="password" className="form-control form-control-lg" placeholder="Confirm password"
                            name="confirmPassword"  value={this.state.confirmPassword} onChange={this.onChange} />
                            <div><span style={{"color":"red"}}>{this.props.registrationError.registrationError.confirmPassword}</span></div>
                    </div>
                    <div className="form-group">
                    <h9>Date Of Birth</h9>
                    <input type="date" className="form-control form-control-lg" placeholder="Date Of Birth"
                        name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.onChange} />
                        <div><span style={{"color":"red"}}>{this.props.registrationError.registrationError.dateOfBirth}</span></div>
                </div>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Phone number"
                    name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} />
                    <div><span style={{"color":"red"}}>{this.props.registrationError.registrationError.phoneNumber}</span></div>
            </div>
           <input type="submit" className="btn btn-danger btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
        <UserFooter/>
    </div>
    )
  }
}

UserRegister.propTypes={
    registerUser: PropTypes.func.isRequired,
    registrationError: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
}
const mapStateToProps= state=>({
    registrationError: state.registrationError,
    security: state.security
})

export default connect(mapStateToProps,{registerUser}) (UserRegister)