import React,{Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



class PaymentSuccessView extends Component {
  redirect(){
      this.props.history.push(`/userDashboard/${this.props.security.user.sub}`)
  }
  render() {
    return (
      <div>
      <h1>Payment successful, check email for transaction details</h1>
      {setTimeout(() => {
        this.redirect()
      }, 4000)}
      </div>
    )
  }
}

PaymentSuccessView.prototypes={
  security: PropTypes.object.isRequired
}
const mapStateToProps= state=>({
  security:state.security
})
export default connect(mapStateToProps) (PaymentSuccessView)