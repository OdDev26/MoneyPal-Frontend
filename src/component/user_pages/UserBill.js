
import React, { Component } from 'react';
import UserFooter from '../Layout/UserFooter';

class UserBill extends Component {
    render() {
        const {billingInfo}= this.props
        return (
            <div>
                <h1>{billingInfo.invoice}</h1>
                <h2>{billingInfo.service}</h2>
                <h3>{billingInfo.provider}</h3>
                <UserFooter/>
            </div>
        );
    }
}

export default UserBill;