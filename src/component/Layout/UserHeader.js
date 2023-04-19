import React, { Component } from 'react'
import {logout} from '../../actions/securityActions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'



class UserHeader extends Component {
    logout(){
        this.props.logout()
        window.location.href("/")
    }
  render() {
    const userIsAuthenticated=(
        <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav ml-auto">
        <li>
        <Link style={{"color":"white"}} className="nav-link" to="#">
       UserDashboard
        </Link>
            </li>
            <li className="nav-item">
                <Link style={{"color":"white"}} className="nav-link" to="/user" onClick={this.logout.bind(this)}>
                    Logout
                </Link>
            </li>
            <li>
            </li>
        </ul>
    </div>        
    )
    return (
      <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-4">
      <div className="container">
          <Link className="navbar-brand"  to="#">
              Moneypal
          </Link> 
         {/**<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
              <span className="navbar-toggler-icon" />
    </button>**/}
          <Link className='nav-link' style={{"color":"white"}}  to="/viewAllServices">View All Services</Link><br/>    
          <Link className="navbar-link" style={{"color":"white", "marginRight":"10px"}} to="/payment/form">
          Pay for service
      </Link>
      
      <Link className="navbar-link" style={{"color":"white"}} to='/contact/admin'>Get A Wallet</Link>
          {userIsAuthenticated}
          </div>
  </nav>
  </div>
      );
     
  }
}

UserHeader.propTypes={
    logout: PropTypes.func.isRequired
}

// const mapStateToProps= state=>({
//     security: state.security
// })
export default connect(null,{logout}) (UserHeader)
