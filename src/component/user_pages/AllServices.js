import React, { Component } from 'react'
import {getServices} from '../../actions/projectActions'
import {connect}  from 'react-redux'
import PropTypes from 'prop-types'
import UserServiceView from './UserServiceView'
import ViewAllServicesHeader from '../Layout/ViewAllServicesHeader'
import UserFooter from '../Layout/UserFooter'

class AllServices extends Component {
  componentDidMount(){
    this.props.getServices()
    console.log(this.props.services)
  }
  render() {
  const {services}= this.props.services
    return (
      <div>
      <ViewAllServicesHeader/>
      <div class="container">
      <h2 style={{"color":"blue"}}>List of Services</h2>
     {services.map(service=>
     (<UserServiceView key={service.id} service={service}/>))}
     </div>
     <UserFooter/>
    </div>
    )
  }
}
AllServices.propTypes={
  services: PropTypes.object.isRequired,
  getServices: PropTypes.func.isRequired
}
const mapStateToProps=(state)=>({
  services: state.services
})
export default connect(mapStateToProps,{getServices})(AllServices)
