import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import UserFooter from './UserFooter';
import UnauthorizedUserHeader from './UnauthorizedUserHeader';

class UserLandingPage extends Component {
    render() {
        return (
        <div>
        <UnauthorizedUserHeader/>
        <div className="landing">
        <div className="light-overlay landing-inner text-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-3 mb-4">MoneyPal</h1>
                        <p className="lead">
                            Create your account to offer and request for services
                        </p>
                        <hr />
                        <Link className="btn btn-lg btn-primary mr-2" to="/user/register">
                            Sign Up
                        </Link>
                        <Link to="/user/login" className="btn btn-lg btn-danger mr-2">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <UserFooter/>
    </div>
   
        );
    }
}

export default UserLandingPage;