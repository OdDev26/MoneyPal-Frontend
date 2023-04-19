import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class UnauthorizedUserHeader  extends Component {
    render() {

        return (
          <div>
          <nav class="navbar navbar-expand-sm navbar-dark bg-danger mb-4">
          <div class="container">
              <Link class="navbar-brand" to="/user">
                 MoneyPal
              </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                  <span class="navbar-toggler-icon" />
              </button>
  
              <div class="collapse navbar-collapse" id="mobile-nav">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                          <Link class="nav-link" to="/user/register">
                              Sign Up
                          </Link>
                      </li>
                      <li class="nav-item">
                          <Link class="nav-link" to="/user/login">
                              Login
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      </div>
          );
         
      }
}


export default UnauthorizedUserHeader