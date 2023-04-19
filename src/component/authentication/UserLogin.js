import React, { Component } from 'react'
import {login} from '../../actions/securityActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UnauthorizedUserHeader from '../Layout/UnauthorizedUserHeader'
class UserLogin extends Component {
  constructor(){
      super()
      this.state={
          "usernameOrEmail":"",
          "password":""
      }
      this.onChange= this.onChange.bind(this)
      this.onSubmit= this.onSubmit.bind(this)
    } 
  componentWillReceiveProps(nextProps){
      if(nextProps.security.validToken){
          setTimeout(()=>{
            this.props.history.push(`/userDashboard/${this.props.security.user.sub}`)
          },1000)
          
      }
      else{this.props.history.push("/unvalidated/email")}
  } 
  onChange(e){
      this.setState({
          [e.target.name]:e.target.value
      })
  } 
  onSubmit(e){
   e.preventDefault()
   const request={
    usernameOrEmail:this.state.usernameOrEmail,
    password:this.state.password
   }
   console.log(this.state.usernameOrEmail)
   this.props.login(request)

  }
  render() {
  
    return (
        <div className="login">
        <UnauthorizedUserHeader/>
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Log In</h1>
                    <form onSubmit={this.onSubmit}>
                        <div >
                            <input type="text" className="form-control form-control-lg" placeholder="Username or Email" name="usernameOrEmail" value={this.state.usernameOrEmail} onChange={this.onChange} />
                            <h6 style={{"color":"red"}}>{this.props.errors.username}</h6>
                        </div>
                        <div>
                            <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                        </div>
                        <h6 style={{"color":"red"}}>{this.props.errors.password}</h6>
                        <input type="submit" className="btn btn-danger btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>

    )
  }
}
UserLogin.propTypes={
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
}
const mapStateToProps= state=>({
    errors: state.errors,
    security: state.security
})
export default connect(mapStateToProps,{login})(UserLogin)
