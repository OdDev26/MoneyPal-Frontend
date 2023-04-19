import React, { Component } from 'react'
import {logout} from '../../actions/securityActions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
 

class ViewAllServicesHeader extends Component {
    logout(){
        this.props.logout()
        window.location.href("/user")
    }
  render() {
    const viewAllServicesHeader=(
        <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav ml-auto">
        <li>
        <Link style={{"color":"white"}} className="nav-link" to="#">
       UserDashboard
    </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/user" onClick={this.logout.bind(this)} style={{"color":"white"}}>
                    Logout
                </Link>
            </li>
        </ul>
    </div>        
    )
    return (
        <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-4">
        <Link style={{"color":"white"}} className="nav-link" to="#">
        MoneyPal
     </Link>
        <div className="container">
            {viewAllServicesHeader}
            </div>
    </nav>
    </div>
    )
  }
}
ViewAllServicesHeader.propTypes={
    logout: PropTypes.func.isRequired
}

export default connect(null,{logout})(ViewAllServicesHeader)
