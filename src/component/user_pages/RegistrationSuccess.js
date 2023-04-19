import React, { Component } from 'react'

export default class RegistrationSuccess extends Component {
    redirect(){
        setTimeout(() => {
            this.props.history.push("/user/login")
        }, 3000);
    }
  render() {
    return (
      <div>
        <h1>Check email for verfication link</h1>
        {this.redirect()}
      </div>
    )
  }
}
