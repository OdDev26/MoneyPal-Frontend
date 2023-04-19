import React, { Component } from 'react'

export default class UnvalidatedEmailPage extends Component {
    redirect(){
        setTimeout(() => {
            this.props.history.push("/user/login")
        }, 4000);
    }
  render() {
    return (
      <div>
        <h1>Please validate your email by clicking the link sent to you</h1>
        {this.redirect()}
      </div>
    )
  }
}
