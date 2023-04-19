import React, { Component } from 'react';
import AddAServiceButton from './AddAServiceButton.js';
import AdminServicesView from './AdminServicesView'
import {connect} from "react-redux"
import {getServices1} from '../../actions/projectActions'
import PropTypes from 'prop-types'
import AdminHeader from '../Layout/AdminHeader.js';
import AdminFooter from '../Layout/AdminFooter.js';


class AdminDashboard extends Component {
    componentDidMount(){
        this.props.getServices1()
    }
    render() {
        const {services}= this.props.services
        return (
          <div>
          <AdminHeader/>
              <div className="col-md-12">
                        <AddAServiceButton/>
                        <br/><br/>
                        {services.map(service=>
                            (<AdminServicesView service={service}/>))}
             </div>
             <AdminFooter/>
             </div>
           
        );
    }
}
AdminDashboard.propTypes=({
  services:PropTypes.object.isRequired,
  getServices1:PropTypes.func.isRequired
})
const mapStateToProps=(state)=>({ 
    services:state.services})
   
export default connect(mapStateToProps,{getServices1})(AdminDashboard);