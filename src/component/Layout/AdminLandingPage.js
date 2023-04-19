import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import AdminFooter from './AdminFooter';
import UnAuthorizedAdminHeader from './UnAuthorizedAdminHeader';

class AdminLandingPage extends Component {
    render() {
        return (     
        <div>
        <UnAuthorizedAdminHeader/>
        <div className="landing">
        <div className="light-overlay landing-inner text-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-3 mb-4">MoneyPal</h1>
                        <p className="lead">
                            Create your account to create users wallets and add services
                        </p>
                        <hr />
                        <Link className="btn btn-lg btn-primary mr-2" to="/admin/register">
                            Sign Up
                        </Link>
                        <Link to="/admin/login" className="btn btn-lg btn-danger mr-2">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AdminFooter/>
    </div>
   
        );
    }
}

export default AdminLandingPage;