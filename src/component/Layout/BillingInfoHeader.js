import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/securityActions'
import PropTypes from 'prop-types'

 class BillingInfoHeader extends Component {
    logout(){
        this.props.logout()
        window.location.href("/")
    }
  render() {
    const billingHeader=(
        <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav ml-auto">
        <li>
        </li>
        <li>
        <Link style={{"color":"white"}} className="nav-link" to="/user" onClick={this.logout.bind(this)}>
        Log out
    </Link>
            </li>
        </ul>
    </div>        
    )
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-4">
        <div className="container">
        <Link style={{"color":"white"}} className="nav-link" to="#">
        MoneyPal
     </Link>
     <Link className='nav-link' style={{"color":"white"}}  to="/viewAllServices">View All Services</Link><br/>    
            {billingHeader}
            </div>
            </nav>
    )
  }
}
BillingInfoHeader.propTypes={
    logout: PropTypes.func.isRequired
}

export default connect(null,{logout}) (BillingInfoHeader)
