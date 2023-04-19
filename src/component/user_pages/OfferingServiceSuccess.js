import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class OfferingServiceSuccess extends Component {

  redirect(){
    this.props.history.push(`/userDashboard/${this.props.security.user.sub}`)
    console.log(this.props.security.user.sub)
  }

  render() {
    return (
      <div>
      <h6>Service successfully offered, Contact admin if you don't have a wallet to receive payments</h6>
       {setTimeout(() => {
         this.redirect()
       }, 6000)}
      </div>
    )
  }
}

OfferingServiceSuccess.prototypes={
  security: PropTypes.object.isRequired
}
const mapStateToProps= state=>({
  security:state.security
})
export default connect(mapStateToProps) (OfferingServiceSuccess)
