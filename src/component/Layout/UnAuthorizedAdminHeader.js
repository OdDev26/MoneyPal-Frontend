import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class UnAuthorizedAdminHeader extends Component {
  render() {
    return (
      <div>
        <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-danger mb-4">
        <div class="container">
            <Link class="navbar-brand" to="/admin">
               MoneyPal
            </Link>
            <div class="collapse navbar-collapse" id="mobile-nav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to="/admin/register">
                            Sign Up
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/admin/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
    </div>
        );
  }
}
export default UnAuthorizedAdminHeader
