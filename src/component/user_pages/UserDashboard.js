import React, { Component } from 'react';
import Wallet from './Wallet';
import {getWalletDetails} from '../../actions/projectActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import UserHeader from '../Layout/UserHeader';
import UserFooter from '../Layout/UserFooter';


class UserDashboard extends Component {
    componentDidMount(){
        const {sub}= this.props.match.params    
        this.props.getWalletDetails(sub)
    }
    render() {
        const {walletDetails}= this.props.walletDetails
        return (
            <div>
            <UserHeader/>
         <Wallet wallet={walletDetails}/>
         <UserFooter/>
            </div>
        );
    }
}
UserDashboard.propTypes={
    walletDetails:PropTypes.object.isRequired,
    getWalletDetails:PropTypes.func.isRequired
}

const mapStateToProps=state=>({
    walletDetails: state.walletDetails
})

export default connect(mapStateToProps,{getWalletDetails}) (UserDashboard);