import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


 class FundingSuccessPage extends Component {
    redirect(){
        this.props.history.push(`/userDashboard/${this.props.security.user.sub}`)
        console.log(this.props.security.user.sub)
      }
      render() {
        return (
          <div>
          <h1>Funding successful check email for receipt</h1>
          {setTimeout(() => {
            this.redirect()
          }, 3000)}
          </div>
        )
      }
}
FundingSuccessPage.prototypes={
    security: PropTypes.object.isRequired
}
const mapStateToProps= state=>({
    security:state.security
})
export default connect(mapStateToProps) (FundingSuccessPage)