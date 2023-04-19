import React, { Component } from 'react'
import {logout} from '../../actions/securityActions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AdminFooter from './AdminFooter'

 class AdminHeader extends Component {
    logout(){
        this.props.logout()
        window.location.href("/")
    }
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-4">
      <div className="container">
          <Link className="navbar-brand"  to="#">
              Moneypal
          </Link> 
        
           <Link className="navbar-link" style={{"color":"white", "marginRight":"10px"}} to="/create/wallet">
          Create a wallet
            </Link>    
        <Link style={{"color":"white"}} className="nav-link" to="#">
        AdminDashboard
         </Link>
         <Link style={{"color":"white"}} className="nav-link" to="/admin" onClick={this.logout.bind(this)}>
         Logout
          </Link>
          </div>
          </nav>
          </div>
    )
  }
}

AdminHeader.propTypes={
   logout: PropTypes.func.isRequired
}

export default connect(null,{logout}) (AdminHeader)